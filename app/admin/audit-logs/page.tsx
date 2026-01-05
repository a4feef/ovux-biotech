'use client'

import { useState, useEffect } from 'react'
import { formatDateTime } from '@/lib/utils'

interface AuditLog {
  id: string
  action: string
  entityType: string | null
  entityId: string | null
  details: string | null
  ipAddress: string | null
  userAgent: string | null
  createdAt: string
  user: {
    name: string
    email: string
  }
}

export default function AuditLogsPage() {
  const [logs, setLogs] = useState<AuditLog[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetchLogs()
  }, [filter])

  const fetchLogs = async () => {
    try {
      // Note: You'll need to create this API route
      const params = new URLSearchParams()
      if (filter) params.set('action', filter)
      const response = await fetch(`/api/admin/audit-logs?${params}`)
      const data = await response.json()
      setLogs(data.logs || [])
    } catch (error) {
      console.error('Error fetching audit logs:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-12">Loading...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Audit Logs</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="input-field"
        >
          <option value="">All Actions</option>
          <option value="LOGIN">Login</option>
          <option value="RFQ_UPDATE">RFQ Update</option>
          <option value="PRODUCT_CREATE">Product Create</option>
          <option value="PRODUCT_UPDATE">Product Update</option>
          <option value="PRODUCT_DELETE">Product Delete</option>
          <option value="CATEGORY_CREATE">Category Create</option>
          <option value="CATEGORY_UPDATE">Category Update</option>
          <option value="CATEGORY_DELETE">Category Delete</option>
          <option value="USER_CREATE">User Create</option>
          <option value="USER_UPDATE">User Update</option>
        </select>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Timestamp</th>
                <th className="text-left p-3">User</th>
                <th className="text-left p-3">Action</th>
                <th className="text-left p-3">Entity</th>
                <th className="text-left p-3">IP Address</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-600">
                    {formatDateTime(log.createdAt)}
                  </td>
                  <td className="p-3">
                    <p className="font-semibold text-sm">{log.user.name}</p>
                    <p className="text-xs text-gray-500">{log.user.email}</p>
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
                      {log.action}
                    </span>
                  </td>
                  <td className="p-3 text-sm">
                    {log.entityType && (
                      <span>
                        {log.entityType}
                        {log.entityId && ` (${log.entityId.slice(0, 8)}...)`}
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-sm text-gray-600">{log.ipAddress || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {logs.length === 0 && (
            <div className="text-center py-12 text-gray-500">No audit logs found</div>
          )}
        </div>
      </div>
    </div>
  )
}

