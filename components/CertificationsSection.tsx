import { Certification } from '@/types/resume';
import { HiAcademicCap, HiCalendar } from 'react-icons/hi2';
import { HiExternalLink } from 'react-icons/hi';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="section-title">Certifications</h2>
      <div className="space-y-5">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="experience-item p-6 bg-white/50 backdrop-blur-[10px] rounded-2xl mb-5 border-l-[3px] border-yellow-primary transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-white/70 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] last:mb-0"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
              <div className="flex-1">
                <h3 className="text-lg sm:text-base font-semibold text-text-primary mb-2 flex items-center gap-2">
                  <HiAcademicCap className="w-5 h-5 text-yellow-primary flex-shrink-0" />
                  {cert.name}
                </h3>
                <p className="text-base sm:text-sm text-text-secondary mb-2 ml-7">{cert.issuer}</p>
                {cert.credentialId && (
                  <p className="text-sm sm:text-xs text-text-secondary mt-1 ml-7">Credential ID: <span className="font-mono">{cert.credentialId}</span></p>
                )}
              </div>
              <div className="text-base sm:text-sm text-text-secondary mt-2 md:mt-0 flex items-center gap-2 font-medium">
                <HiCalendar className="w-4 h-4 text-text-secondary/60 flex-shrink-0" />
                <span>{cert.date}</span>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-yellow-primary hover:text-yellow-dark transition-colors font-medium flex items-center gap-1"
                  >
                    <HiExternalLink className="w-3.5 h-3.5" />
                    Verify
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

