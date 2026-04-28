import SEOHead from '@/components/ui/SEOHead'
import HeroSection from '@/components/sections/HeroSection'
import Container from '@/components/ui/Container'
import { Link } from 'react-router-dom'
import { buildPageMeta } from '@/utils/seo'

export default function Terms() {
  const meta = buildPageMeta(
    'Terms of Service',
    'Inteliment Terms of Service, the rules governing use of our website and services.',
    '/terms'
  )
  return (
    <>
      <SEOHead meta={meta} />

      <HeroSection
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: April 2026"
        variant="compact"
      />

      <section className="py-16 bg-surface section-light">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-slate prose-headings:font-display prose-headings:font-bold prose-headings:text-navy prose-p:text-grey-700 prose-p:font-body prose-li:text-grey-700 prose-li:font-body prose-a:text-teal prose-a:no-underline hover:prose-a:underline">

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Inteliment website (inteliment.com) and any related services (collectively, the "Services"), you accept and agree to be bound by these Terms of Service and our <Link to="/privacy">Privacy Policy</Link>. If you do not agree to these terms, please do not use our website or services.
            </p>
            <p>
              These Terms are entered into between you and <strong>Inteliment Technologies India Pvt. Ltd.</strong>, a company incorporated under the Companies Act 2013 with its registered office at House 106 Baner, Pune 411045, Maharashtra, India ("Inteliment", "we", "us").
            </p>

            <h2>2. Use of Website</h2>
            <p>You may use this website for lawful purposes only. You agree not to:</p>
            <ul>
              <li>Use the site in any way that violates applicable local, national, or international laws or regulations</li>
              <li>Transmit unsolicited or unauthorised advertising or promotional material</li>
              <li>Attempt to gain unauthorised access to any part of the website or its related systems</li>
              <li>Use automated tools (bots, scrapers) to extract content without prior written permission</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of the website</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, design elements, software, articles, and interactive tools, is the proprietary property of Inteliment Technologies India Pvt. Ltd. or its content suppliers and is protected by applicable intellectual property laws in India and internationally.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from this website without our prior written consent. Limited excerpts may be used for non-commercial purposes with appropriate attribution.
            </p>

            <h2>4. Confidentiality of Proposals and Assessments</h2>
            <p>
              Any proposals, assessments, frameworks, or commercial information shared by Inteliment with you during an engagement process are confidential and remain the intellectual property of Inteliment. You agree not to share, copy, or use such materials outside the context of the engagement without written consent.
            </p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. Inteliment makes no warranties about the accuracy, completeness, reliability, or availability of the website content. We reserve the right to modify or withdraw content at any time without notice.
            </p>
            <p>
              Case studies, client results, and performance metrics referenced on this website reflect specific client engagements and are not guarantees of future results.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Inteliment shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or our services, including but not limited to loss of revenue, data, goodwill, or business opportunity.
            </p>
            <p>
              Inteliment's total liability for any claim arising out of or relating to these Terms shall not exceed INR 10,000 (ten thousand Indian rupees) or the equivalent in the applicable currency.
            </p>

            <h2>7. Third-Party Links and Services</h2>
            <p>
              Our website may contain links to third-party websites, tools, or resources. Inteliment is not responsible for the content, accuracy, privacy practices, or availability of those third-party resources. The inclusion of a link does not imply endorsement.
            </p>

            <h2>8. Privacy</h2>
            <p>
              Your use of this website is also governed by our <Link to="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference. By using this website, you consent to the collection and use of your information as described in the Privacy Policy.
            </p>

            <h2>9. Cookie Policy</h2>
            <p>
              Our use of cookies is governed by our <Link to="/cookies">Cookie Policy</Link>. By continuing to use this website after being presented with the cookie consent banner, you consent to our use of cookies as described therein.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              Inteliment reserves the right to modify these Terms of Service at any time. We will indicate material changes by updating the "Last updated" date. Your continued use of the website after changes are posted constitutes your acceptance of the revised Terms.
            </p>

            <h2>11. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of <strong>India</strong>, specifically the laws applicable in the state of <strong>Maharashtra</strong>, without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising out of or in connection with these Terms shall be subject to the <strong>exclusive jurisdiction of the courts of Pune, Maharashtra, India</strong>.
            </p>
            <p>
              Parties agree to first attempt to resolve disputes through good-faith negotiation. If a dispute cannot be resolved within 30 days of written notice, either party may proceed to formal legal proceedings.
            </p>

            <h2>12. Contact Us</h2>
            <p>For questions about these Terms, please contact:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:insights@inteliment.com">insights@inteliment.com</a></li>
              <li><strong>Address:</strong> Inteliment Technologies India Pvt. Ltd., House 106 Baner, Pune 411045, Maharashtra, India</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  )
}
