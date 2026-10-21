import type { ReactNode } from 'react'
import { Slide } from '@animate-ui/react/primitives/effects/slide'

export const LINKS = {
  email: 'kubek.serafin@gmail.com',
  github: 'https://github.com/illusan',
  githubHandle: 'illusan',
  linkedin: 'https://www.linkedin.com/in/jakub-serafin-7503413b1/',
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
}

// Nagłówek sekcji w stylu terminala: „## nazwa” + właściwy tytuł
export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <Slide inView direction="up" offset={24} className="mb-10 md:mb-14">
      <p className="mb-3 font-mono text-sm text-accent">
        <span aria-hidden="true">## </span>
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
    </Slide>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </li>
  )
}
