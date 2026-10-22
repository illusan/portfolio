import { FolderGit2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { Slide } from '@animate-ui/react/primitives/effects/slide'
import { useI18n } from '../i18n'
import { Container, LINKS, SectionHeading, Tag } from './ui'

const NAILXSPOT_STACK = ['HTML', 'CSS', 'JavaScript', 'Supabase', 'SQL', 'Vercel']

// Ścieżki względne do /public, żeby działały pod dowolnym base URL
const shot = (file: string) => `${import.meta.env.BASE_URL}projects/${file}`

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
          <article className="overflow-hidden rounded-3xl border border-line bg-surface/60">
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              <div className="order-1 flex items-center justify-center gap-4 border-b border-line bg-gradient-to-br from-accent/15 via-transparent to-transparent px-6 py-10 sm:gap-6 sm:px-10 sm:py-14 lg:order-2 lg:border-b-0 lg:border-l">
                <div className="w-1/2 max-w-[220px]">
                  <PhoneFrame src={shot('nailxspot-mobile-home.jpg')} alt={p.shotHomeAlt} />
                </div>
                <div className="w-1/2 max-w-[220px] translate-y-6 sm:translate-y-10">
                  <PhoneFrame src={shot('nailxspot-mobile-booking.webp')} alt={p.shotBookingAlt} />
                </div>
              </div>

              <div className="order-2 flex flex-col p-6 sm:p-10 lg:order-1">
                <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-accent">
                    {t.projects.featured}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-success">
                    <span className="status-dot relative size-1.5 rounded-full bg-success text-success" aria-hidden="true" />
                    {p.status}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">nailxspot</h3>
                <p className="mt-1 text-accent-strong">{p.subtitle}</p>
                <p className="mt-4 leading-relaxed text-muted text-pretty">{p.description}</p>

                <h4 className="mt-7 font-mono text-sm text-fg">{p.sectionsTitle}</h4>
                <dl className="mt-3 space-y-3">
                  {p.sections.map((section) => (
                    <div key={section.name} className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-3">
                      <dt className="font-mono text-sm text-accent">{section.name}</dt>
                      <dd className="text-sm leading-relaxed text-fg/85">{section.text}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-7 flex flex-wrap gap-2 lg:mt-auto lg:pt-7" aria-label={t.projects.stackLabel}>
                  {NAILXSPOT_STACK.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-line p-6 sm:p-10">
              <h4 className="font-mono text-sm text-fg">{p.howTitle}</h4>
              <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {p.steps.map((step, i) => (
                  <li key={step} className="rounded-2xl border border-line bg-bg/40 p-5">
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <p className="mt-2 text-sm leading-relaxed text-fg/85">{step}</p>
                  </li>
                ))}
              </ol>
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
