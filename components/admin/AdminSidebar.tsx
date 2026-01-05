'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface AdminSidebarProps {
  userRole: string
}

export default function AdminSidebar({ userRole }: AdminSidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: '📊', allowedRoles: ['ADMIN', 'STAFF'] },
    { href: '/admin/rfqs', label: 'RFQs', icon: '📋', allowedRoles: ['ADMIN', 'STAFF'] },
    { href: '/admin/products', label: 'Products', icon: '📦', allowedRoles: ['ADMIN', 'STAFF'] },
    { href: '/admin/categories', label: 'Categories', icon: '📁', allowedRoles: ['ADMIN'] },
    { href: '/admin/users', label: 'Users', icon: '👥', allowedRoles: ['ADMIN'] },
    { href: '/admin/audit-logs', label: 'Audit Logs', icon: '📝', allowedRoles: ['ADMIN'] },
    { href: '/admin/analytics', label: 'Analytics', icon: '📈', allowedRoles: ['ADMIN', 'STAFF'] },
  ]

  const filteredItems = menuItems.filter((item) => item.allowedRoles.includes(userRole))

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold text-primary-600">Admin Panel</h2>
      </div>
      <nav className="mt-4">
        {filteredItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors',
                isActive && 'bg-primary-50 text-primary-600 border-r-4 border-primary-600'
              )}
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

