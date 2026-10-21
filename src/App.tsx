import { AnimateUIProvider } from '@animate-ui/react/provider'
import { ScrollProgress, ScrollProgressProvider } from '@animate-ui/react/primitives/scroll-progress'
import { I18nProvider, useI18n } from './i18n'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Container } from './components/ui'

function Footer() {
  return (
    <footer className="border-t border-line pt-8 pb-28 md:pb-10">
      <Container className="flex flex-col gap-2 font-mono text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Jakub Serafin</p>
      </Container>
    </footer>
  )
}

function Page() {
  const { t } = useI18n()

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {t.skipLink}
      </a>

      <ScrollProgressProvider global>
        <ScrollProgress className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent" />
      </ScrollProgressProvider>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default function App() {
  return (
    <AnimateUIProvider reducedMotion="user">
      <I18nProvider>
        <Page />
      </I18nProvider>
    </AnimateUIProvider>
  )
}
