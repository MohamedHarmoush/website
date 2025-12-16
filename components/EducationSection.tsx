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
              <h3 className="text-lg sm:text-base text-text-primary mb-1 font-semibold flex items-center gap-2">
                {edu.degree}
                {edu.field && <span className="text-text-secondary font-normal"> in {edu.field}</span>}
              </h3>
              <p className="text-text-secondary text-sm sm:text-xs mb-1">{edu.institution}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm sm:text-xs text-text-secondary flex items-center gap-1">
                  <HiCalendar className="w-3.5 h-3.5 text-yellow-primary" />
                  {edu.startDate} - {edu.endDate}
                </span>
                {edu.location && (
                  <span className="text-sm sm:text-xs text-text-secondary flex items-center gap-1">
                    <HiMapPin className="w-3.5 h-3.5 text-yellow-primary" />
                    {edu.location}
                  </span>
                )}
              </div>
              {edu.gpa && (
                <span className="gpa-badge inline-flex items-center gap-1 bg-yellow-primary/15 text-yellow-dark px-3 py-1 sm:px-2 sm:py-0.5 rounded-[20px] text-xs sm:text-[10px] mt-2 font-semibold">
                  <HiTrophy className="w-3 h-3" />
                  GPA: {edu.gpa}
                </span>
              )}
              {edu.honors && edu.honors.length > 0 && (
                <ul className="list-none mt-2 space-y-1.5">
                  {edu.honors.map((honor, idx) => (
                    <li key={idx} className="text-[15px] sm:text-sm text-text-secondary flex items-center gap-1.5">
                      <HiTrophy className="w-3.5 h-3.5 text-yellow-primary flex-shrink-0" />
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

