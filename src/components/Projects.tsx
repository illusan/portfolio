import { ArrowUpRight, Check, FolderGit2, Lock } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { Slide } from '@animate-ui/react/primitives/effects/slide'
import { Tilt, TiltContent } from '@animate-ui/react/primitives/effects/tilt'
import { useI18n } from '../i18n'
import { Container, LINKS, SectionHeading, Tag } from './ui'

const NAILXSPOT_STACK = ['HTML', 'CSS', 'JavaScript', 'Supabase', 'PostgreSQL', 'Vercel']

// Ścieżki względne do /public, żeby działały pod dowolnym base URL
const shot = (file: string) => `${import.meta.env.BASE_URL}projects/${file}`

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-strong bg-surface-2 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-0.5 font-mono text-[11px] text-subtle">
          nailxspot.vercel.app
        </span>
      </div>
      <img src={src} alt={alt} width={1440} height={900} loading="lazy" className="block w-full" />
    </div>
  )
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-[1.4rem] border-4 border-surface-2 bg-surface-2 shadow-2xl shadow-black/60 ring-1 ring-line-strong">
      <img src={src} alt={alt} width={390} height={844} loading="lazy" className="block w-full rounded-[1rem]" />
    </div>
  )
}

export function Projects() {
  const { t } = useI18n()
  const p = t.projects.nailxspot

  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        <SectionHeading label={t.projects.title} title={t.projects.heading} />

        <Slide inView direction="up" offset={32}>
          <article className="grid overflow-hidden rounded-3xl border border-line bg-surface/60 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative order-1 overflow-hidden border-b border-line bg-gradient-to-br from-accent/15 via-transparent to-transparent p-6 sm:p-10 lg:order-2 lg:border-b-0 lg:border-l">
              <Tilt maxTilt={5} className="relative">
                <TiltContent>
                  <BrowserFrame src={shot('nailxspot-hero.webp')} alt={p.shotDesktopAlt} />
                </TiltContent>
              </Tilt>
              <div className="absolute right-4 bottom-4 w-[28%] max-w-[150px] sm:right-6 sm:bottom-6">
                <PhoneFrame src={shot('nailxspot-mobile-booking.webp')} alt={p.shotMobileAlt} />
              </div>
            </div>

            <div className="order-2 flex flex-col p-6 sm:p-10 lg:order-1">
              <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-accent">
                  {t.projects.featured}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-success">
                  <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
                  {t.projects.live}
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">nailxspot</h3>
              <p className="mt-1 text-accent-strong">{p.subtitle}</p>
              <p className="mt-4 leading-relaxed text-muted text-pretty">{p.description}</p>

              <ul className="mt-6 space-y-2.5">
                {p.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-fg/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.projects.stackLabel}>
                {NAILXSPOT_STACK.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 lg:mt-auto lg:pt-8">
                <a
                  href={LINKS.nailxspot}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-strong"
                >
                  {p.demo}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-subtle">
                  <Lock className="size-4" aria-hidden="true" />
                  {p.privateCode}
                </span>
              </div>
            </div>
          </article>
        </Slide>

        <Slide inView direction="up" offset={24} delay={100}>
          <div className="mt-6 flex flex-col items-start gap-5 rounded-3xl border border-dashed border-line-strong p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-accent">
              <FolderGit2 className="size-6" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{t.projects.more.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{t.projects.more.text}</p>
            </div>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent/60 hover:bg-accent/10"
            >
              <FaGithub className="size-4" aria-hidden="true" />
              {t.projects.more.cta}
            </a>
          </div>
        </Slide>
      </Container>
    </section>
  )
}
