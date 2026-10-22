import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { Slide } from '@animate-ui/react/primitives/effects/slide'
import { useI18n } from '../i18n'
import { Container, LINKS, SectionHeading, Tag } from './ui'

// Ścieżki względne do /public, żeby działały pod dowolnym base URL
const shot = (file: string) => `${import.meta.env.BASE_URL}projects/${file}`

type Shot = { src: string; alt: string; width: number; height: number }

type ProjectCopy = {
  subtitle: string
  status: string
  description: string
  sectionsTitle: string
  sections: { name: string; text: string }[]
  howTitle: string
  steps: string[]
}

type ProjectCardProps = {
  name: string
  copy: ProjectCopy
  stack: string[]
  shots: [Shot, Shot]
  live?: boolean
  featured?: boolean
  repo?: { href: string; label: string }
}

function ShotFrame({ src, alt, width, height }: Shot) {
  return (
    <div className="overflow-hidden rounded-[1.4rem] border-4 border-surface-2 bg-surface-2 shadow-2xl shadow-black/60 ring-1 ring-line-strong">
      <img src={src} alt={alt} width={width} height={height} loading="lazy" className="block w-full rounded-[1rem]" />
    </div>
  )
}

function ProjectCard({ name, copy, stack, shots, live = false, featured = false, repo }: ProjectCardProps) {
  const { t } = useI18n()

  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-surface/60">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="order-1 flex items-center justify-center gap-4 border-b border-line bg-gradient-to-br from-accent/15 via-transparent to-transparent px-6 py-10 sm:gap-6 sm:px-10 sm:py-14 lg:order-2 lg:border-b-0 lg:border-l">
          <div className="w-1/2 max-w-[220px]">
            <ShotFrame {...shots[0]} />
          </div>
          <div className="w-1/2 max-w-[220px] translate-y-6 sm:translate-y-10">
            <ShotFrame {...shots[1]} />
          </div>
        </div>

        <div className="order-2 flex flex-col p-6 sm:p-10 lg:order-1">
          <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-xs">
            {featured && (
              <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-accent">
                {t.projects.featured}
              </span>
            )}
            {live ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-success">
                <span className="status-dot relative size-1.5 rounded-full bg-success text-success" aria-hidden="true" />
                {copy.status}
              </span>
            ) : (
              <span className="rounded-full border border-line-strong bg-white/[0.03] px-2.5 py-1 text-muted">
                {copy.status}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{name}</h3>
          <p className="mt-1 text-accent-strong">{copy.subtitle}</p>
          <p className="mt-4 leading-relaxed text-muted text-pretty">{copy.description}</p>

          <h4 className="mt-7 font-mono text-sm text-fg">{copy.sectionsTitle}</h4>
          <dl className="mt-3 space-y-3">
            {copy.sections.map((section) => (
              <div key={section.name} className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-3">
                <dt className="font-mono text-sm text-accent">{section.name}</dt>
                <dd className="text-sm leading-relaxed text-fg/85">{section.text}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 flex flex-col gap-5 lg:mt-auto lg:pt-7">
            <ul className="flex flex-wrap gap-2" aria-label={t.projects.stackLabel}>
              {stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </ul>
            {repo && (
              <a
                href={repo.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent/60 hover:bg-accent/10"
              >
                <FaGithub className="size-4" aria-hidden="true" />
                {repo.label}
                <ArrowUpRight
                  className="size-4 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-line p-6 sm:p-10">
        <h4 className="font-mono text-sm text-fg">{copy.howTitle}</h4>
        <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.steps.map((step, i) => (
            <li key={step} className="rounded-2xl border border-line bg-bg/40 p-5">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <p className="mt-2 text-sm leading-relaxed text-fg/85">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </article>
  )
}

export function Projects() {
  const { t } = useI18n()
  const nx = t.projects.nailxspot
  const ai = t.projects.aiReviewer

  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        <SectionHeading label={t.projects.title} title={t.projects.heading} />

        <div className="space-y-8">
          <Slide inView direction="up" offset={32}>
            <ProjectCard
              name="nailxspot"
              copy={nx}
              featured
              live
              stack={['HTML', 'CSS', 'JavaScript', 'Supabase', 'SQL', 'Vercel']}
              shots={[
                { src: shot('nailxspot-mobile-home.jpg'), alt: nx.shotHomeAlt, width: 390, height: 844 },
                { src: shot('nailxspot-mobile-booking.webp'), alt: nx.shotBookingAlt, width: 390, height: 844 },
              ]}
            />
          </Slide>

          <Slide inView direction="up" offset={32}>
            <ProjectCard
              name="AI Opinion Reviewer"
              copy={ai}
              stack={['HTML', 'CSS', 'JavaScript', 'Chrome Extensions API', 'Groq API']}
              shots={[
                { src: shot('ai-reviewer-start.jpg'), alt: ai.shotStartAlt, width: 600, height: 1100 },
                { src: shot('ai-reviewer-loading.jpg'), alt: ai.shotLoadingAlt, width: 600, height: 1100 },
              ]}
              repo={{ href: LINKS.aiReviewer, label: ai.repo }}
            />
          </Slide>
        </div>

        <Slide inView direction="up" offset={24} delay={100}>
          <div className="mt-8 flex flex-col items-start gap-5 rounded-3xl border border-dashed border-line-strong p-6 sm:flex-row sm:items-center sm:p-8">
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
