import React from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from './i18n/LanguageContext'
function App() {
  return (
    <LanguageProvider>
      <GlobalStyle />
      <Header />
      <Main />
      <Analytics />
      <Footer />
    </LanguageProvider>
  )
}

export default App
