import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { rfqSchema, sanitizeInput } from '@/lib/validation'
import { rateLimit } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'
    const rateLimitResult = rateLimit(`rfq:${ip}`)
    
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '900' } }
      )
    }

    const body = await request.json()

    // Honeypot check — bots fill this field, real users never see it
    if (body.website) {
      return NextResponse.json({ message: 'RFQ submitted successfully' }, { status: 201 })
    }

    // Verify Cloudflare Turnstile token (production only)
    const { cfToken, website: _hp, ...formData } = body
    if (process.env.NODE_ENV === 'production') {
      if (!cfToken) {
        return NextResponse.json({ error: 'Security check required.' }, { status: 400 })
      }
      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: process.env.TURNSTILE_SECRET_KEY, response: cfToken, remoteip: ip }),
      })
      const turnstileData = await turnstileRes.json()
      if (!turnstileData.success) {
        return NextResponse.json({ error: 'Security check failed. Please refresh and try again.' }, { status: 403 })
      }
    }

    // Validate input
    const validationResult = rfqSchema.safeParse(formData)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      company: sanitizeInput(data.company),
      email: sanitizeInput(data.email),
      country: sanitizeInput(data.country),
      productCategory: sanitizeInput(data.productCategory),
      productDescription: sanitizeInput(data.productDescription),
      quantity: data.quantity ? sanitizeInput(data.quantity) : null,
      frequency: data.frequency ? sanitizeInput(data.frequency) : null,
      requiredCerts: data.requiredCerts ? sanitizeInput(data.requiredCerts) : null,
      message: data.message ? sanitizeInput(data.message) : null,
    }

    // Create RFQ
    const rfq = await prisma.rFQ.create({
      data: sanitizedData,
    })

    // TODO: Send email notification (integrate with SMTP service)
    // await sendEmailNotification(rfq)

    return NextResponse.json(
      { message: 'RFQ submitted successfully', id: rfq.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('RFQ submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit RFQ. Please try again later.' },
      { status: 500 }
    )
  }
}

