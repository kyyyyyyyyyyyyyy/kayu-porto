import { useState, useEffect } from 'react'
import { Terminal } from './Terminal'
import { TerminalPrompt } from './TerminalPrompt'
import { profileData } from '../data/profile'

export function Hero() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 500)
    const timer2 = setTimeout(() => setStep(2), 1000)
    const timer3 = setTimeout(() => setStep(3), 1500)
    const timer4 = setTimeout(() => setStep(4), 2000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  return (
    <section className="min-h-[80vh] py-14 md:py-24 flex items-center justify-center">
      <div className="w-full">
        <Terminal title="~/portfolio">
          <div className="flex flex-col gap-4">
            <div>
              <TerminalPrompt command="whoami" />
              {step >= 1 && <div className="text-[var(--color-text-primary)] mb-4">{profileData.role.toLowerCase()}</div>}
            </div>

            {step >= 2 && (
              <div>
                <TerminalPrompt command="echo $NAME" />
                {step >= 3 && <div className="text-[var(--color-text-primary)] mb-4 font-bold text-lg md:text-xl">{profileData.name}</div>}
              </div>
            )}

            {step >= 4 && (
              <>
                <div>
                  <TerminalPrompt command="cat about.txt" />
                  <div className="text-[var(--color-text-secondary)] mb-6 whitespace-pre-line">
                    {profileData.description}
                  </div>
                </div>

                <div>
                  <TerminalPrompt command="./connect.sh" />
                  <div className="flex flex-wrap gap-4 mt-2 mb-6">
                    {profileData.github && (
                      <a href={profileData.github} target="_blank" rel="noreferrer" className="text-[var(--color-terminal-accent)] hover:bg-[var(--color-terminal-accent)] hover:text-[var(--color-primary-bg)] px-3 py-1 border border-[var(--color-terminal-accent)] rounded transition-colors">
                        [ GitHub ]
                      </a>
                    )}
                    {profileData.linkedin && (
                      <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-[var(--color-terminal-accent)] hover:bg-[var(--color-terminal-accent)] hover:text-[var(--color-primary-bg)] px-3 py-1 border border-[var(--color-terminal-accent)] rounded transition-colors">
                        [ LinkedIn ]
                      </a>
                    )}
                    {profileData.resumeUrl && (
                      <a href={profileData.resumeUrl} target="_blank" rel="noreferrer" className="text-[var(--color-terminal-accent)] hover:bg-[var(--color-terminal-accent)] hover:text-[var(--color-primary-bg)] px-3 py-1 border border-[var(--color-terminal-accent)] rounded transition-colors">
                        [ Resume ]
                      </a>
                    )}
                  </div>
                </div>

                <TerminalPrompt showCursor={true} />
              </>
            )}
          </div>
        </Terminal>
      </div>
    </section>
  )
}
