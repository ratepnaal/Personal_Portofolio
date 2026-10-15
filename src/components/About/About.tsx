import { Container } from "./styles";
import nextjs from "../../assets/nextjsicon.svg"
import tailwindcss from "../../assets/tailwindcss.svg"
import mongodbicon from "../../assets/mongodb.svg";
import nodejsicon from "../../assets/node-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import githubicon from "../../assets/github.svg";
import postmanicon from "../../assets/postmanicon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { useLang } from "../../i18n/LanguageContext";

export function About() {
  const { t } = useLang();
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>{t.about.title}</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>{t.about.p1}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>{t.about.p2}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.25 * 1000} style={{ marginBottom: "2rem" }}>
          <p>{t.about.p3}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>{t.about.p4}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>{t.about.educationTitle}</h3>
            <h4>{t.about.degree}</h4>
            <p>{t.about.university}</p>
            <p>{t.about.year}</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>{t.about.experienceTitle}</h3>
            <h4>{t.about.role1}</h4>
            <time>{t.about.time1}</time>
            <p>{t.about.desc1a}
            <br/>{t.about.desc1b}</p>
            <br />
            <h4>{t.about.role2}</h4>
            <time>{t.about.time2}</time>
            <p>{t.about.desc2a}
            <br/>{t.about.desc2b}</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>{t.about.skills}</h3>
        </ScrollAnimation>
        <div className="hard-skills">
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="HTML" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="CSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={tailwindcss} alt="Tailwind CSS" />
            </ScrollAnimation>
          </div>
            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={nextjs} alt="Next.js" />
            </ScrollAnimation>
          </div>      
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="TypeScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={mongodbicon} alt="MongoDB" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={nodejsicon} alt="Node.js" />
            </ScrollAnimation>
          </div>
         
         
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={postmanicon} alt="Postman" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={githubicon} alt="GitHub" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
     
    </Container>
  )
}
