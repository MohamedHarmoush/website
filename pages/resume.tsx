import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ResumeRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page
    router.replace('/');
  }, [router]);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/" />
        <link rel="canonical" href="/" />
      </Head>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif',
        color: '#666'
      }}>
        <p>Redirecting to home page...</p>
      </div>
    </>
  );
}

