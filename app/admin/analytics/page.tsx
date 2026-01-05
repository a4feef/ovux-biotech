'use client'

import { useState, useEffect } from 'react'

interface AnalyticsData {
  rfqsByRegion: { country: string; count: number }[]
  rfqsByCategory: { category: string; count: number }[]
  monthlyRFQs: { month: string; count: number }[]
  rfqsByStatus: { status: string; count: number }[]
  totals: {
    rfqs: number
    products: number
    categories: number
  }
  recentRFQs: any[]
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [period, setPeriod] = useState('30')

  useEffect(() => {
    fetchAnalytics()
  }, [period])

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/admin/analytics?period=${period}`)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error('Error fetching analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading || !data) {
    return <div className="text-center py-12">Loading...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="input-field"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="365">Last year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Total RFQs</h3>
          <p className="text-3xl font-bold text-primary-600">{data.totals.rfqs}</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Total Products</h3>
          <p className="text-3xl font-bold text-primary-600">{data.totals.products}</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Total Categories</h3>
          <p className="text-3xl font-bold text-primary-600">{data.totals.categories}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">RFQs by Region</h3>
          <div className="space-y-2">
            {data.rfqsByRegion.map((item) => (
              <div key={item.country} className="flex justify-between items-center">
                <span>{item.country}</span>
                <span className="font-semibold">{item.count}</span>
              </div>
            ))}
            {data.rfqsByRegion.length === 0 && (
              <p className="text-gray-500 text-sm">No data available</p>
            )}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">RFQs by Category</h3>
          <div className="space-y-2">
            {data.rfqsByCategory.map((item) => (
              <div key={item.category} className="flex justify-between items-center">
                <span className="text-sm">{item.category}</span>
                <span className="font-semibold">{item.count}</span>
              </div>
            ))}
            {data.rfqsByCategory.length === 0 && (
              <p className="text-gray-500 text-sm">No data available</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">RFQs by Status</h3>
          <div className="space-y-2">
            {data.rfqsByStatus.map((item) => (
              <div key={item.status} className="flex justify-between items-center">
                <span className="text-sm">{item.status}</span>
                <span className="font-semibold">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Monthly RFQ Volume</h3>
          <div className="space-y-2">
            {data.monthlyRFQs.map((item) => (
              <div key={item.month} className="flex justify-between items-center">
                <span className="text-sm">{item.month}</span>
                <span className="font-semibold">{item.count}</span>
              </div>
            ))}
            {data.monthlyRFQs.length === 0 && (
              <p className="text-gray-500 text-sm">No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

