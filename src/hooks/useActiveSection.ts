import { useEffect, useState } from 'react'

export const SECTION_IDS = ['start', 'about-me', 'projects', 'contact'] as const
export type SectionId = (typeof SECTION_IDS)[number]

// Aktywna sekcja to ta, która przecina pas na wysokości ~40% ekranu
export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('start')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return active
}
