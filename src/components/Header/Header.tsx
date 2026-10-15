import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/Rateb_Alnaal_CV.pdf'
import { useLang } from '../../i18n/LanguageContext'
export function Header() {
  const [isActive, setActive] = useState(false)
  const { t, toggle } = useLang()
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo" dir="ltr">
          <span>{"<Rateb "}</span>
          <span>{" Alnaal/>"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            {t.header.home}
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            {t.header.about}
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            {t.header.projects}
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            {t.header.contact}
          </NavHashLink>
          <a href={Resume} download className="button">
            {t.header.cv}
          </a>
          <button type="button" className="lang-toggle" onClick={() => { toggle(); closeMenu() }} aria-label={t.header.switchAria}>
            {t.header.switchLabel}
          </button>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? t.header.closeMenu : t.header.openMenu}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
