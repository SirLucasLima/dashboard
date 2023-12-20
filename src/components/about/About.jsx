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
          Desenvolvedor Full-Stack com habilidades de design. 
          Tenho experiência no uso de ferramentas como Illustrator, 
          Photoshop e Figma para criar wireframes e protótipos. Minha
          expertise em desenvolvimento abrange áreas web e mobile,
          com proficiência em Java (SpringBoot e Java Android) e JavaScript 
          (Node.js/Nest.js e React/Next.js). A integração dessas
          habilidades me permite colaborar de perto com equipes de design, 
          garantindo a implementação efetiva da visão do projeto. Além
          disso, possuo conhecimento em Clean Code, DDD, OOP, TDD e SOLID.
          Estou constantemente atualizando meu conjunto de habilidades
          para oferecer as melhores soluções disponíveis.
        </p>
      </div>
    </Container>
  )
}
