import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import { Resume } from '@/types/resume';
import resumeData from '@/data/resume.json';
import HeroSidebar from '@/components/HeroSidebar';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import { FaFilePdf } from 'react-icons/fa';

interface HomeProps {
  resume: Resume;
}

export default function Home({ resume }: HomeProps) {
  const [websiteUrl, setWebsiteUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWebsiteUrl(window.location.href);
    }
  }, []);

  return (
    <>
      {/* ATS-friendly structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: resume.personal.name,
            jobTitle: resume.personal.title,
            email: resume.personal.contact.email,
            telephone: resume.personal.contact.phone,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Düsseldorf',
              addressCountry: 'DE'
            },
            sameAs: [
              resume.personal.contact.linkedin,
              resume.personal.contact.github
            ].filter(Boolean),
            description: resume.personal.summary,
            knowsAbout: resume.skills.flatMap(skill => skill.items),
            alumniOf: resume.education.map(edu => ({
              '@type': 'EducationalOrganization',
              name: edu.institution,
              address: {
                '@type': 'PostalAddress',
                addressLocality: edu.location
              }
            })),
            worksFor: resume.experience.map(exp => ({
              '@type': 'Organization',
              name: exp.company,
              address: {
                '@type': 'PostalAddress',
                addressLocality: exp.location
              }
            }))
          })
        }}
      />
      
      <div className="layout flex min-h-screen print:flex-col">
        <HeroSidebar resume={resume} />
        
        <div className="content-area flex-1 print:ml-0 print:p-4">
          {/* ATS-friendly header for print */}
          <div className="hidden print:block mb-6 border-b-2 border-gray-300 pb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{resume.personal.name}</h1>
            <p className="text-xl text-gray-700 mb-3">{resume.personal.title}</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Email:</strong> <a href={`mailto:${resume.personal.contact.email}`} className="text-blue-600 underline">{resume.personal.contact.email}</a></p>
              <p><strong>Phone:</strong> {resume.personal.contact.phone}</p>
              <p><strong>Location:</strong> {resume.personal.contact.location}</p>
              {resume.personal.contact.linkedin && (
                <p><strong>LinkedIn:</strong> <a href={resume.personal.contact.linkedin} className="text-blue-600 underline">{resume.personal.contact.linkedin}</a></p>
              )}
              {resume.personal.contact.github && (
                <p><strong>GitHub:</strong> <a href={resume.personal.contact.github} className="text-blue-600 underline">{resume.personal.contact.github}</a></p>
              )}
            </div>
          </div>

          {resume.personal.summary && (
            <section className="mb-8">
              <h2 className="section-title">Summary</h2>
              <div className="p-6 sm:p-4 bg-white/50 backdrop-blur-[10px] rounded-2xl sm:rounded-xl border-l-[3px] border-yellow-primary transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-white/70 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] print:border-0 print:shadow-none">
                <p className="text-text-secondary text-lg sm:text-base leading-relaxed">{resume.personal.summary}</p>
              </div>
            </section>
          )}

          <ExperienceSection experiences={resume.experience} />
          <SkillsSection skills={resume.skills} />
          
          {resume.projects && resume.projects.length > 0 && (
            <ProjectsSection projects={resume.projects} />
          )}
          
          {resume.certifications && resume.certifications.length > 0 && (
            <CertificationsSection certifications={resume.certifications} />
          )}

          <EducationSection education={resume.education} />

          {/* Download buttons */}
          {resume.personal.resumePdf && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 flex-wrap mt-8 print:hidden">
              <a
                href={resume.personal.resumePdf}
                download="Mohamed_Harmoush_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-5 sm:py-2.5 bg-yellow-primary text-white rounded-[50px] sm:rounded-[40px] text-sm sm:text-xs font-medium hover:bg-yellow-dark transition-all duration-300 shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)] active:scale-95"
                aria-label="Download resume PDF"
              >
                <FaFilePdf className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          )}

          {/* Print-friendly footer */}
          {websiteUrl && (
            <div className="hidden print:block mt-8 pt-6 border-t-2 border-gray-400 text-center">
              <p className="text-xs text-gray-500">
                This resume is available online at: {websiteUrl}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      resume: resumeData as Resume,
    },
  };
};

