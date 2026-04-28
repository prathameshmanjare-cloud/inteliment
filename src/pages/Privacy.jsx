import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import Container from '@/components/ui/Container'
import { Link } from 'react-router-dom'
import { buildPageMeta } from '@/utils/seo'

export default function Privacy() {
  const meta = buildPageMeta(
    'Privacy Policy',
    'Inteliment Privacy Policy, how we collect, use, and protect your personal information under GDPR, Australian Privacy Act, and India DPDP Act.',
    '/privacy'
  )
  return (
    <>
      <SEOHead meta={meta} />

      <HeroSection
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: April 2026"
        variant="compact"
      />

      <section className="py-16 bg-surface section-light">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-slate prose-headings:font-display prose-headings:font-bold prose-headings:text-navy prose-p:text-grey-700 prose-p:font-body prose-li:text-grey-700 prose-li:font-body prose-a:text-teal prose-a:no-underline hover:prose-a:underline">

            <h2>About This Policy</h2>
            <p>
              Inteliment Technologies India Pvt. Ltd. ("Inteliment", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect personal data in compliance with:
            </p>
            <ul>
              <li>The <strong>General Data Protection Regulation (GDPR)</strong>, for individuals in the European Economic Area</li>
              <li>The <strong>Australian Privacy Act 1988</strong> (including the Australian Privacy Principles), for individuals in Australia</li>
              <li>The <strong>Digital Personal Data Protection Act 2023 (DPDP Act)</strong>, for individuals in India</li>
            </ul>
            <p>
              <strong>Data Controller:</strong> Inteliment Technologies India Pvt. Ltd., House 106 Baner, Pune 411045, Maharashtra, India.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect the following types of personal information:</p>
            <h3>Information You Provide Directly</h3>
            <ul>
              <li>Name, email address, job title, and company name when you submit contact, assessment, or partner enquiry forms</li>
              <li>Enquiry type, message content, and project details you share with us</li>
              <li>Career application information (resume, contact details, professional background)</li>
            </ul>
            <h3>Information Collected Automatically</h3>
            <ul>
              <li>IP address, browser type, and device information</li>
              <li>Pages visited, session duration, and referral source (via Google Analytics)</li>
              <li>Cookie preferences and consent records</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
              <li><strong>Responding to enquiries</strong>, to reply to project, partnership, and general enquiries</li>
              <li><strong>Providing services</strong>, to deliver DI assessments, workshops, and consulting services you have requested</li>
              <li><strong>Marketing communications</strong>, to send relevant thought leadership, event invitations, and service updates (with your consent; you may unsubscribe at any time)</li>
              <li><strong>Improving our website</strong>, to analyse traffic and user behaviour for content and UX improvements</li>
              <li><strong>Legal compliance</strong>, to comply with applicable laws and regulations</li>
            </ul>

            <h2>3. Legal Basis for Processing (GDPR)</h2>
            <p>For individuals in the EEA, we process personal data on the following legal bases:</p>
            <ul>
              <li><strong>Consent</strong>, for marketing communications and non-essential cookies (you may withdraw consent at any time)</li>
              <li><strong>Legitimate interests</strong>, for responding to enquiries, improving our services, and business development activities</li>
              <li><strong>Contract performance</strong>, to deliver services you have contracted with us</li>
              <li><strong>Legal obligation</strong>, where processing is required by applicable law</li>
            </ul>

            <h2>4. Data Processors and Third Parties</h2>
            <p>We use the following third-party data processors to operate our business. All processors are bound by data processing agreements:</p>
            <ul>
              <li><strong>Zoho CRM</strong>, customer relationship management and lead tracking (Zoho Corporation, India/US). Data processed under Zoho's Data Processing Addendum.</li>
              <li><strong>Zoho Campaigns</strong>, email marketing platform for opted-in communications</li>
              <li><strong>Google Analytics (GA4)</strong>, anonymised website analytics (Google LLC, US). Data is processed under Google's Data Processing Terms with IP anonymisation enabled.</li>
              <li><strong>Google reCAPTCHA</strong>, spam prevention on forms (Google LLC, US)</li>
            </ul>
            <p>We do not sell, trade, or rent your personal information to any third party for their marketing purposes.</p>

            <h2>5. Data Retention</h2>
            <p>We retain personal data for as long as necessary to fulfil the purposes for which it was collected:</p>
            <ul>
              <li><strong>Enquiry and contact data</strong>, 24 months from last contact, unless a commercial relationship is established</li>
              <li><strong>Client engagement data</strong>, 7 years from project completion (legal/tax obligation)</li>
              <li><strong>Marketing consent records</strong>, until consent is withdrawn plus 12 months</li>
              <li><strong>Analytics data</strong>, 14 months (Google Analytics default retention)</li>
            </ul>

            <h2>6. International Data Transfers</h2>
            <p>
              As an India-headquartered company with clients in Australia, Europe, and Singapore, we may transfer personal data across borders. We ensure such transfers comply with applicable regulations:
            </p>
            <ul>
              <li>For transfers from the EEA, we rely on Standard Contractual Clauses (SCCs) as our transfer mechanism</li>
              <li>For transfers involving Australian individuals, we apply equivalent protections as required by the Australian Privacy Principles</li>
            </ul>

            <h2>7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Access</strong>, request a copy of the personal data we hold about you</li>
              <li><strong>Rectification</strong>, correct inaccurate or incomplete data</li>
              <li><strong>Erasure</strong>, request deletion of your personal data (subject to legal obligations)</li>
              <li><strong>Restriction</strong>, request that we restrict processing of your data</li>
              <li><strong>Portability</strong>, receive your data in a structured, machine-readable format (GDPR)</li>
              <li><strong>Objection</strong>, object to processing based on legitimate interests or for direct marketing</li>
              <li><strong>Withdraw consent</strong>, withdraw consent at any time where processing is consent-based</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at <a href="mailto:insights@inteliment.com">insights@inteliment.com</a>. We will respond within 30 days (or as required by applicable law).
            </p>

            <h2>8. Data Security</h2>
            <p>
              We implement industry-standard technical and organisational measures to protect your personal data, including:
            </p>
            <ul>
              <li>ISO 27001-aligned ISMS controls</li>
              <li>TLS encryption for data in transit</li>
              <li>Access controls and role-based permissions</li>
              <li>Regular third-party security audits</li>
              <li>Employee data protection training</li>
            </ul>

            <h2>9. Cookies</h2>
            <p>
              We use cookies and similar technologies on our website. For full details, including how to manage your preferences, please see our <Link to="/cookies">Cookie Policy</Link>.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be communicated by updating the "Last updated" date and, where appropriate, notifying you by email.
            </p>

            <h2>11. Contact Us</h2>
            <p>For privacy-related enquiries, please contact:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:insights@inteliment.com">insights@inteliment.com</a></li>
              <li><strong>Address:</strong> Inteliment Technologies India Pvt. Ltd., House 106 Baner, Pune 411045, Maharashtra, India</li>
              <li><strong>Phone:</strong> (020) 6911-5600</li>
            </ul>
            <p>
              If you are in the EEA and are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
