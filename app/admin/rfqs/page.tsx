'use client'

import { useState, useEffect } from 'react'
import { formatDateTime } from '@/lib/utils'
import Link from 'next/link'

interface RFQ {
  id: string
  name: string
  company: string
  email: string
  country: string
  productCategory: string
  productDescription: string
  quantity: string | null
  frequency: string | null
  requiredCerts: string | null
  message: string | null
  status: string
  createdAt: string
  updatedAt: string
  updatedByUser: { name: string; email: string } | null
}

export default function RFQsPage() {
  const [rfqs, setRfqs] = useState<RFQ[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState<string>('')
  const [selectedRFQ, setSelectedRFQ] = useState<RFQ | null>(null)

  useEffect(() => {
    fetchRFQs()
  }, [statusFilter])

  const fetchRFQs = async () => {
    try {
      const params = new URLSearchParams()
      if (statusFilter) params.set('status', statusFilter)
      const response = await fetch(`/api/admin/rfqs?${params}`)
      const data = await response.json()
      setRfqs(data.rfqs || [])
    } catch (error) {
      console.error('Error fetching RFQs:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch('/api/admin/rfqs', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      })
      if (response.ok) {
        fetchRFQs()
        if (selectedRFQ?.id === id) {
          setSelectedRFQ({ ...selectedRFQ, status: newStatus })
        }
      }
    } catch (error) {
      console.error('Error updating RFQ status:', error)
    }
  }

  const exportToCSV = async () => {
    try {
      const response = await fetch('/api/admin/rfqs/export')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `rfqs-${new Date().toISOString().split('T')[0]}.csv`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error exporting RFQs:', error)
    }
  }

  if (loading) {
    return <div className="text-center py-12">Loading...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">RFQ Management</h1>
        <div className="flex gap-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input-field"
          >
            <option value="">All Statuses</option>
            <option value="NEW">New</option>
            <option value="IN_REVIEW">In Review</option>
            <option value="QUOTED">Quoted</option>
            <option value="CLOSED">Closed</option>
          </select>
          <button onClick={exportToCSV} className="btn-secondary">
            Export CSV
          </button>
        </div>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Company</th>
                <th className="text-left p-3">Contact</th>
                <th className="text-left p-3">Category</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Date</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rfqs.map((rfq) => (
                <tr key={rfq.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <p className="font-semibold">{rfq.company}</p>
                    <p className="text-sm text-gray-600">{rfq.name}</p>
                  </td>
                  <td className="p-3">
                    <p className="text-sm">{rfq.email}</p>
                    <p className="text-xs text-gray-500">{rfq.country}</p>
                  </td>
                  <td className="p-3 text-sm">{rfq.productCategory}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 text-xs rounded ${
                      rfq.status === 'NEW' ? 'bg-green-100 text-green-800' :
                      rfq.status === 'IN_REVIEW' ? 'bg-yellow-100 text-yellow-800' :
                      rfq.status === 'QUOTED' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {rfq.status}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    {formatDateTime(rfq.createdAt)}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => setSelectedRFQ(rfq)}
                      className="text-primary-600 hover:text-primary-700 text-sm mr-2"
                    >
                      View
                    </button>
                    <select
                      value={rfq.status}
                      onChange={(e) => updateStatus(rfq.id, e.target.value)}
                      className="text-xs border rounded px-2 py-1"
                    >
                      <option value="NEW">New</option>
                      <option value="IN_REVIEW">In Review</option>
                      <option value="QUOTED">Quoted</option>
                      <option value="CLOSED">Closed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {rfqs.length === 0 && (
            <div className="text-center py-12 text-gray-500">No RFQs found</div>
          )}
        </div>
      </div>

      {selectedRFQ && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">RFQ Details</h2>
                <button
                  onClick={() => setSelectedRFQ(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Contact Information</h3>
                  <p><strong>Name:</strong> {selectedRFQ.name}</p>
                  <p><strong>Company:</strong> {selectedRFQ.company}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${selectedRFQ.email}`} className="text-primary-600">{selectedRFQ.email}</a></p>
                  <p><strong>Country:</strong> {selectedRFQ.country}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Product Information</h3>
                  <p><strong>Category:</strong> {selectedRFQ.productCategory}</p>
                  <p><strong>Description:</strong> {selectedRFQ.productDescription}</p>
                  {selectedRFQ.quantity && <p><strong>Quantity:</strong> {selectedRFQ.quantity}</p>}
                  {selectedRFQ.frequency && <p><strong>Frequency:</strong> {selectedRFQ.frequency}</p>}
                  {selectedRFQ.requiredCerts && <p><strong>Required Certifications:</strong> {selectedRFQ.requiredCerts}</p>}
                </div>
                {selectedRFQ.message && (
                  <div>
                    <h3 className="font-semibold mb-2">Additional Message</h3>
                    <p className="text-gray-700">{selectedRFQ.message}</p>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold mb-2">Status & Dates</h3>
                  <p><strong>Status:</strong> {selectedRFQ.status}</p>
                  <p><strong>Created:</strong> {formatDateTime(selectedRFQ.createdAt)}</p>
                  <p><strong>Last Updated:</strong> {formatDateTime(selectedRFQ.updatedAt)}</p>
                  {selectedRFQ.updatedByUser && (
                    <p><strong>Updated By:</strong> {selectedRFQ.updatedByUser.name} ({selectedRFQ.updatedByUser.email})</p>
                  )}
                </div>
                <div className="flex gap-2 pt-4">
                  <select
                    value={selectedRFQ.status}
                    onChange={(e) => updateStatus(selectedRFQ.id, e.target.value)}
                    className="input-field"
                  >
                    <option value="NEW">New</option>
                    <option value="IN_REVIEW">In Review</option>
                    <option value="QUOTED">Quoted</option>
                    <option value="CLOSED">Closed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

