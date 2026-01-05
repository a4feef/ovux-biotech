// Simple in-memory rate limiting
// For production, consider using Redis or a dedicated rate limiting service

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

const store: RateLimitStore = {}

const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100')
const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000') // 15 minutes default

export function rateLimit(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
  if (process.env.RATE_LIMIT_ENABLED === 'false') {
    return { allowed: true, remaining: Infinity, resetTime: Date.now() + windowMs }
  }

  const now = Date.now()
  const record = store[identifier]

  if (!record || now > record.resetTime) {
    // Create new record or reset expired one
    store[identifier] = {
      count: 1,
      resetTime: now + windowMs,
    }
    return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs }
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime }
  }

  record.count++
  return { allowed: true, remaining: maxRequests - record.count, resetTime: record.resetTime }
}

// Clean up expired entries periodically
setInterval(() => {
  const now = Date.now()
  for (const key in store) {
    if (store[key].resetTime < now) {
      delete store[key]
    }
  }
}, 60000) // Clean up every minute

