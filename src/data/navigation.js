export const mainNav = [
  {
    label: 'Decision Intelligence',
    to: '/decision-intelligence',
  },
  {
    label: 'Solutions',
    dropdown: [
      { to: '/solutions/data-engineering', label: 'Data Engineering', desc: 'The foundation layer' },
      { to: '/solutions/data-science', label: 'Data Science & ML', desc: 'The intelligence layer' },
      { to: '/solutions/visualization', label: 'BI & Visualization', desc: 'The visibility layer' },
      { to: '/solutions/ai-agents', label: 'AI Decision Agents', desc: 'The action layer' },
      { to: '/solutions/enterprise-di', label: 'Enterprise DI System', desc: 'The complete stack' },
    ],
  },
  {
    label: 'Industries',
    dropdown: [
      { to: '/industries/insurance', label: 'Insurance' },
      { to: '/industries/banking', label: 'Banking & FS' },
      { to: '/industries/healthcare', label: 'Healthcare' },
      { to: '/industries/manufacturing', label: 'Manufacturing' },
      { to: '/industries/energy', label: 'Energy & Utilities' },
      { to: '/industries/telecom', label: 'Telecom' },
      { to: '/industries/automotive', label: 'Automotive' },
      { to: '/industries/retail-ecommerce', label: 'Retail & E-Commerce' },
      { to: '/industries/finance', label: 'Financial Services' },
      { to: '/industries/technology', label: 'Technology & SaaS' },
      { to: '/industries/logistics', label: 'Logistics & Supply Chain' },
      { to: '/industries/media', label: 'Media & Entertainment' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
  },
  {
    label: 'Inteli-AI',
    badge: 'AI',
    dropdown: [
      { to: '/inteli-ai', label: 'Inteli-AI', desc: 'Intelligence. Engineered.', badge: 'NEW' },
      { to: '/inteli-labs', label: 'Inteli-Labs', desc: 'AI research & innovation', badge: 'LAB' },
      { to: '/hub', label: 'InteliHub', desc: 'Analytics acceleration hub' },
    ],
  },
  {
    label: 'Company',
    dropdown: [
      { to: '/about', label: 'About Inteliment', desc: '22 years. One mission.' },
      { to: '/inteli-me', label: 'Inteli-Me', desc: 'Work on what matters' },
      { to: '/impact', label: 'Impact Stories', desc: 'Proof, not promises' },
      { to: '/contact', label: 'Contact Us', desc: 'Tell us about your challenge' },
    ],
  },
]

export const navCTA = {
  label: 'Book Assessment',
  to: '/assessment',
}
