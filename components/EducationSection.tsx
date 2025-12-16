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
          <div key={index} className="education-item flex items-center gap-5">
            <div className="education-icon w-[60px] h-[60px] bg-gradient-to-br from-yellow-primary to-yellow-dark rounded-xl flex items-center justify-center text-2xl flex-shrink-0 text-white font-bold">
              🎓
            </div>
            <div className="education-details flex-1">
              <h3 className="text-lg text-text-primary mb-1 font-semibold">
                {edu.degree}
                {edu.field && <span className="text-text-secondary font-normal"> in {edu.field}</span>}
              </h3>
              <p className="text-text-secondary text-sm mb-1">{edu.institution}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-text-secondary">
                  {edu.startDate} - {edu.endDate}
                </span>
                {edu.location && (
                  <span className="text-sm text-text-secondary">• {edu.location}</span>
                )}
              </div>
              {edu.gpa && (
                <span className="gpa-badge inline-block bg-yellow-primary/15 text-yellow-dark px-3 py-1 rounded-[20px] text-xs mt-2 font-semibold">
                  GPA: {edu.gpa}
                </span>
              )}
              {edu.honors && edu.honors.length > 0 && (
                <ul className="list-none mt-2 space-y-1">
                  {edu.honors.map((honor, idx) => (
                    <li key={idx} className="text-sm text-text-secondary">• {honor}</li>
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

