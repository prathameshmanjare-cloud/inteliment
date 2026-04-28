import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import Container from '@/components/ui/Container'
import { buildPageMeta } from '@/utils/seo'
import { Link } from 'react-router-dom'

export default function CookiePolicy() {
  const meta = buildPageMeta(
    'Cookie Policy',
    'How Inteliment uses cookies and similar tracking technologies on our website.',
    '/cookies'
  )

  return (
    <>
      <SEOHead meta={meta} />

      <HeroSection
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="Last updated: April 2026"
        variant="compact"
      />

      <section className="py-16 bg-surface section-light">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-slate prose-headings:font-display prose-headings:font-bold prose-headings:text-navy prose-p:text-grey-700 prose-p:font-body prose-li:text-grey-700 prose-li:font-body prose-a:text-teal prose-a:no-underline hover:prose-a:underline">

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (stored on your device for a set period).
            </p>

            <h2>How We Use Cookies</h2>
            <p>We use cookies and similar technologies for the following purposes:</p>

            <h3>1. Strictly Necessary Cookies</h3>
            <p>
              These cookies are essential for the website to function. They enable core features such as security, network management, and accessibility. You cannot opt out of these cookies as they are required for the site to operate.
            </p>
            <ul>
              <li><strong>Cookie consent preference</strong>, Stores your cookie preference to avoid showing the banner on every visit (key: <code>inteliment_cookie_consent</code>, stored in localStorage, persistent).</li>
              <li><strong>Session management</strong>, Temporary session cookies used for form submissions and CSRF protection.</li>
            </ul>

            <h3>2. Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website. We use this information to improve our content and user experience. Analytics data is aggregated and anonymised.
            </p>
            <ul>
              <li><strong>Google Analytics / GA4</strong>, Tracks page views, session duration, traffic sources, and user behaviour. Data is anonymised before processing. You can opt out via <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google's opt-out tool</a>.</li>
            </ul>

            <h3>3. Functional Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make (such as your region or language preference) and provide enhanced features.
            </p>
            <ul>
              <li><strong>Region preference</strong>, Remembers if you have accessed a regional page (e.g., Australia) to personalise future visits.</li>
              <li><strong>Assessment progress</strong>, Preserves your progress through multi-step assessment tools.</li>
            </ul>

            <h3>4. Marketing Cookies</h3>
            <p>
              We may use marketing cookies to show relevant content and advertising through our partners. These cookies track your visits across websites and build a profile of your interests.
            </p>
            <ul>
              <li><strong>LinkedIn Insight Tag</strong>, Used for conversion tracking and retargeting on LinkedIn. Subject to <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">LinkedIn's Privacy Policy</a>.</li>
              <li><strong>Google Ads</strong>, Used for remarketing to visitors of our website. You can manage Google ad settings at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>.</li>
            </ul>

            <h2>Third-Party Cookies</h2>
            <p>
              Some features of our website use third-party services that may set their own cookies. These include:
            </p>
            <ul>
              <li><strong>Zoho CRM / SalesIQ</strong>, Live chat and lead management. Subject to <a href="https://www.zoho.com/privacy.html" target="_blank" rel="noopener noreferrer">Zoho's Privacy Policy</a>.</li>
              <li><strong>reCAPTCHA (Google)</strong>, Used on contact and assessment forms to prevent spam. Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</li>
              <li><strong>YouTube</strong>, Embedded videos may set cookies when played. Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</li>
            </ul>

            <h2>Managing Your Cookie Preferences</h2>
            <p>You can control and manage cookies in several ways:</p>

            <h3>Browser Settings</h3>
            <p>
              Most browsers allow you to refuse or delete cookies through their settings. Note that disabling cookies may affect the functionality of our website. Instructions for common browsers:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>

            <h3>Opt-Out Tools</h3>
            <ul>
              <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a></li>
              <li>Google Ads: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a></li>
              <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">optout.networkadvertising.org</a></li>
            </ul>

            <h2>Cookie Consent</h2>
            <p>
              When you first visit our website, we display a cookie consent banner. By clicking "Accept All", you consent to the use of all cookies described in this policy. By clicking "Necessary Only", only strictly necessary cookies will be set.
            </p>
            <p>
              You can change your preferences at any time by clearing your browser's local storage or by contacting us.
            </p>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The "Last updated" date at the top of this page indicates when the policy was last revised.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:insights@inteliment.com">insights@inteliment.com</a></li>
              <li>Address: Inteliment Technologies India Pvt. Ltd., House 106 Baner, Pune 411045, India</li>
            </ul>
            <p>
              For general privacy inquiries, please refer to our <Link to="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
