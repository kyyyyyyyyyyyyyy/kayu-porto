import { TerminalPrompt } from './TerminalPrompt'
import { profileData } from '../data/profile'

export function About() {
  return (
    <section id="about" className="py-14 md:py-24 border-t border-[var(--color-border-default)]">
      <TerminalPrompt command="cat about.md" />
      
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 text-[var(--color-text-secondary)] font-sans leading-relaxed space-y-4">
          <p>
            Hello! I am a software developer passionate about building scalable and efficient applications.
            My journey in software engineering has allowed me to work across the stack, 
            but my true passion lies in backend development and system architecture.
          </p>
          <p>
            I believe in writing clean, maintainable code and choosing the right tools for the job. 
            When I'm not coding, I'm usually learning about new technologies or contributing to open-source projects.
          </p>
        </div>
        
        <div className="font-mono text-sm space-y-4 border border-[var(--color-border-default)] bg-[var(--color-card-bg)] p-6 rounded-lg">
          <div>
            <div className="text-[var(--color-text-muted)] mb-1">location:</div>
            <div className="text-[var(--color-text-primary)]">{profileData.location}</div>
          </div>
          <div>
            <div className="text-[var(--color-text-muted)] mb-1">focus:</div>
            <div className="text-[var(--color-text-primary)]">{profileData.focus}</div>
          </div>
          <div>
            <div className="text-[var(--color-text-muted)] mb-1">experience:</div>
            <div className="text-[var(--color-text-primary)]">{profileData.experience}</div>
          </div>
          <div>
            <div className="text-[var(--color-text-muted)] mb-1">status:</div>
            <div className="text-[var(--color-terminal-accent)]">{profileData.status}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
