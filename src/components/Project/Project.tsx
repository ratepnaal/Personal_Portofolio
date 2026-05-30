import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/ratepnaal/e-commerce-MERN-Stack.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://e-commerce-mern-stack-tan.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Tecnical Store : E - Commerce MERN STACK</h3>
              <p>
A full-stack e-commerce platform built with the MERN stack, featuring a modern and responsive user interface for tech products.
It includes secure user authentication and a dynamic shopping cart system to ensure a seamless end-to-end shopping experience.     </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js </li>
                <li>Express Js</li>
                <li>Mongo DB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

         <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/ratepnaal/Budget-Analyzer.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://budget-analyzer-kohl.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3> Budget Analyzer : Financial Planning App</h3>
              <p>
An advanced dual-currency budget and expense management web app (USD / SYP) 
built with Next.js and Redux Toolkit. It is specially designed to help freelancers and employees track funds, commit invoices,
 and manage loans and savings in real-time amidst severe exchange rate fluctuations.    </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next Js </li>
                <li>Redux Toolkit</li>
                <li>Local Storage</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

          <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/ratepnaal/Awards-Waining-.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://awards-waining.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3> Awards Waining : Interactive Gaming Platform</h3>
              <p>
An interactive landing page for a gaming/metagame platform built with React and Vite,
 featuring immersive video elements and dynamic GSAP scroll animations. It includes multiple sections (Hero/Features/Story/Contact)
  with a fully responsive design powered by Tailwind CSS and custom assets. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js </li>
                <li>Vite</li>
                <li>GSAP</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


      </div>
    </Container>
  );
}