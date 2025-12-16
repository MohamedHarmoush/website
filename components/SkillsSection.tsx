import { Skill } from '@/types/resume';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="section-title">Skills</h2>
      <div className="glass-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-5">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <h3 className="text-lg sm:text-base font-semibold text-text-primary mb-4 sm:mb-3 pb-2.5 border-b border-yellow-primary/20">{skill.category}</h3>
              <div className="tech-stack flex flex-wrap gap-2 sm:gap-1.5">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="tech-tag px-3.5 py-1.5 sm:px-3 sm:py-1 bg-yellow-primary/10 border border-yellow-primary/30 rounded-[20px] sm:rounded-[16px] text-sm sm:text-xs text-yellow-dark font-medium transition-all duration-300 hover:bg-yellow-primary hover:text-white hover:border-yellow-primary active:scale-95"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
