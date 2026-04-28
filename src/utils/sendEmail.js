/**
 * Send form submission to insights@inteliment.com via EmailJS.
 *
 * Setup required (add to .env):
 *   VITE_EMAILJS_SERVICE_ID  , EmailJS service ID
 *   VITE_EMAILJS_TEMPLATE_ID , EmailJS template ID (configure template to send to insights@inteliment.com)
 *   VITE_EMAILJS_PUBLIC_KEY  , EmailJS public key
 *
 * EmailJS template suggested variables:
 *   {{form_type}}, {{from_name}}, {{from_email}}, {{company}}, {{role}},
 *   {{inquiry_type}}, {{message}}, {{assessment_result}}, {{utm}}
 */
import emailjs from '@emailjs/browser'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || ''
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || ''

export async function sendFormEmail(payload) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn('[sendFormEmail] EmailJS env vars not set, skipping email.')
    return
  }

  const templateParams = {
    form_type:         payload.formType || payload.source || 'Form Submission',
    from_name:         payload.name     || '',
    from_email:        payload.email    || '',
    company:           payload.company  || '',
    role:              payload.role     || '',
    inquiry_type:      payload.inquiryType || '',
    timeline:          payload.timeline    || '',
    message:           payload.message    || '',
    assessment_result: payload.assessmentResult
      ? JSON.stringify(payload.assessmentResult, null, 2)
      : '',
    utm: payload.utm ? JSON.stringify(payload.utm) : '',
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
}
