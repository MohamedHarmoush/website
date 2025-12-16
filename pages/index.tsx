import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Resume } from '@/types/resume';
import resumeData from '@/data/resume.json';
import HeroSidebar from '@/components/HeroSidebar';
import { HiMail, HiPhone, HiDocumentText } from 'react-icons/hi';
import { FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { HiDocumentArrowDown } from 'react-icons/hi2';

interface HomeProps {
  resume: Resume;
}

export default function Home({ resume }: HomeProps) {
  return (
    <div className="layout flex min-h-screen print:flex-col">
        <HeroSidebar resume={resume} />
        
        <div className="content-area flex-1 print:ml-0 print:p-4">
          {/* ATS-friendly contact section */}
          <div className="glass-card mb-8 print:border-0 print:shadow-none">
            <div className="hidden print:block mb-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{resume.personal.name}</h1>
              <p className="text-lg text-gray-700 mb-2">{resume.personal.title}</p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Email: <a href={`mailto:${resume.personal.contact.email}`} className="text-blue-600">{resume.personal.contact.email}</a></p>
                <p>Phone: {resume.personal.contact.phone}</p>
                <p>Location: {resume.personal.contact.location}</p>
                {resume.personal.contact.linkedin && (
                  <p>LinkedIn: <a href={resume.personal.contact.linkedin} className="text-blue-600">{resume.personal.contact.linkedin}</a></p>
                )}
                {resume.personal.contact.github && (
                  <p>GitHub: <a href={resume.personal.contact.github} className="text-blue-600">{resume.personal.contact.github}</a></p>
                )}
              </div>
            </div>
            
            <h2 className="section-title">About</h2>
            <div className="p-6 sm:p-4 bg-white/50 backdrop-blur-[10px] rounded-2xl sm:rounded-xl border-l-[3px] border-yellow-primary transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-white/70 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] print:border-0 print:shadow-none">
              <p className="text-text-secondary text-lg sm:text-base leading-relaxed">{resume.personal.summary}</p>
            </div>
          </div>

        <div className="glass-card mb-8">
          <h2 className="section-title">Quick Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-4">
            <div>
              <h3 className="text-lg sm:text-base font-semibold text-text-primary mb-2">Experience</h3>
              <p className="text-text-secondary sm:text-sm">{resume.experience.length} position{resume.experience.length !== 1 ? 's' : ''}</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-base font-semibold text-text-primary mb-2">Education</h3>
              <p className="text-text-secondary sm:text-sm">{resume.education.length} degree{resume.education.length !== 1 ? 's' : ''}</p>
            </div>
            {resume.projects && resume.projects.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-base font-semibold text-text-primary mb-2">Projects</h3>
                <p className="text-text-secondary sm:text-sm">{resume.projects.length} project{resume.projects.length !== 1 ? 's' : ''}</p>
              </div>
            )}
            <div>
              <h3 className="text-lg sm:text-base font-semibold text-text-primary mb-2">Skills</h3>
              <p className="text-text-secondary sm:text-sm">{resume.skills.reduce((acc, skill) => acc + skill.items.length, 0)} skill{resume.skills.reduce((acc, skill) => acc + skill.items.length, 0) !== 1 ? 's' : ''}</p>
            </div>
          </div>
        </div>

        {/* Recruiter-friendly CTA section */}
        <div className="glass-card mb-8 print:hidden">
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-text-secondary sm:text-sm mb-4">
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${resume.personal.contact.email}?subject=Job Opportunity`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-primary text-white rounded-lg text-sm font-medium hover:bg-yellow-dark transition-colors"
            >
              <HiMail className="w-4 h-4" />
              Email Me
            </a>
            {resume.personal.contact.linkedin && (
              <a
                href={resume.personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </a>
            )}
            {resume.personal.contact.phone && (
              <a
                href={`tel:${resume.personal.contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
              >
                <HiPhone className="w-4 h-4" />
                Call Me
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 flex-wrap">
          <Link
            href="/resume"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-5 sm:py-2.5 bg-yellow-primary text-white rounded-[50px] sm:rounded-[40px] text-sm sm:text-xs font-medium hover:bg-yellow-dark transition-all duration-300 shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)] active:scale-95"
            aria-label="View full resume"
          >
            <HiDocumentText className="w-4 h-4" />
            View Full Resume
          </Link>
          <a
            href="/Mohamed_Harmoush_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Mohamed_Harmoush_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-5 sm:py-2.5 bg-white/60 backdrop-blur-[10px] border border-white/80 text-text-primary rounded-[50px] sm:rounded-[40px] text-sm sm:text-xs font-medium hover:bg-white/80 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] active:scale-95"
            aria-label="Download resume PDF"
          >
            <FaFilePdf className="w-4 h-4" />
            Download PDF
          </a>
          <a
            href="/Mohamed_Harmoush_Resume.txt"
            target="_blank"
            rel="noopener noreferrer"
            download="Mohamed_Harmoush_Resume.txt"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-5 sm:py-2.5 bg-gray-100 text-gray-700 rounded-[50px] sm:rounded-[40px] text-sm sm:text-xs font-medium hover:bg-gray-200 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] active:scale-95"
            aria-label="Download plain text resume for ATS systems"
            title="Plain text version optimized for Applicant Tracking Systems"
          >
            <HiDocumentArrowDown className="w-4 h-4" />
            TXT (ATS)
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

