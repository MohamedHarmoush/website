import { Project } from '@/types/resume';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card bg-white/50 backdrop-blur-[10px] rounded-2xl sm:rounded-xl p-6 sm:p-4 border border-white/60 transition-all duration-300 relative overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:border-yellow-primary hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] active:scale-[0.98] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-gradient-to-r before:from-yellow-primary before:to-yellow-dark"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
              <h3 className="project-name text-xl sm:text-lg font-semibold text-text-primary mb-2 sm:mb-3">{project.name}</h3>
              <div className="flex gap-3 sm:gap-2">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-primary hover:text-yellow-dark text-sm sm:text-xs font-medium transition-colors"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-primary hover:text-yellow-dark text-sm sm:text-xs font-medium transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
            <p className="project-description text-text-secondary mb-4 sm:mb-3 text-sm sm:text-xs leading-relaxed">{project.description}</p>
            <div className="tech-stack flex flex-wrap gap-2 sm:gap-1.5 mb-3">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="tech-tag px-3 py-1 sm:px-2 sm:py-0.5 bg-yellow-primary/10 border border-yellow-primary/30 rounded-[20px] sm:rounded-[16px] text-xs sm:text-[10px] text-yellow-dark font-medium transition-all duration-300 hover:bg-yellow-primary hover:text-white active:scale-95"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.highlights && project.highlights.length > 0 && (
              <ul className="list-none space-y-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm sm:text-xs text-text-secondary leading-relaxed relative pl-5 sm:pl-4 before:content-['▸'] before:absolute before:left-0 before:text-yellow-primary">
                    {highlight}
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

