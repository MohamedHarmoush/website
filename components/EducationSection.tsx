import { Education } from '@/types/resume';

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
            <div className="education-icon w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] bg-gradient-to-br from-yellow-primary to-yellow-dark rounded-xl sm:rounded-lg flex items-center justify-center text-2xl sm:text-xl flex-shrink-0 text-white font-bold">
              🎓
            </div>
            <div className="education-details flex-1 min-w-0">
              <h3 className="text-lg sm:text-base text-text-primary mb-1 font-semibold">
                {edu.degree}
                {edu.field && <span className="text-text-secondary font-normal"> in {edu.field}</span>}
              </h3>
              <p className="text-text-secondary text-sm sm:text-xs mb-1">{edu.institution}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm sm:text-xs text-text-secondary">
                  {edu.startDate} - {edu.endDate}
                </span>
                {edu.location && (
                  <span className="text-sm sm:text-xs text-text-secondary">• {edu.location}</span>
                )}
              </div>
              {edu.gpa && (
                <span className="gpa-badge inline-block bg-yellow-primary/15 text-yellow-dark px-3 py-1 sm:px-2 sm:py-0.5 rounded-[20px] text-xs sm:text-[10px] mt-2 font-semibold">
                  GPA: {edu.gpa}
                </span>
              )}
              {edu.honors && edu.honors.length > 0 && (
                <ul className="list-none mt-2 space-y-1">
                  {edu.honors.map((honor, idx) => (
                    <li key={idx} className="text-sm sm:text-xs text-text-secondary">• {honor}</li>
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

