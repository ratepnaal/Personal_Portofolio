import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import { useLang } from '../../i18n/LanguageContext'
export function Footer() {
  const { t } = useLang()
  return (
    <Container className="footer">
    
      <div>
        <p>
{t.footer.copyright}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/rateb-alnaal-a51067314/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/ratepnaal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=963959547610&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a
          href="https://t.me/ratepnaal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="Telegram" />
        </a>
      </div>
    </Container>
  )
}
