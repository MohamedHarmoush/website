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

interface ResumePageProps {
  resume: Resume;
}

export default function ResumePage({ resume }: ResumePageProps) {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [websiteUrl, setWebsiteUrl] = useState<string>('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
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
          <div className="glass-card mb-8 print:border-0 print:shadow-none">
            <h2 className="section-title">Summary</h2>
            <p className="text-text-secondary sm:text-sm leading-relaxed">{resume.personal.summary}</p>
          </div>
        )}

        <ExperienceSection experiences={resume.experience} />
        <EducationSection education={resume.education} />
        <SkillsSection skills={resume.skills} />
        
        {resume.projects && resume.projects.length > 0 && (
          <ProjectsSection projects={resume.projects} />
        )}
        
        {resume.certifications && resume.certifications.length > 0 && (
          <CertificationsSection certifications={resume.certifications} />
        )}

        {/* Print-friendly footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 print:border-t-2 print:border-gray-400 text-center">
          <p className="text-xs sm:text-[10px] text-text-secondary print:text-gray-600 print:text-sm">
            {currentDate && `Last updated: ${currentDate}`}
          </p>
          {websiteUrl && (
            <div className="hidden print:block mt-4 text-xs text-gray-500">
              <p>This resume is available online at: {websiteUrl}</p>
            </div>
          )}
        </div>
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

