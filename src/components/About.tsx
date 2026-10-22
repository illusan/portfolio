import { Award, GraduationCap, Languages, MapPin, Database, Trophy } from 'lucide-react'
import { SiCss, SiHtml5, SiPython } from 'react-icons/si'
import type { CSSProperties } from 'react'
import type { IconType } from 'react-icons'
import { Slide, Slides } from '@animate-ui/react/primitives/effects/slide'
import { Highlight, HighlightItem } from '@animate-ui/react/primitives/effects/highlight'
import { useI18n } from '../i18n'
import { Container, SectionHeading } from './ui'

const SKILLS: { name: string; icon: IconType | typeof Database; color: string }[] = [
  { name: 'Python', icon: SiPython, color: '#4B8BBE' },
  { name: 'SQL', icon: Database, color: '#7aa7da' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#8f6bd8' },
]

const FACT_ICONS = [GraduationCap, Award, Trophy, Languages, MapPin]

export function About() {
  const { t } = useI18n()

  return (
    <section id="about-me" className="py-24 md:py-32">
      <Container>
        <SectionHeading label={t.about.title} title={t.about.heading} />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <Slide inView direction="up" offset={24} className="space-y-5 text-base leading-relaxed text-muted text-pretty md:text-lg">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="pt-4">
              <h3 className="mb-4 font-mono text-sm text-fg">{t.about.skillsTitle}</h3>
              <ul className="flex flex-wrap gap-3">
                {SKILLS.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className="group flex items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-2.5 font-mono text-sm text-fg transition-all hover:-translate-y-0.5 hover:border-line-strong"
                  >
                    <Icon
                      className="size-[18px] text-muted transition-colors group-hover:text-[var(--skill)]"
                      style={{ '--skill': color } as CSSProperties}
                      aria-hidden="true"
                    />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Slide>

          <div className="rounded-2xl border border-line bg-surface/60 p-2">
            <h3 className="sr-only">{t.about.factsTitle}</h3>
            <Highlight controlledItems hover className="inset-0 rounded-xl bg-white/[0.04]">
              <Slides inView direction="up" offset={16} holdDelay={80}>
                {t.about.facts.map((fact, i) => {
                  const Icon = FACT_ICONS[i]
                  return (
                    <HighlightItem key={fact.label}>
                      <div className="flex gap-4 rounded-xl p-4">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-accent/10 text-accent">
                          <Icon className="size-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-subtle">{fact.label}</p>
                          <p className="mt-1 font-medium text-fg">{fact.value}</p>
                          {fact.note && <p className="mt-0.5 text-sm text-muted">{fact.note}</p>}
                        </div>
                      </div>
                    </HighlightItem>
                  )
                })}
              </Slides>
            </Highlight>
          </div>
        </div>
      </Container>
    </section>
  )
}
