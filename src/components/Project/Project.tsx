import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import botSimulatorShot from "../../assets/bot-simulator.webp";
import technicalStoreShot from "../../assets/projects/technical-store.webp";
import budgetAnalyzerShot from "../../assets/projects/budget-analyzer.webp";
import awardsWinningShot from "../../assets/projects/awards-winning.webp";
import { useLang } from "../../i18n/LanguageContext";

export function Project() {
  const { t } = useLang();
  const p = t.projects;

  // the three portfolio projects, in display order
  const cards = [
    {
      key: "store",
      copy: p.store,
      image: technicalStoreShot,
      github: "https://github.com/ratepnaal/e-commerce-MERN-Stack.git",
      live: "https://e-commerce-mern-stack-tan.vercel.app/",
      tech: ["React.js", "Express.js", "MongoDB"],
    },
    {
      key: "budget",
      copy: p.budget,
      image: budgetAnalyzerShot,
      github: "https://github.com/ratepnaal/Budget-Analyzer.git",
      live: "https://budget-analyzer-kohl.vercel.app/",
      tech: ["Next.js", "Redux Toolkit", "Local Storage"],
    },
    {
      key: "awards",
      copy: p.awards,
      image: awardsWinningShot,
      github: "https://github.com/ratepnaal/Awards-Waining-.git",
      live: "https://awards-waining.vercel.app/",
      tech: ["React.js", "Vite", "GSAP"],
    },
  ];

  return (
    <Container id="project">
      <h2>{p.title}</h2>
      <div className="projects">

        <div className="featured-slot">
          <ScrollAnimation animateIn="flipInX">
            <div className="project featured">
              <a
                className="featured-media"
                href="https://bot-simulator-tau.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={botSimulatorShot} alt={p.bot.imageAlt} loading="lazy" />
              </a>
              <div className="featured-content">
                <header>
                  <div className="status">
                    <span className="badge live">
                      <span className="dot" aria-hidden="true" /> {p.live}
                    </span>
                    <span className="badge">{p.inDevelopment}</span>
                  </div>
                  <div className="project-links">
                    <a
                      href="https://github.com/ratepnaal/bot-simulator"
                      target="_blank"
                      rel="noreferrer"
                      title={p.bot.githubAlt}
                    >
                      <img src={githubIcon} alt={p.bot.githubAlt} />
                    </a>
                    <a
                      href="https://bot-simulator-tau.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      title={p.bot.liveAlt}
                    >
                      <img src={externalLink} alt={p.bot.liveAlt} />
                    </a>
                  </div>
                </header>
                <div className="body">
                  <h3>{p.bot.title}</h3>
                  <p>{p.bot.description}</p>
                  <p className="note">{p.bot.note}</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    <li>Python</li>
                    <li>{p.bot.techTelegram}</li>
                    <li>Next.js</li>
                    <li>{p.bot.techClaude}</li>
                  </ul>
                </footer>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {cards.map((c) => (
          <ScrollAnimation animateIn="flipInX" key={c.key}>
            <div className="project">
              <a className="project-media" href={c.live} target="_blank" rel="noreferrer">
                <img src={c.image} alt={c.copy.imageAlt} loading="lazy" />
              </a>
              <header>
                <div className="project-links">
                  <a href={c.github} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt={p.githubAlt(c.copy.name)} />
                  </a>
                  <a href={c.live} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt={p.liveAlt(c.copy.name)} />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{c.copy.title}</h3>
                <p>{c.copy.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {c.tech.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}

      </div>
    </Container>
  );
}
