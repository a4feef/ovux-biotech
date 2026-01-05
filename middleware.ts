import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')
    
    // Allow access to login page
    if (req.nextUrl.pathname === '/admin/login') {
      return NextResponse.next()
    }

    // Protect admin routes
    if (isAdminRoute && !token) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    // Check role-based access
    if (isAdminRoute && token) {
      const role = token.role as string
      
      // Staff can only access RFQ and product view pages
      if (role === 'STAFF') {
        const staffAllowedRoutes = [
          '/admin',
          '/admin/rfqs',
          '/admin/products',
          '/admin/analytics',
        ]
        
        const isAllowed = staffAllowedRoutes.some(route => 
          req.nextUrl.pathname === route || req.nextUrl.pathname.startsWith(route + '/')
        )
        
        if (!isAllowed) {
          return NextResponse.redirect(new URL('/admin', req.url))
        }
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow public routes
        if (!req.nextUrl.pathname.startsWith('/admin')) {
          return true
        }
        
        // Allow login page
        if (req.nextUrl.pathname === '/admin/login') {
          return true
        }
        
        // Require token for admin routes
        return !!token
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*'],
}

