import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  twitterImage?: string;
}

export function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://cdn.midjourney.com/ddf7ca5f-3ce8-449e-b0a4-130d64bf884d/0_1.png',
  twitterImage = 'https://cdn.midjourney.com/ddf7ca5f-3ce8-449e-b0a4-130d64bf884d/0_1.png'
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical Tag */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImage} />
    </Helmet>
  );
}
