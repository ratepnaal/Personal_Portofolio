import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { Dict, Lang, translations } from './translations'

interface LanguageContextValue {
  lang: Lang
  t: Dict
  toggle: () => void
}

const STORAGE_KEY = 'portfolio-lang'

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  t: translations.en,
  toggle: () => {},
})

function readSavedLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'ar' || saved === 'en') return saved
  } catch {
    // storage can be blocked (private mode); fall back to English
  }
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readSavedLang)

  // keep <html lang dir> and the tab title in sync with the chosen language
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = translations[lang].meta.title
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
  }, [lang])

  const toggle = useCallback(() => setLang((l) => (l === 'en' ? 'ar' : 'en')), [])

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
