import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { useLang } from "../../i18n/LanguageContext"


export function Contact(){
  const { t } = useLang()

  return(
    <Container id="contact">
      <header>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.line1}</p>
        <p>{t.contact.line2}</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ratepn445@gmail.com"><img src={emailIcon} alt={t.contact.emailAlt} /></a> 
          <a href="mailto:ratepn445@gmail.com" dir="ltr">ratepn445@gmail.com</a>
        </div>
        <div>
        <a href="tel:+963959547610"><img src={phoneIcon} alt={t.contact.phoneAlt} /></a>
          <a href="tel:+963959547610" dir="ltr">(+963) 959547610</a>
        </div>  
      </div>

    </Container>
  )
}