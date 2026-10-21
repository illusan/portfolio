import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import { Slide } from '@animate-ui/react/primitives/effects/slide'
import { Magnetic } from '@animate-ui/react/primitives/effects/magnetic'
import { Highlight, HighlightItem } from '@animate-ui/react/primitives/effects/highlight'
import { CopyButton, CopyButtonIcon } from '@animate-ui/react/primitives/buttons/copy'
import { useI18n } from '../i18n'
import { Container, LINKS, SectionHeading } from './ui'

const CHANNELS: { label: string; value: string; href: string; icon: IconType | typeof Mail; external: boolean }[] = [
  { label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}`, icon: Mail, external: false },
  { label: 'LinkedIn', value: 'Jakub Serafin', href: LINKS.linkedin, icon: FaLinkedin, external: true },
  { label: 'GitHub', value: `@${LINKS.githubHandle}`, href: LINKS.github, icon: FaGithub, external: true },
]

export function Contact() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <SectionHeading label={t.contact.title} title={t.contact.heading} />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Slide inView direction="up" offset={24}>
            <p className="max-w-xl text-base leading-relaxed text-muted text-pretty md:text-lg">{t.contact.text}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.25} range={90}>
                <a
                  href={`mailto:${LINKS.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-strong"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {t.contact.cta}
                </a>
              </Magnetic>
              <CopyButton
                content={LINKS.email}
                onCopiedChange={setCopied}
                aria-label={t.contact.copy}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:bg-accent/10"
              >
                <CopyButtonIcon
                  icon={<Copy className="size-4" aria-hidden="true" />}
                  copiedIcon={<Check className="size-4 text-success" aria-hidden="true" />}
                />
                <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
              </CopyButton>
            </div>
          </Slide>

          <Slide inView direction="up" offset={24} delay={100}>
            <ul className="rounded-2xl border border-line bg-surface/60 p-2">
              <Highlight controlledItems hover className="inset-0 rounded-xl bg-white/[0.04]">
                {CHANNELS.map(({ label, value, href, icon: Icon, external }) => (
                  <HighlightItem key={label} as="li">
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="group flex items-center gap-4 rounded-xl p-4"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-line bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-bg">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-xs uppercase tracking-wider text-subtle">{label}</span>
                        <span className="block truncate font-medium text-fg">{value}</span>
                      </span>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                        aria-hidden="true"
                      />
                    </a>
                  </HighlightItem>
                ))}
              </Highlight>
            </ul>
          </Slide>
        </div>
      </Container>
    </section>
  )
}
