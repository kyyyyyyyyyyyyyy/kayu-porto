import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = ['about', 'skills', 'experience', 'projects', 'contact']

  const handleScroll = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-primary-bg)]/80 backdrop-blur-md border-b border-[var(--color-border-default)]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between font-mono">
        <div className="text-[var(--color-terminal-accent)] font-bold flex items-center gap-1 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          ~/portfolio<span className="animate-blink w-2 h-4 bg-[var(--color-terminal-accent)] inline-block" />
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button 
              key={item} 
              onClick={() => handleScroll(item)}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-terminal-accent)] transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--color-border-default)] bg-[var(--color-primary-bg)] px-6 py-4 flex flex-col gap-4 font-mono">
          {navItems.map((item) => (
            <button 
              key={item}
              onClick={() => handleScroll(item)}
              className="text-left text-[var(--color-text-secondary)] hover:text-[var(--color-terminal-accent)]"
            >
              &gt; {item}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
