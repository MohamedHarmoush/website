import { WorkExperience } from '@/types/resume';

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
            className="experience-item p-6 bg-white/50 backdrop-blur-[10px] rounded-2xl mb-5 border-l-[3px] border-yellow-primary transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-white/70 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] last:mb-0"
          >
            <div className="experience-header flex justify-between items-start mb-2 flex-wrap gap-2.5">
              <div className="flex-1">
                <h3 className="company-name text-xl font-semibold text-yellow-dark mb-1">{exp.company}</h3>
                <p className="job-title text-lg text-text-primary mb-1 font-medium">{exp.position}</p>
                {exp.location && (
                  <p className="job-location text-sm text-text-secondary mb-4">{exp.location}</p>
                )}
              </div>
              <div className="experience-date text-sm text-text-secondary bg-white/60 backdrop-blur-[10px] px-3.5 py-1.5 rounded-[20px] border border-white/80">
                <span>{formatDate(exp.startDate)}</span>
                <span> - </span>
                <span>{exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : 'Present'}</span>
              </div>
            </div>
            {exp.description && (
              <p className="text-text-secondary mb-3 text-sm leading-relaxed">{exp.description}</p>
            )}
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="list-none mb-4">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="relative pl-5 mb-2 text-text-secondary text-sm leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-yellow-primary">
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

