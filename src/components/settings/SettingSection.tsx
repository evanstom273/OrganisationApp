import type { ReactNode } from 'react'

interface SettingSectionProps {
  title: string
  description: string
  children: ReactNode
}

export function SettingSection({ title, description, children }: SettingSectionProps) {
  return (
    <section className="compact-padding rounded-[2rem] border border-zinc-200/70 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.04]">
      <div className="max-w-xl">
        <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">{title}</h2>
        <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  )
}
