import { Helmet } from 'react-helmet-async'

export default function SEOHead({ meta, jsonLd }) {
  if (!meta) return null
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.canonical && <link rel="canonical" href={meta.canonical} />}
      {/* Open Graph */}
      <meta property="og:title" content={meta.og?.title || meta.title} />
      <meta property="og:description" content={meta.og?.description || meta.description} />
      <meta property="og:url" content={meta.og?.url} />
      <meta property="og:type" content={meta.og?.type || 'website'} />
      {meta.og?.image && <meta property="og:image" content={meta.og.image} />}
      {/* Twitter */}
      <meta name="twitter:card" content={meta.twitter?.card || 'summary_large_image'} />
      <meta name="twitter:title" content={meta.twitter?.title || meta.title} />
      <meta name="twitter:description" content={meta.twitter?.description || meta.description} />
      {meta.twitter?.image && <meta name="twitter:image" content={meta.twitter.image} />}
      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
