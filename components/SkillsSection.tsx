import { Skill } from '@/types/resume';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="glass-card">
            <h3 className="text-lg font-semibold text-text-primary mb-4">{skill.category}</h3>
            <div className="tech-stack flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="tech-tag px-3.5 py-1.5 bg-yellow-primary/10 border border-yellow-primary/30 rounded-[20px] text-sm text-yellow-dark font-medium transition-all duration-300 hover:bg-yellow-primary hover:text-white hover:border-yellow-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
