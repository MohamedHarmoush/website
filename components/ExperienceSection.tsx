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
            <div className="experience-header flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="company-name text-xl sm:text-lg font-semibold text-yellow-dark mb-1.5">{exp.company}</h3>
                <p className="job-title text-base sm:text-[15px] text-text-primary mb-2 font-medium">{exp.position}</p>
                {exp.location && (
                  <p className="job-location text-sm sm:text-xs text-text-secondary mb-0 flex items-center gap-1.5">
                    <HiMapPin className="w-3.5 h-3.5 text-yellow-primary flex-shrink-0" />
                    {exp.location}
                  </p>
                )}
              </div>
              <div className="experience-date text-sm sm:text-xs text-text-secondary bg-white/60 backdrop-blur-[10px] px-3.5 py-1.5 sm:px-3 sm:py-1 rounded-[20px] border border-white/80 w-fit flex items-center gap-1.5 self-start sm:self-start">
                <HiCalendar className="w-3.5 h-3.5 text-yellow-primary flex-shrink-0" />
                <span>{formatDate(exp.startDate)}</span>
                <span> - </span>
                <span>{exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : 'Present'}</span>
              </div>
            </div>
            {exp.description && (
              <p className="text-text-secondary mb-3 text-sm leading-relaxed">{exp.description}</p>
            )}
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="list-none mb-4 space-y-1.5">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="relative pl-5 sm:pl-4 text-text-secondary text-[15px] sm:text-sm leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-yellow-primary before:font-bold before:text-lg sm:before:text-base">
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

