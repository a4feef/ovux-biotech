'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { rfqSchema, type RFQFormData } from '@/lib/validation'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RFQFormData>({
    resolver: zodResolver(rfqSchema),
  })

  const onSubmit = async (data: RFQFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit RFQ')
      }

      setSubmitStatus({ type: 'success', message: 'Your request has been submitted successfully. We will contact you soon.' })
      reset()
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit your request. Please try again or contact us directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Request a Quote</h1>
        <p className="text-xl text-gray-700">
          Fill out the form below to request a quote for pharmaceutical or laboratory equipment. 
          Our team will respond promptly.
        </p>
      </div>

      <div className="card">
        {submitStatus && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="input-field"
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                type="text"
                {...register('company')}
                className="input-field"
                placeholder="Your company name"
              />
              {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="input-field"
                placeholder="your.email@company.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                id="country"
                type="text"
                {...register('country')}
                className="input-field"
                placeholder="Your country"
              />
              {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-2">
              Product Category <span className="text-red-500">*</span>
            </label>
            <select
              id="productCategory"
              {...register('productCategory')}
              className="input-field"
            >
              <option value="">Select a category</option>
              <option value="chromatography-analytical">Chromatography & Analytical</option>
              <option value="laboratory-equipment">Laboratory Equipment</option>
              <option value="pharma-production-support">Pharma Production Support</option>
              <option value="custom-sourcing">Custom Sourcing</option>
              <option value="other">Other</option>
            </select>
            {errors.productCategory && <p className="mt-1 text-sm text-red-600">{errors.productCategory.message}</p>}
          </div>

          <div>
            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-2">
              Product Description / Part Number <span className="text-red-500">*</span>
            </label>
            <textarea
              id="productDescription"
              {...register('productDescription')}
              rows={4}
              className="input-field"
              placeholder="Please describe the product, equipment, or part number you are looking for..."
            />
            {errors.productDescription && <p className="mt-1 text-sm text-red-600">{errors.productDescription.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity / Frequency
              </label>
              <input
                id="quantity"
                type="text"
                {...register('quantity')}
                className="input-field"
                placeholder="e.g., 10 units, monthly"
              />
            </div>

            <div>
              <label htmlFor="requiredCerts" className="block text-sm font-medium text-gray-700 mb-2">
                Required Certifications
              </label>
              <input
                id="requiredCerts"
                type="text"
                {...register('requiredCerts')}
                className="input-field"
                placeholder="e.g., FDA, ISO, CE"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Message
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={4}
              className="input-field"
              placeholder="Any additional information or requirements..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <h3 className="font-semibold mb-2">Email</h3>
          <a href="mailto:info@ovuxbiotech.com" className="text-primary-600 hover:text-primary-700">
            info@ovuxbiotech.com
          </a>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-2">Location</h3>
          <p className="text-gray-600">Canada</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-2">Response Time</h3>
          <p className="text-gray-600">Within 24-48 hours</p>
        </div>
      </div>
    </div>
  )
}

