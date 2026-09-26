
type TerminalPromptProps = {
  command?: string
  path?: string
  showCursor?: boolean
}

export function TerminalPrompt({ command, path = "~", showCursor = false }: TerminalPromptProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 font-mono text-sm sm:text-base mb-4 text-[var(--color-text-primary)]">
      <span className="text-[var(--color-terminal-accent)]">$</span>
      {path && path !== "~" && <span className="text-[var(--color-command)]">{path}</span>}
      {command && <span>{command}</span>}
      {showCursor && <span className="animate-blink bg-[var(--color-text-primary)] w-2.5 h-5 inline-block align-middle ml-1"></span>}
    </div>
  )
}
