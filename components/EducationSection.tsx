import { Education } from '@/types/resume';
import { HiAcademicCap, HiMapPin, HiCalendar, HiTrophy } from 'react-icons/hi2';

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="section-title">Education</h2>
      <div className="space-y-5">
        {education.map((edu, index) => (
          <div key={index} className="education-item flex items-start sm:items-center gap-5 sm:gap-4">
            <div className="education-icon w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] bg-gradient-to-br from-yellow-primary to-yellow-dark rounded-xl sm:rounded-lg flex items-center justify-center flex-shrink-0">
              <HiAcademicCap className="w-8 h-8 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="education-details flex-1 min-w-0">
              <h3 className="text-lg sm:text-base text-text-primary mb-2 font-semibold">
                {edu.degree}
                {edu.field && <span className="text-text-secondary font-normal"> in {edu.field}</span>}
              </h3>
              <p className="text-text-secondary text-base sm:text-sm mb-2">{edu.institution}</p>
              <div className="flex items-center gap-4 flex-wrap mb-2">
                <span className="text-base sm:text-sm text-text-secondary flex items-center gap-2 font-normal">
                  <HiCalendar className="w-4 h-4 text-text-secondary/60 flex-shrink-0" />
                  {edu.startDate} - {edu.endDate}
                </span>
                {edu.location && (
                  <span className="text-base sm:text-sm text-text-secondary flex items-center gap-2 font-normal">
                    <HiMapPin className="w-4 h-4 text-text-secondary/60 flex-shrink-0" />
                    {edu.location}
                  </span>
                )}
              </div>
              {edu.gpa && (
                <span className="gpa-badge inline-flex items-center gap-1.5 bg-yellow-primary/15 text-yellow-dark px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-[20px] text-sm sm:text-xs mt-2 font-semibold">
                  <HiTrophy className="w-3.5 h-3.5" />
                  GPA: {edu.gpa}
                </span>
              )}
              {edu.honors && edu.honors.length > 0 && (
                <ul className="list-none mt-3 space-y-2">
                  {edu.honors.map((honor, idx) => (
                    <li key={idx} className="text-base sm:text-[15px] text-text-secondary flex items-center gap-2">
                      <HiTrophy className="w-4 h-4 text-yellow-primary flex-shrink-0" />
                      {honor}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

