import type { ReactNode } from 'react'

interface PlaceholderPageProps {
  eyebrow: string
  title: string
  description: string
  meta?: ReactNode
}

export function PlaceholderPage({ eyebrow, title, description, meta }: PlaceholderPageProps) {
  return (
    <section className="compact-spacing mx-auto flex min-h-full w-full max-w-5xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="compact-padding rounded-[2rem] border border-zinc-200/70 bg-white/85 p-6 shadow-[0_20px_70px_-45px_rgba(24,24,27,0.35)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
        <p className="text-sm font-medium text-[color:var(--accent-strong)] dark:text-[color:var(--accent)]">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="compact-padding rounded-[2rem] border border-zinc-200/70 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.04]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Placeholder content
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            This route is intentionally lightweight for now. The app shell, navigation system, theme handling,
            and IndexedDB-backed settings are already wired up, so feature work can be added next without
            revisiting the foundation.
          </p>
        </div>

        <div className="compact-padding rounded-[2rem] border border-zinc-200/70 bg-[color:var(--accent-soft)]/70 p-6 dark:border-white/10 dark:bg-[color:var(--accent-soft-dark)]/70">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
            Route note
          </h2>
          <div className="mt-4 text-sm leading-7 text-zinc-700 dark:text-zinc-200">{meta}</div>
        </div>
      </div>
    </section>
  )
}
