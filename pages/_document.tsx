import { Html, Head, Main, NextScript } from 'next/document';
import resumeData from '@/data/resume.json';

export default function Document() {
  const { personal } = resumeData;
  const fullName = personal.name;
  const title = `${fullName} - ${personal.title}`;
  const description = personal.summary;
  const keywords = [
    'Android Developer',
    'Kotlin',
    'Jetpack Compose',
    'Mobile Developer',
    'Software Engineer',
    'Senior Software Engineer',
    'Android Engineer',
    'Kotlin Developer',
    'Mobile App Developer',
    'Clean Architecture',
    'MVVM',
    'MVI',
    'Düsseldorf',
    'Germany',
    ...(personal.skills || []).flatMap(skill => skill.items || [])
  ].join(', ');

  // Structured data for ATS and search engines
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: fullName,
    jobTitle: personal.title,
    email: personal.contact.email,
    telephone: personal.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Düsseldorf',
      addressCountry: 'DE'
    },
    url: personal.contact.website || '',
    sameAs: [
      personal.contact.linkedin,
      personal.contact.github
    ].filter(Boolean),
    description: description,
    knowsAbout: (personal.skills || []).flatMap(skill => skill.items || []),
    alumniOf: personal.education && personal.education.length > 0 ? {
      '@type': 'EducationalOrganization',
      name: personal.education[0]?.institution || '',
      address: {
        '@type': 'PostalAddress',
        addressLocality: personal.education[0]?.location || ''
      }
    } : undefined,
    worksFor: personal.experience && personal.experience.length > 0 ? {
      '@type': 'Organization',
      name: personal.experience[0]?.company || '',
      address: {
        '@type': 'PostalAddress',
        addressLocality: personal.experience[0]?.location || ''
      }
    } : undefined
  };

  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={fullName} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* ATS-Friendly Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="contact" content={personal.contact.email} />
        <meta name="location" content={personal.contact.location} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={personal.contact.website || 'https://mohamedharmoush.github.io'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={`${fullName} - Resume`} />
        <meta property="profile:first_name" content={fullName.split(' ')[0]} />
        <meta property="profile:last_name" content={fullName.split(' ').slice(1).join(' ')} />
        <meta property="profile:username" content={personal.contact.github?.split('/').pop() || ''} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

