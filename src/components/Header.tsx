import { Highlight, HighlightItem } from '@animate-ui/react/primitives/effects/highlight'
import { ToggleGroup } from '@animate-ui/react/primitives/radix-ui/toggle-group'
import { dictionaries, useI18n, type Lang } from '../i18n'
import { useActiveSection, SECTION_IDS, type SectionId } from '../hooks/useActiveSection'

const NAV_KEYS = {
  start: 'start',
  'about-me': 'about',
  projects: 'projects',
  contact: 'contact',
} as const

function LanguageToggle() {
  const { lang, setLang, t } = useI18n()

  return (
    <ToggleGroup.Root
      type="single"
      value={lang}
      onValueChange={(value) => value && setLang(value as Lang)}
      aria-label={t.langLabel}
      className="flex rounded-full border border-line bg-surface/80 p-1 font-mono text-xs backdrop-blur-md"
    >
      {(['en', 'pl'] as const).map((code) => (
        <ToggleGroup.Item
          key={code}
          value={code}
          aria-label={code === 'en' ? 'English' : 'Polski'}
          className="cursor-pointer rounded-full px-3 py-1.5 uppercase text-muted transition-colors hover:text-fg data-[state=on]:bg-accent/20 data-[state=on]:text-fg"
        >
          {code}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  )
}

// Obie wersje językowe leżą na sobie w jednej komórce siatki, więc szerokość
// linku to zawsze ta dłuższa i pasek nie zmienia rozmiaru po zmianie języka
function NavLabel({ id }: { id: SectionId }) {
  const { lang } = useI18n()

  return (
    <span className="inline-grid">
      {(Object.keys(dictionaries) as Lang[]).map((code) => (
        <span
          key={code}
          aria-hidden={code !== lang}
          className={`col-start-1 row-start-1 ${code === lang ? '' : 'invisible'}`}
        >
          {dictionaries[code].nav[NAV_KEYS[id]]}
        </span>
      ))}
    </span>
  )
}

function NavLinks({ active, compact = false }: { active: SectionId; compact?: boolean }) {
  return (
    <Highlight
      value={active}
      click={false}
      controlledItems
      className="inset-0 rounded-full border border-accent/50 bg-accent/10"
    >
      {SECTION_IDS.map((id) => (
        <HighlightItem key={id} value={id}>
          <a
            href={`#${id}`}
            aria-current={active === id ? 'true' : undefined}
            className={`block rounded-full font-mono transition-colors ${
              compact ? 'px-3 py-2 text-[13px]' : 'px-4 py-2 text-sm'
            } ${active === id ? 'text-fg' : 'text-muted hover:text-fg'}`}
          >
            {!compact && <span className="text-accent"># </span>}
            <NavLabel id={id} />
          </a>
        </HighlightItem>
      ))}
    </Highlight>
  )
}

export function Header() {
  const { t } = useI18n()
  const active = useActiveSection()

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 md:py-5">
          <a
            href="#start"
            className="rounded-full border border-line bg-surface/80 px-4 py-2 font-mono text-sm font-medium backdrop-blur-md transition-colors hover:border-line-strong"
          >
            <span className="text-accent">~/</span>jakub
          </a>

          <nav
            aria-label={t.nav.label}
            className="hidden rounded-full border border-line bg-surface/80 p-1 shadow-lg shadow-black/30 backdrop-blur-md md:block"
          >
            <div className="flex">
              <NavLinks active={active} />
            </div>
          </nav>

          <LanguageToggle />
        </div>
      </header>

      {/* Na telefonie nawigacja ląduje na dole ekranu, w zasięgu kciuka */}
      <nav
        aria-label={t.nav.label}
        className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:hidden"
      >
        <div className="flex rounded-full border border-line bg-surface/90 p-1 shadow-xl shadow-black/40 backdrop-blur-md">
          <NavLinks active={active} compact />
        </div>
      </nav>
    </>
  )
}
