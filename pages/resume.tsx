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

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="layout flex min-h-screen print:flex-col">
      <HeroSidebar resume={resume} />
      
      <div className="content-area ml-[380px] flex-1 p-10 max-w-[900px] print:ml-0 print:p-4">
        {resume.personal.summary && (
          <div className="glass-card mb-8">
            <h2 className="section-title">Summary</h2>
            <p className="text-text-secondary leading-relaxed">{resume.personal.summary}</p>
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

        <div className="mt-8 pt-6 border-t border-gray-200 print-hidden text-center">
          <p className="text-xs text-text-secondary">
            {currentDate && `Last updated: ${currentDate}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      resume: resumeData as Resume,
    },
  };
};

