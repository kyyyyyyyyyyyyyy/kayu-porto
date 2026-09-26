import { TerminalPrompt } from './TerminalPrompt'
import { skillsData } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="py-14 md:py-24 border-t border-[var(--color-border-default)]">
      <TerminalPrompt command="ls ./skills" />
      
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono">
        {skillsData.map((category) => (
          <div key={category.name} className="border border-[var(--color-border-default)] bg-[var(--color-card-bg)] p-6 rounded-lg hover:border-[var(--color-terminal-accent)] transition-colors">
            <div className="text-[var(--color-command)] mb-4">{category.name}/</div>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-[var(--color-text-secondary)] flex items-center gap-2">
                  <span className="text-[var(--color-text-muted)]">├─</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
