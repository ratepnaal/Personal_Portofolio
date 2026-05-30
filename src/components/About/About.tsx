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

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
As an Information Technology student and web developer, my passion extends beyond academia into building innovative digital solutions and embracing technical challenges.          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
My background includes building independent projects from scratch, alongside a practical training that bridged the gap between academic theory and real-world project dynamics.          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
Known for rapid learning and writing Clean Code, I am currently seeking an opportunity within a professional team or a training environment to refine my skills and contribute effectively.          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Bachelor in Information Technology (BAIT)</h4>
            <p>Syrian Virtual University (SVU)</p>
            <p>4th Year Student (Current)</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
             <h3>Experience:</h3>
             <h4>Independent Web Developer</h4>
            <time>October 2024 – Present</time>
            <p>Dedicated the past two years to continuous self-directed learning and building numerous hands-on training projects from scratch.
            <br/> Focused on sharpening skills in modern web development frameworks and solving complex programming problems independently.</p>
            <br />
            <h4>Web Developer Intern | MAD SOLUTION (Remote)</h4>
            <time>September 2024 – October 2024</time>
            <p>Participated in a 2-month structured remote internship, collaborating effectively within a development team.
            <br/>Contributed to designing and building multiple practical training projects, aligning with industry workflows.</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={tailwindcss} alt="tailwindcss" />
            </ScrollAnimation>
          </div>
            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={nextjs} alt="nextjs" />
            </ScrollAnimation>
          </div>      
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={mongodbicon} alt="mongodb" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={nodejsicon} alt="nodejs" />
            </ScrollAnimation>
          </div>
         
         
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={postmanicon} alt="postman" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={githubicon} alt="github" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
     
    </Container>
  )
}
