import { TerminalPrompt } from './TerminalPrompt'
import { profileData } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="py-14 md:py-24 border-t border-[var(--color-border-default)]">
      <TerminalPrompt command="./contact.sh" />
      
      <div className="mt-8 font-mono border border-[var(--color-border-default)] bg-[var(--color-card-bg)] p-6 rounded-lg">
        <p className="text-[var(--color-text-primary)] mb-8">Want to build something?</p>
        
        <div className="space-y-6 mb-8">
          <div>
            <div className="text-[var(--color-text-muted)] mb-1">email:</div>
            <a href={`mailto:${profileData.email}`} className="text-[var(--color-terminal-accent)] hover:underline">
              {profileData.email}
            </a>
          </div>
          
          {profileData.github && (
            <div>
              <div className="text-[var(--color-text-muted)] mb-1">github:</div>
              <a href={profileData.github} target="_blank" rel="noreferrer" className="text-[var(--color-text-primary)] hover:text-[var(--color-terminal-accent)] transition-colors">
                {profileData.github.replace('https://', '')}
              </a>
            </div>
          )}
          
          {profileData.linkedin && (
            <div>
              <div className="text-[var(--color-text-muted)] mb-1">linkedin:</div>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-[var(--color-text-primary)] hover:text-[var(--color-terminal-accent)] transition-colors">
                {profileData.linkedin.replace('https://', '')}
              </a>
            </div>
          )}
        </div>

        <div>
          <a href={`mailto:${profileData.email}`} className="group inline-flex items-center gap-2 text-[var(--color-text-primary)] hover:text-[var(--color-terminal-accent)] transition-colors">
            <span className="text-[var(--color-terminal-accent)]">$</span> send-message<span className="opacity-0 group-hover:opacity-100 animate-blink bg-[var(--color-terminal-accent)] w-2 h-4 inline-block align-middle" />
          </a>
        </div>
      </div>
    </section>
  )
}
