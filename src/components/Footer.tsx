import { TerminalPrompt } from './TerminalPrompt'
import { profileData } from '../data/profile'

export function Footer() {
  return (
    <footer className="py-8 border-t-2 border-dashed border-[var(--color-border-default)] font-mono text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--color-text-secondary)]">
        <div>~/portfolio</div>
        <div>Built with React + TypeScript</div>
        <div>&copy; {new Date().getFullYear()} {profileData.name}</div>
      </div>
      <div className="mt-8 flex justify-center">
        <TerminalPrompt command="exit" showCursor={true} />
      </div>
    </footer>
  )
}
