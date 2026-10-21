import { ArrowRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { Fade } from '@animate-ui/react/primitives/effects/fade'
import { Slide } from '@animate-ui/react/primitives/effects/slide'
import { Magnetic } from '@animate-ui/react/primitives/effects/magnetic'
import { RotatingText, RotatingTextContainer } from '@animate-ui/react/primitives/texts/rotating'
import { useI18n } from '../i18n'
import { Container, LINKS } from './ui'
import photo from '../assets/jakub.webp'

export function Hero() {
  const { lang, t } = useI18n()

  return (
    <section id="start" className="relative flex min-h-[100svh] items-center pt-24 pb-28 md:pb-16">
      <Container className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr] md:gap-16">
        <div className="order-2 md:order-1">
          <Slide delay={100} offset={20}>
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-success/25 bg-success/10 px-3.5 py-1.5 text-xs font-medium text-success sm:text-sm">
              <span className="status-dot relative size-2 rounded-full bg-success text-success" aria-hidden="true" />
              {t.hero.status}
            </p>
          </Slide>

          <Slide delay={200} offset={24}>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-xl font-normal text-muted sm:text-2xl">{t.hero.hello}</span>
              <span className="mt-2 block bg-gradient-to-r from-fg via-fg to-accent-strong bg-clip-text text-transparent">
                Jakub Serafin
              </span>
            </h1>
          </Slide>

          <Slide delay={320} offset={24}>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-2 font-mono text-lg text-muted sm:text-xl">
              <span>{t.hero.buildPrefix}</span>
              <RotatingTextContainer
                key={lang}
                text={t.hero.buildWords}
                duration={2600}
                delay={1200}
                className="text-accent"
              >
                <RotatingText />
              </RotatingTextContainer>
            </div>
          </Slide>

          <Slide delay={440} offset={24}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
              {t.hero.lead}
            </p>
          </Slide>

          <Slide delay={560} offset={24}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.25} range={90}>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-strong"
                >
                  {t.hero.ctaProjects}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:bg-accent/10"
              >
                <Mail className="size-4" aria-hidden="true" />
                {t.hero.ctaContact}
              </a>
              <div className="flex items-center gap-1 sm:ml-2">
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-full p-3 text-muted transition-colors hover:bg-white/5 hover:text-fg"
                >
                  <FaGithub className="size-5" aria-hidden="true" />
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full p-3 text-muted transition-colors hover:bg-white/5 hover:text-fg"
                >
                  <FaLinkedin className="size-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Slide>
        </div>

        <Fade delay={300} className="order-1 mx-auto w-full max-w-[220px] sm:max-w-[280px] md:order-2 md:max-w-[340px]">
          <div className="overflow-hidden rounded-[2rem] border border-line-strong bg-surface shadow-2xl shadow-black/50">
            <img
              src={photo}
              alt={t.hero.photoAlt}
              width={400}
              height={400}
              className="aspect-square w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </Fade>
      </Container>
    </section>
  )
}
