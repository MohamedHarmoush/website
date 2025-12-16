import { Resume } from '@/types/resume';

interface ResumeHeaderProps {
  resume: Resume;
}

export default function ResumeHeader({ resume }: ResumeHeaderProps) {
  const { personal } = resume;
  
  return (
    <header className="mb-8 pb-6 border-b border-gray-300">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">{personal.name}</h1>
      <p className="text-lg text-gray-600 mb-4">{personal.title}</p>
      
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
        {personal.contact.email && (
          <a 
            href={`mailto:${personal.contact.email}`} 
            className="hover:text-gray-900 transition-colors"
          >
            {personal.contact.email}
          </a>
        )}
        {personal.contact.phone && (
          <span>{personal.contact.phone}</span>
        )}
        {personal.contact.location && (
          <span>{personal.contact.location}</span>
        )}
        {personal.contact.website && (
          <a 
            href={personal.contact.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-900 transition-colors"
          >
            Website
          </a>
        )}
        {personal.contact.linkedin && (
          <a 
            href={personal.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
        )}
        {personal.contact.github && (
          <a 
            href={personal.contact.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
        )}
        {personal.contact.twitter && (
          <a 
            href={personal.contact.twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-900 transition-colors"
          >
            Twitter
          </a>
        )}
      </div>
    </header>
  );
}

