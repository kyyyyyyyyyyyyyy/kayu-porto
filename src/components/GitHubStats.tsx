import { useState, useEffect } from 'react'
import { TerminalPrompt } from './TerminalPrompt'

type GitHubData = {
  public_repos: number
  followers: number
  following: number
} | null

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubData>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/kyyyyyyyyyyyyyy')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then((data) => {
        setStats({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following
        })
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <section className="py-14 md:py-24 border-t border-[var(--color-border-default)]">
      <TerminalPrompt command="git status" />
      
      <div className="mt-8 font-mono text-sm sm:text-base p-6 border border-[var(--color-border-default)] bg-[var(--color-card-bg)] rounded-lg inline-block w-full sm:w-auto min-w-[300px]">
        {loading && <div className="text-[var(--color-text-secondary)]">Fetching stats from GitHub...</div>}
        
        {error && <div className="text-[var(--color-error)]">Failed to load GitHub stats.</div>}
        
        {!loading && !error && stats && (
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <span className="text-[var(--color-text-secondary)] w-32">repositories</span>
              <span className="text-[var(--color-terminal-accent)]">{stats.public_repos}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[var(--color-text-secondary)] w-32">followers</span>
              <span className="text-[var(--color-terminal-accent)]">{stats.followers}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[var(--color-text-secondary)] w-32">following</span>
              <span className="text-[var(--color-terminal-accent)]">{stats.following}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
