import { Container } from "./styles"
import CV from "../../assets/fullstack.pdf"

export function About(){
  return(
    <Container>
      <div className="header">
        <h1>Sobre</h1>
        <div className="resume">
          <span>CV</span>
          <a href={CV} download>
            <i className="ri-file-download-line" />
          </a>
        </div>
      </div>
      <div className="textarea">
        <p>
          I am a Full-Stack developer with design skills. I have experience using tools like Illustrator, 
          Photoshop, and Figma for creating wireframes and prototypes. My development expertise spans web 
          and mobile areas, with proficiency in Java (SpringBoot and Java Android) and JavaScript 
          (Node.js/Nest.js and React/Next.js). The integration of these skills enables me to closely 
          collaborate with design teams, ensuring the effective implementation of the project's vision. 
          Additionally, I have knowledge in Docker, DDD, OOP, TDD, and SOLID. I am constantly updating my 
          skill set to provide the best available solutions.
        </p>
      </div>
    </Container>
  )
}
