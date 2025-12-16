import { WorkExperience } from '@/types/resume';
import { HiBuildingOffice2, HiMapPin, HiCalendar } from 'react-icons/hi2';

interface ExperienceSectionProps {
  experiences: WorkExperience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    if (month) {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    }
    return year;
  };

  return (
    <section className="mb-8">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="experience-item p-6 sm:p-4 bg-white/50 backdrop-blur-[10px] rounded-2xl sm:rounded-xl mb-5 border-l-[3px] border-yellow-primary transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-white/70 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] last:mb-0"
          >
            <div className="experience-header flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="company-name text-xl sm:text-lg font-semibold text-yellow-dark mb-2">{exp.company}</h3>
                <p className="job-title text-lg sm:text-base text-text-primary mb-2 font-medium">{exp.position}</p>
                {exp.location && (
                  <p className="job-location text-base sm:text-sm text-text-secondary mb-0 flex items-center gap-1.5 mt-1.5">
                    <HiMapPin className="w-4 h-4 text-text-secondary/60 flex-shrink-0" />
                    <span className="font-normal">{exp.location}</span>
                  </p>
                )}
              </div>
              <div className="experience-date text-base sm:text-sm text-text-secondary bg-white/60 backdrop-blur-[10px] px-4 py-2 sm:px-3.5 sm:py-1.5 rounded-[20px] border border-white/80 w-fit flex items-center gap-2 self-start sm:self-start font-medium">
                <HiCalendar className="w-4 h-4 text-text-secondary/60 flex-shrink-0" />
                <span>{formatDate(exp.startDate)}</span>
                <span> - </span>
                <span>{exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : 'Present'}</span>
              </div>
            </div>
            {exp.description && (
              <p className="text-text-secondary mb-4 text-base sm:text-sm leading-relaxed">{exp.description}</p>
            )}
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="list-none mb-4 space-y-2">
                {exp.achievements.map((achievement, idx) => {
                  // Simple approach: use regex to replace percentages and key phrases
                  let highlighted = achievement;
                  
                  // Highlight percentages (bold, same text color)
                  highlighted = highlighted.replace(/(\d+%)/g, '<strong class="font-bold">$1</strong>');
                  
                  // Highlight key technical terms (bold, same text color)
                  const keyPhrases = [
                    'Clean Architecture',
                    'Server-Driven UI',
                    'Jetpack Compose',
                    'Kotlin',
                    'gRPC',
                    'Dagger',
                    'MVP',
                    'MVVM',
                    'MVI',
                    'Java',
                    'Android',
                    'Kreuzfahrten',
                    'Komplettrad',
                    'Reifen',
                    'mSales',
                    'Fanzword',
                    'Tutlez',
                    'Upspeak',
                    'Sayar'
                  ];
                  
                  keyPhrases.forEach(phrase => {
                    const regex = new RegExp(`(${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                    highlighted = highlighted.replace(regex, '<strong class="font-bold">$1</strong>');
                  });
                  
                  return (
                    <li 
                      key={idx} 
                      className="relative pl-6 sm:pl-5 text-text-secondary text-base sm:text-[15px] leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-yellow-primary before:font-bold before:text-xl sm:before:text-lg"
                      dangerouslySetInnerHTML={{ __html: highlighted }}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

