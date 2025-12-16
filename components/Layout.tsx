import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Animated background blobs */}
      <div className="background print-hidden">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Layout container */}
      <div className="layout flex min-h-screen print:flex-col">
        {/* Fixed left sidebar for hero - will be rendered by pages */}
        <div className="content-wrapper flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

