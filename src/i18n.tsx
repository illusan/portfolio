import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'pl'

const en = {
  meta: {
    title: 'Jakub Serafin — Applied Computer Science student',
    description:
      'Portfolio of Jakub Serafin, Applied Computer Science student at Jagiellonian University in Kraków. Projects, skills and contact.',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main navigation',
    start: 'home',
    about: 'about-me',
    projects: 'projects',
    contact: 'contact',
  },
  langLabel: 'Change language',
  hero: {
    status: 'Open to internships & contract work',
    hello: "Hi, I'm",
    buildPrefix: 'I build',
    buildWords: ['web applications', 'booking systems', 'Python tools', 'responsive interfaces'],
    lead: 'Second-year Applied Computer Science student at Jagiellonian University in Kraków. Curious about new things, eager to learn and happy to work with others.',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    photoAlt: 'Jakub Serafin standing in front of a mountain landscape',
  },
  about: {
    title: 'about-me',
    heading: 'Curious, eager to learn and open to new challenges',
    paragraphs: [
      'I study Applied Computer Science at Jagiellonian University. I hold the title of IT technician (programmer), earned at a technical secondary school, and the Young Innovator title in IT and telecommunications.',
      'I am curious about new things and I work well in a team. I learn best by building my own projects. My latest one, nailxspot, is a booking website that a nail studio uses every day.',
      "I'm now starting to expand my skills in JavaScript. I'm looking for an internship or a job on a contract of mandate (umowa zlecenie) and I'm open to any proposals where I can learn and work with a team.",
    ],
    skillsTitle: 'Skills',
    factsTitle: 'Quick facts',
    facts: [
      { label: 'Education', value: 'Applied Computer Science, Jagiellonian University', note: '2025 – present' },
      { label: 'Qualification', value: 'IT technician – programmer', note: 'Technical secondary school' },
      { label: 'Award', value: 'Young Innovator in IT and telecommunications', note: 'Polski Związek Stowarzyszeń Wynalazców i Racjonalizatorów' },
      { label: 'Languages', value: 'Polish – native', note: 'English – B1/B1+' },
      { label: 'Location', value: 'Kraków, Poland', note: '' },
    ],
  },
  projects: {
    title: 'projects',
    heading: 'Selected work',
    featured: 'Featured',
    stackLabel: 'Tech stack',
    nailxspot: {
      subtitle: 'Booking website for a nail studio',
      status: 'In daily use',
      description:
        'A website I built for a nail artist in Chełm. Clients use it every day to book appointments online instead of calling or writing messages, and the owner manages everything from her own admin panel.',
      sectionsTitle: "What's on the site",
      sections: [
        { name: '#start', text: 'A short introduction of the studio and the artist.' },
        {
          name: '#zapisy',
          text: 'The booking form: a calendar that shows only free days, available hours, a list of services, contact details, an optional note and an inspiration photo.',
        },
        { name: '#portfolio', text: "A gallery of finished nails taken from the studio's Instagram." },
        {
          name: 'admin panel',
          text: 'A login-protected page where the owner adds free slots and sees every booking with the attached photo.',
        },
      ],
      howTitle: 'How it works',
      steps: [
        'The owner adds free dates and hours in the admin panel.',
        'A client picks one of them in the calendar and fills in the form.',
        'The booking is saved in the database and the hour disappears from the calendar, so nobody else can take it.',
        "The new booking appears in the owner's panel right away.",
      ],
      shotDesktopAlt: 'nailxspot portfolio section on desktop with an Instagram post of finished nails',
      shotMobileAlt: 'nailxspot booking form on a phone with a selected date and time slot',
    },
    more: {
      title: 'More projects on the way',
      text: "I'm working on new projects. In the meantime, my GitHub has university assignments and smaller experiments.",
      cta: 'Visit my GitHub',
    },
  },
  contact: {
    title: 'contact',
    heading: "Let's work together",
    text: "I'm looking for an internship or a job on a contract of mandate (umowa zlecenie). If you have a proposal or a question, write to me. I usually reply within a day.",
    cta: 'Send an email',
    copy: 'Copy email address',
    copied: 'Copied!',
  },
}

type Dict = typeof en

const pl: Dict = {
  meta: {
    title: 'Jakub Serafin — student Informatyki Stosowanej',
    description:
      'Portfolio Jakuba Serafina, studenta Informatyki Stosowanej na Uniwersytecie Jagiellońskim w Krakowie. Projekty, umiejętności i kontakt.',
  },
  skipLink: 'Przejdź do treści',
  nav: {
    label: 'Główna nawigacja',
    start: 'start',
    about: 'o-mnie',
    projects: 'projekty',
    contact: 'kontakt',
  },
  langLabel: 'Zmień język',
  hero: {
    status: 'Szukam stażu lub pracy na umowę zlecenie',
    hello: 'Cześć, jestem',
    buildPrefix: 'Tworzę',
    buildWords: ['aplikacje webowe', 'systemy rezerwacji', 'narzędzia w Pythonie', 'responsywne interfejsy'],
    lead: 'Student drugiego roku Informatyki Stosowanej na Uniwersytecie Jagiellońskim w Krakowie. Ciekawy nowych rzeczy, chętny do nauki i do współpracy.',
    ctaProjects: 'Zobacz projekty',
    ctaContact: 'Napisz do mnie',
    photoAlt: 'Jakub Serafin na tle górskiego krajobrazu',
  },
  about: {
    title: 'o-mnie',
    heading: 'Ciekawy nowych rzeczy i otwarty na współpracę',
    paragraphs: [
      'Studiuję Informatykę Stosowaną na Uniwersytecie Jagiellońskim. Posiadam tytuł technika programisty, zdobyty w technikum, oraz tytuł Młodego Innowatora w dziedzinie informatyki i telekomunikacji.',
      'Jestem ciekawy nowych rzeczy i dobrze odnajduję się w pracy zespołowej. Najlepiej uczę się, robiąc własne projekty. Mój ostatni projekt, nailxspot, to strona do zapisów, z której codziennie korzysta salon paznokci.',
      'Obecnie zaczynam poszerzać umiejętności w JavaScripcie. Szukam stażu lub pracy na umowę zlecenie i jestem otwarty na propozycje, w których będę mógł się uczyć i współpracować z zespołem.',
    ],
    skillsTitle: 'Umiejętności',
    factsTitle: 'W skrócie',
    facts: [
      { label: 'Edukacja', value: 'Informatyka Stosowana, Uniwersytet Jagielloński', note: '2025 – obecnie' },
      { label: 'Kwalifikacje', value: 'Technik programista', note: 'Technikum' },
      { label: 'Wyróżnienie', value: 'Młody Innowator w dziedzinie informatyki i telekomunikacji', note: 'Polski Związek Stowarzyszeń Wynalazców i Racjonalizatorów' },
      { label: 'Języki', value: 'Polski – ojczysty', note: 'Angielski – B1/B1+' },
      { label: 'Lokalizacja', value: 'Kraków', note: '' },
    ],
  },
  projects: {
    title: 'projekty',
    heading: 'Wybrane projekty',
    featured: 'Wyróżniony',
    stackLabel: 'Technologie',
    nailxspot: {
      subtitle: 'Strona do zapisów dla stylistki paznokci',
      status: 'W codziennym użyciu',
      description:
        'Strona, którą zrobiłem dla stylistki paznokci z Chełma. Klientki codziennie zapisują się przez nią na wizyty zamiast dzwonić czy pisać wiadomości, a właścicielka zarządza wszystkim we własnym panelu administracyjnym.',
      sectionsTitle: 'Co jest na stronie',
      sections: [
        { name: '#start', text: 'Krótkie przedstawienie salonu i stylistki.' },
        {
          name: '#zapisy',
          text: 'Formularz rezerwacji: kalendarz pokazujący tylko wolne dni, dostępne godziny, lista usług, dane kontaktowe, opcjonalna notatka i zdjęcie inspiracji.',
        },
        { name: '#portfolio', text: 'Galeria gotowych stylizacji pobierana z Instagrama salonu.' },
        {
          name: 'panel admina',
          text: 'Strona chroniona logowaniem, na której właścicielka dodaje wolne terminy i widzi wszystkie rezerwacje razem z dołączonymi zdjęciami.',
        },
      ],
      howTitle: 'Jak to działa',
      steps: [
        'Właścicielka dodaje wolne dni i godziny w panelu admina.',
        'Klientka wybiera jeden z nich w kalendarzu i wypełnia formularz.',
        'Rezerwacja zapisuje się w bazie danych, a godzina znika z kalendarza, więc nikt inny jej nie zajmie.',
        'Nowa rezerwacja od razu pojawia się w panelu właścicielki.',
      ],
      shotDesktopAlt: 'Sekcja portfolio nailxspot na komputerze z postem z Instagrama',
      shotMobileAlt: 'Formularz rezerwacji nailxspot na telefonie z wybraną datą i godziną',
    },
    more: {
      title: 'Kolejne projekty w drodze',
      text: 'Pracuję nad nowymi projektami. W międzyczasie na moim GitHubie znajdziesz zadania ze studiów i mniejsze eksperymenty.',
      cta: 'Zobacz mój GitHub',
    },
  },
  contact: {
    title: 'kontakt',
    heading: 'Porozmawiajmy',
    text: 'Szukam stażu lub pracy na umowę zlecenie. Jeśli masz dla mnie propozycję albo pytanie, napisz. Zwykle odpowiadam w ciągu doby.',
    cta: 'Wyślij e-mail',
    copy: 'Skopiuj adres e-mail',
    copied: 'Skopiowano!',
  },
}

export const dictionaries: Record<Lang, Dict> = { en, pl }
const STORAGE_KEY = 'lang'

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'pl' ? 'pl' : 'en'
  } catch {
    return 'en'
  }
}

type I18nValue = { lang: Lang; setLang: (lang: Lang) => void; t: Dict }

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStoredLang)
  const t = dictionaries[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Prywatne okno albo zablokowany storage: język po prostu się nie zapamięta
    }
  }, [lang, t])

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
