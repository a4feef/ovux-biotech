import { z } from 'zod'

// RFQ form validation schema
export const rfqSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().min(2, 'Company name must be at least 2 characters').max(200),
  email: z.string().email('Invalid email address'),
  country: z.string().min(2, 'Country is required').max(100),
  productCategory: z.string().min(1, 'Product category is required'),
  productDescription: z.string().min(10, 'Product description must be at least 10 characters').max(2000),
  quantity: z.string().optional(),
  frequency: z.string().optional(),
  requiredCerts: z.string().optional(),
  message: z.string().max(5000).optional(),
})

export type RFQFormData = z.infer<typeof rfqSchema>

// Login validation schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export type LoginFormData = z.infer<typeof loginSchema>

// Product validation schema
export const productSchema = z.object({
  name: z.string().min(2, 'Product name must be at least 2 characters').max(200),
  description: z.string().min(10, 'Description must be at least 10 characters').max(5000),
  categoryId: z.string().min(1, 'Category is required'),
  isVisible: z.boolean().default(true),
})

export type ProductFormData = z.infer<typeof productSchema>

// Category validation schema
export const categorySchema = z.object({
  name: z.string().min(2, 'Category name must be at least 2 characters').max(100),
  slug: z.string().min(2, 'Slug must be at least 2 characters').max(100).regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  description: z.string().min(10, 'Description must be at least 10 characters').max(2000),
  order: z.number().int().min(0).default(0),
})

export type CategoryFormData = z.infer<typeof categorySchema>

// User validation schema
export const userSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  role: z.enum(['ADMIN', 'STAFF']),
  password: z.string().min(8, 'Password must be at least 8 characters').optional(),
  isActive: z.boolean().default(true),
})

export type UserFormData = z.infer<typeof userSchema>

// Sanitize string input to prevent XSS
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .trim()
    .slice(0, 10000) // Limit length
}

// Validate file upload
export function validateFile(file: File): { valid: boolean; error?: string } {
  const maxSize = parseInt(process.env.MAX_FILE_SIZE || '5242880') // 5MB default
  const allowedTypes = (process.env.ALLOWED_FILE_TYPES || 'image/jpeg,image/png,image/webp').split(',')

  if (file.size > maxSize) {
    return { valid: false, error: `File size exceeds ${maxSize / 1024 / 1024}MB limit` }
  }

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: `File type ${file.type} is not allowed` }
  }

  return { valid: true }
}

