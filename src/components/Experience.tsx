import { TerminalPrompt } from './TerminalPrompt'
import { experienceData } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="py-14 md:py-24 border-t border-[var(--color-border-default)]">
      <TerminalPrompt command="git log --experience" />
      
      <div className="mt-8 font-mono">
        {experienceData.map((exp, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-px h-full bg-[var(--color-border-default)] relative">
                <div className="absolute top-6 -left-1.5 w-3 h-3 rounded-full bg-[var(--color-warning)]" />
              </div>
            </div>
            
            <div className="py-4 pb-12 w-full">
              <div className="text-[var(--color-text-muted)] mb-2">{exp.period}</div>
              <div className="border border-[var(--color-border-default)] bg-[var(--color-card-bg)] p-6 rounded-lg hover:border-[var(--color-terminal-accent)] transition-colors">
                <h3 className="text-[var(--color-terminal-accent)] text-lg mb-1">{exp.role}</h3>
                <div className="text-[var(--color-text-primary)] mb-4">{exp.company}</div>
                <p className="text-[var(--color-text-secondary)] font-sans text-sm mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-[var(--color-primary-bg)] border border-[var(--color-border-default)] text-[var(--color-text-muted)] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-[var(--color-border-default)] relative">
              <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-[var(--color-border-default)]" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}
