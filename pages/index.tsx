import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Resume } from '@/types/resume';
import resumeData from '@/data/resume.json';
import HeroSidebar from '@/components/HeroSidebar';

interface HomeProps {
  resume: Resume;
}

export default function Home({ resume }: HomeProps) {
  return (
    <div className="layout flex min-h-screen print:flex-col">
      <HeroSidebar resume={resume} />
      
      <div className="content-area ml-[380px] flex-1 p-10 max-w-[900px] print:ml-0 print:p-4">
        <div className="glass-card mb-8">
          <h2 className="section-title">About</h2>
          <p className="text-text-secondary leading-relaxed">{resume.personal.summary}</p>
        </div>

        <div className="glass-card mb-8">
          <h2 className="section-title">Quick Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Experience</h3>
              <p className="text-text-secondary">{resume.experience.length} position{resume.experience.length !== 1 ? 's' : ''}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Education</h3>
              <p className="text-text-secondary">{resume.education.length} degree{resume.education.length !== 1 ? 's' : ''}</p>
            </div>
            {resume.projects && resume.projects.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Projects</h3>
                <p className="text-text-secondary">{resume.projects.length} project{resume.projects.length !== 1 ? 's' : ''}</p>
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Skills</h3>
              <p className="text-text-secondary">{resume.skills.reduce((acc, skill) => acc + skill.items.length, 0)} skill{resume.skills.reduce((acc, skill) => acc + skill.items.length, 0) !== 1 ? 's' : ''}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/resume"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-primary text-white rounded-[50px] text-sm font-medium hover:bg-yellow-dark transition-all duration-300 shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)]"
          >
            View Full Resume
          </Link>
          <a
            href="/Mohamed_Harmoush_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-[10px] border border-white/80 text-text-primary rounded-[50px] text-sm font-medium hover:bg-white/80 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
          >
            Download PDF
          </a>
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

