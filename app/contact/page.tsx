'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { rfqSchema, type RFQFormData } from '@/lib/validation'
import { Mail, MapPin, Clock, ShieldCheck } from 'lucide-react'

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'connect@ovuxbiotech.com', href: 'mailto:connect@ovuxbiotech.com' },
  { icon: MapPin, label: 'Location', value: 'Canada - serving global markets' },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours on business days' },
]

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

      if (!response.ok) throw new Error('Failed to submit RFQ')

      setSubmitStatus({
        type: 'success',
        message: 'Your request has been received. Our team will respond within 24 hours.',
      })
      reset()
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Submission failed. Please try again or email us directly at connect@ovuxbiotech.com.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Page header */}
      <section className="section-pad bg-card border-b border-hairline">
        <div className="container-wide">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Get in Touch</p>
            <h1 className="heading-1 text-ink mb-4">Request a Quote</h1>
            <p className="body-lg">
              Describe what you need and our team in Canada will respond within 24 hours with availability, lead time, and pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitStatus && (
                <div
                  className={`mb-6 p-4 rounded-sm text-sm border ${
                    submitStatus.type === 'success'
                      ? 'bg-accent-tint border-accent/20 text-accent-hover'
                      : 'bg-red-50 border-red-200 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="bg-card border border-hairline rounded-md p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-ink mb-1.5">
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name')}
                        className="input-field"
                        placeholder="Jane Smith"
                        autoComplete="name"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-ink mb-1.5">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...register('company')}
                        className="input-field"
                        placeholder="Acme Pharma Ltd."
                        autoComplete="organization"
                      />
                      {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-ink mb-1.5">
                        Work email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="input-field"
                        placeholder="jane@company.com"
                        autoComplete="email"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-xs font-medium text-ink mb-1.5">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="country"
                        type="text"
                        {...register('country')}
                        className="input-field"
                        placeholder="United States"
                        autoComplete="country-name"
                      />
                      {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productCategory" className="block text-xs font-medium text-ink mb-1.5">
                      Product interest <span className="text-red-500">*</span>
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
                      <option value="hospital-consumables">Hospital Consumables</option>
                      <option value="custom-sourcing">Custom Sourcing</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.productCategory && <p className="mt-1 text-xs text-red-600">{errors.productCategory.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="productDescription" className="block text-xs font-medium text-ink mb-1.5">
                      Product description or part number <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="productDescription"
                      {...register('productDescription')}
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Describe the product, include part numbers, specifications, or OEM brand if known..."
                    />
                    {errors.productDescription && <p className="mt-1 text-xs text-red-600">{errors.productDescription.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quantity" className="block text-xs font-medium text-ink mb-1.5">
                        Quantity or frequency
                      </label>
                      <input
                        id="quantity"
                        type="text"
                        {...register('quantity')}
                        className="input-field"
                        placeholder="e.g. 10 units, monthly"
                      />
                    </div>

                    <div>
                      <label htmlFor="requiredCerts" className="block text-xs font-medium text-ink mb-1.5">
                        Required certifications
                      </label>
                      <input
                        id="requiredCerts"
                        type="text"
                        {...register('requiredCerts')}
                        className="input-field"
                        placeholder="e.g. FDA, ISO, CE"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-ink mb-1.5">
                      Additional message
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={3}
                      className="input-field resize-none"
                      placeholder="Any additional context, urgency, or delivery requirements..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                    </button>
                    <div className="flex items-center justify-center gap-1.5 mt-3">
                      <ShieldCheck size={12} strokeWidth={1.5} className="text-muted" />
                      <p className="text-xs text-muted">
                        Your information is kept private and used only to respond to your inquiry.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Contact details */}
              <div className="bg-card border border-hairline rounded-md p-6 space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-accent-tint flex-shrink-0">
                      <Icon size={14} strokeWidth={1.5} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-ink mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-xs text-accent hover:text-accent-hover transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-xs text-muted">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location block */}
              <div className="bg-ink rounded-md p-6">
                <p className="eyebrow text-accent-tint/70 mb-3">Where We Are</p>
                <p className="font-heading text-xl text-white font-medium mb-2">Based in Canada.</p>
                <p className="text-sm text-white/50 leading-relaxed">
                  Canadian incorporated, we serve procurement teams across North America, Europe, the Middle East, and Asia. Inquiries from all regions welcome.
                </p>
              </div>

              {/* What to expect */}
              <div className="bg-card border border-hairline rounded-md p-6">
                <p className="font-body text-xs font-semibold text-ink mb-4">What happens next</p>
                <div className="space-y-3">
                  {[
                    'We receive and review your inquiry',
                    'We assess availability through our supplier network',
                    'We respond within 24 hours with a quote or follow-up questions',
                  ].map((step, i) => (
                    <div key={step} className="flex gap-2.5 items-start">
                      <span className="tabular text-xs text-accent/50 font-semibold pt-0.5">{i + 1}.</span>
                      <span className="text-xs text-muted">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
