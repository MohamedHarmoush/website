import { Resume } from '@/types/resume';
import Link from 'next/link';

interface HeroSidebarProps {
  resume: Resume;
}

export default function HeroSidebar({ resume }: HeroSidebarProps) {
  const { personal } = resume;

  return (
    <div className="hero-sidebar print:hidden">
      <div className="glass-card hero text-center w-full">
        <div className="hero-avatar-wrapper mb-5 sm:mb-4">
          <div className="w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] rounded-full mx-auto bg-gradient-to-br from-yellow-primary to-yellow-dark p-1">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl sm:text-3xl font-bold text-gray-600">
              {personal.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>

        <h1 className="text-[1.8rem] sm:text-[1.5rem] font-bold mb-2 bg-gradient-to-r from-text-primary to-yellow-dark bg-clip-text text-transparent">
          {personal.name}
        </h1>

        <p className="hero-subtitle text-base sm:text-sm text-yellow-primary font-medium mb-2">
          {personal.title}
        </p>

        {personal.contact.location && (
          <div className="hero-location text-text-secondary text-sm sm:text-xs flex items-center justify-center gap-2 mb-5 sm:mb-4 flex-wrap px-2">
            <svg className="w-4 h-4 sm:w-3.5 sm:h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-center">{personal.contact.location}</span>
          </div>
        )}

        <div className="hero-links flex flex-col items-center gap-3 sm:gap-2.5">
          <Link
            href="/"
            className="hero-link inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-4 sm:py-2 w-full max-w-[200px] sm:max-w-full bg-white/60 backdrop-blur-[10px] border border-white/80 rounded-[50px] text-text-primary no-underline font-medium transition-all duration-300 text-sm sm:text-xs shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-yellow-primary hover:text-white hover:border-yellow-primary hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)] active:scale-95"
          >
            Home
          </Link>
          <Link
            href="/resume"
            className="hero-link inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-4 sm:py-2 w-full max-w-[200px] sm:max-w-full bg-white/60 backdrop-blur-[10px] border border-white/80 rounded-[50px] text-text-primary no-underline font-medium transition-all duration-300 text-sm sm:text-xs shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-yellow-primary hover:text-white hover:border-yellow-primary hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)] active:scale-95"
          >
            Resume
          </Link>
          {personal.contact.email && (
            <a
              href={`mailto:${personal.contact.email}`}
              className="hero-link inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-4 sm:py-2 w-full max-w-[200px] sm:max-w-full bg-white/60 backdrop-blur-[10px] border border-white/80 rounded-[50px] text-text-primary no-underline font-medium transition-all duration-300 text-sm sm:text-xs shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-yellow-primary hover:text-white hover:border-yellow-primary hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)] active:scale-95"
            >
              Contact
            </a>
          )}
          <div className="flex flex-row gap-2 sm:gap-1.5 w-full max-w-[200px] sm:max-w-full justify-center">
            {personal.contact.linkedin && (
              <a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-3 sm:py-1.5 flex-1 bg-white/60 backdrop-blur-[10px] border border-white/80 rounded-[50px] text-text-primary no-underline font-medium transition-all duration-300 text-xs shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-yellow-primary hover:text-white hover:border-yellow-primary hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)] active:scale-95"
              >
                LinkedIn
              </a>
            )}
            {personal.contact.github && (
              <a
                href={personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-3 sm:py-1.5 flex-1 bg-white/60 backdrop-blur-[10px] border border-white/80 rounded-[50px] text-text-primary no-underline font-medium transition-all duration-300 text-xs shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-yellow-primary hover:text-white hover:border-yellow-primary hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)] active:scale-95"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

