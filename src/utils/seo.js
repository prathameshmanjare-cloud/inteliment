export function buildPageMeta(title, description, path = '/', image = null) {
  const siteTitle = 'Inteliment'
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`
  const baseUrl = 'https://inteliment.com'
  const ogImage = image || `${baseUrl}/og-default.png`

  return {
    title: fullTitle,
    description,
    canonical: `${baseUrl}${path}`,
    og: {
      title: fullTitle,
      description,
      url: `${baseUrl}${path}`,
      image: ogImage,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      image: ogImage,
    },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Inteliment',
    url: 'https://inteliment.com',
    logo: 'https://inteliment.com/favicon.svg',
    description: 'Decision Intelligence and AI Solutions company with 22 years of data engineering expertise.',
    foundingDate: '2004',
    areaServed: 'Worldwide',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'insights@inteliment.com',
      contactType: 'customer service',
    },
    sameAs: ['https://www.linkedin.com/company/inteliment'],
  }
}

export function serviceJsonLd(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: { '@type': 'Organization', name: 'Inteliment' },
    serviceType: 'Data Engineering and AI Solutions',
  }
}

export function articleJsonLd(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: { '@type': 'Organization', name: 'Inteliment' },
    publisher: { '@type': 'Organization', name: 'Inteliment', logo: { '@type': 'ImageObject', url: 'https://inteliment.com/favicon.svg' } },
    datePublished: article.date,
    url: `https://inteliment.com/insights/${article.slug}`,
  }
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://inteliment.com${item.path}`,
    })),
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Inteliment Australia',
    url: 'https://inteliment.com/australia',
    email: 'hello@inteliment.com',
    description: 'Decision Intelligence and AI Solutions for Australian enterprises. Sydney-based practice specialising in cloud modernisation, data engineering, and AI for APRA-regulated industries.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Inteliment',
      url: 'https://inteliment.com',
    },
  }
}

export function faqJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}
