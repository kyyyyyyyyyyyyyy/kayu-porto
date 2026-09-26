import { cn } from '../lib/utils'

export type TerminalProps = {
  title?: string
  children: React.ReactNode
  className?: string
}

export function Terminal({ title, children, className }: TerminalProps) {
  return (
    <div className={cn("rounded-lg border border-[var(--color-border-default)] bg-[var(--color-terminal-bg)] shadow-xl overflow-hidden flex flex-col", className)}>
      <div className="flex items-center px-4 py-3 border-b border-[var(--color-border-default)] bg-[var(--color-card-bg)]">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        {title && (
          <div className="flex-1 text-center font-mono text-sm text-[var(--color-text-secondary)] mr-12">
            {title}
          </div>
        )}
      </div>
      <div className="p-4 sm:p-6 overflow-x-auto font-mono text-sm sm:text-base flex-1">
        {children}
      </div>
    </div>
  )
}
