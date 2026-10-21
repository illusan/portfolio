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
    status: 'Open to internships & junior roles',
    hello: "Hi, I'm",
    buildPrefix: 'I build',
    buildWords: ['web applications', 'booking systems', 'Python tools', 'responsive interfaces'],
    lead: 'Second-year Applied Computer Science student at Jagiellonian University in Kraków. I turn real problems into working software, from the database to the last pixel of the interface.',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    photoAlt: 'Jakub Serafin standing in front of a mountain landscape',
  },
  about: {
    title: 'about-me',
    heading: 'A student who likes shipping real things',
    paragraphs: [
      'I study Applied Computer Science at Jagiellonian University and hold the IT technician (programmer) qualification, which I earned at a technical secondary school.',
      'I enjoy building projects end to end: designing the database, writing the logic and polishing the interface. My latest project, nailxspot, is a live booking system built for a real nail studio.',
      "Right now I'm deepening my JavaScript and back-end skills and looking for my first internship, where I can learn from an experienced team and deliver real features.",
    ],
    skillsTitle: 'Skills',
    factsTitle: 'Quick facts',
    facts: [
      { label: 'Education', value: 'Applied Computer Science, Jagiellonian University', note: '2025 – present' },
      { label: 'Qualification', value: 'IT technician – programmer', note: 'Technical secondary school' },
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
    text: "I'm looking for an internship or a junior position where I can learn and grow. If you have an opportunity or a question, write to me. I usually reply within a day.",
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
    status: 'Szukam stażu lub pracy na stanowisku junior',
    hello: 'Cześć, jestem',
    buildPrefix: 'Tworzę',
    buildWords: ['aplikacje webowe', 'systemy rezerwacji', 'narzędzia w Pythonie', 'responsywne interfejsy'],
    lead: 'Student drugiego roku Informatyki Stosowanej na Uniwersytecie Jagiellońskim w Krakowie. Zamieniam realne problemy w działające oprogramowanie, od bazy danych po ostatni piksel interfejsu.',
    ctaProjects: 'Zobacz projekty',
    ctaContact: 'Napisz do mnie',
    photoAlt: 'Jakub Serafin na tle górskiego krajobrazu',
  },
  about: {
    title: 'o-mnie',
    heading: 'Student, który lubi dowozić prawdziwe rzeczy',
    paragraphs: [
      'Studiuję Informatykę Stosowaną na Uniwersytecie Jagiellońskim. Mam tytuł technika programisty, który zdobyłem w technikum.',
      'Lubię budować projekty od początku do końca: projektować bazę danych, pisać logikę i dopracowywać interfejs. Mój ostatni projekt, nailxspot, to działający system rezerwacji stworzony dla prawdziwego salonu paznokci.',
      'Obecnie rozwijam umiejętności w JavaScripcie i back-endzie oraz szukam pierwszego stażu, na którym będę mógł uczyć się od doświadczonego zespołu i dostarczać realne funkcje.',
    ],
    skillsTitle: 'Umiejętności',
    factsTitle: 'W skrócie',
    facts: [
      { label: 'Edukacja', value: 'Informatyka Stosowana, Uniwersytet Jagielloński', note: '2025 – obecnie' },
      { label: 'Kwalifikacje', value: 'Technik programista', note: 'Technikum' },
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
    text: 'Szukam stażu lub stanowiska junior, na którym będę mógł się uczyć i rozwijać. Jeśli masz dla mnie propozycję albo pytanie, napisz. Zwykle odpowiadam w ciągu doby.',
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
