import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ResumeRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page
    router.replace('/');
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <p>Redirecting to home page...</p>
    </div>
  );
}

