import { TerminalPrompt } from './TerminalPrompt'
import { projectsData } from '../data/projects'
import { FolderGit2, ExternalLink } from 'lucide-react'

export function Projects() {
  const featured = projectsData.find(p => p.featured)
  const regular = projectsData.filter(p => !p.featured)

  return (
    <section id="projects" className="py-14 md:py-24 border-t border-[var(--color-border-default)]">
      <TerminalPrompt command="git ls-projects" />
      
      <div className="mt-8 space-y-6 font-mono">
        {featured && (
          <div className="group border border-[var(--color-border-default)] bg-[var(--color-card-bg)] rounded-lg p-1 transition-all hover:-translate-y-1 hover:border-[var(--color-terminal-accent)] hover:shadow-xl">
            <div className="border border-[var(--color-border-default)] rounded p-6 h-full flex flex-col group-hover:border-[var(--color-terminal-accent)]/30 transition-colors">
              <div className="flex items-center gap-2 text-[var(--color-text-muted)] mb-4">
                <FolderGit2 size={18} />
                <span>~/projects/{featured.slug}</span>
                <span className="ml-auto text-xs px-2 py-0.5 border border-[var(--color-warning)] text-[var(--color-warning)] rounded">FEATURED</span>
              </div>
              
              <h3 className="text-xl text-[var(--color-text-primary)] mb-4 group-hover:text-[var(--color-terminal-accent)] transition-colors">
                {featured.name}
              </h3>
              
              <p className="text-[var(--color-text-secondary)] font-sans mb-6 flex-1">
                {featured.description}
              </p>
              
              <div className="flex flex-wrap gap-3 text-sm text-[var(--color-text-muted)] mb-6">
                {featured.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {featured.githubUrl && (
                  <a href={featured.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[var(--color-text-primary)] hover:text-[var(--color-terminal-accent)] transition-colors">
                    [ GitHub ]
                  </a>
                )}
                {featured.liveUrl && (
                  <a href={featured.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[var(--color-text-primary)] hover:text-[var(--color-terminal-accent)] transition-colors">
                    <ExternalLink size={16} /> [ Live Demo ]
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {regular.map((project) => (
            <div key={project.name} className="group border border-[var(--color-border-default)] bg-[var(--color-card-bg)] rounded-lg p-1 transition-all hover:-translate-y-1 hover:border-[var(--color-terminal-accent)] hover:shadow-xl">
              <div className="border border-[var(--color-border-default)] rounded p-6 h-full flex flex-col group-hover:border-[var(--color-terminal-accent)]/30 transition-colors">
                <div className="flex items-center gap-2 text-[var(--color-text-muted)] mb-4">
                  <FolderGit2 size={16} />
                  <span className="text-sm">~/projects/{project.slug}</span>
                </div>
                
                <h3 className="text-lg text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-terminal-accent)] transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-[var(--color-text-secondary)] font-sans text-sm mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 text-xs text-[var(--color-text-muted)] mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-1.5 py-0.5 border border-[var(--color-border-default)] rounded">{tech}</span>
                  ))}
                </div>
                
                <div className="flex gap-4 text-sm">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[var(--color-text-primary)] hover:text-[var(--color-terminal-accent)] transition-colors">
                      [ GitHub ]
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[var(--color-text-primary)] hover:text-[var(--color-terminal-accent)] transition-colors">
                      <ExternalLink size={14} /> [ Live ]
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
