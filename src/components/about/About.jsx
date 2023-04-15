import { Container } from "./styles"
import Gramado from "../../assets/map.png"

export function About(){
  return(
    <Container>
      <div className="header">
        <h1>Sobre</h1>
        <div className="resume">
          <span>CV</span>
          <a href={Gramado} download>
            <i className="ri-file-download-line" />
          </a>
        </div>
      </div>
      <div className="textarea">
        <p>
          Como um desenvolvedor Full-Stack de JavaScript com experiência como designer, trago uma perspectiva e conjunto de habilidades únicos para o meu trabalho. 
        </p>
        <p>
          Sou proficiente no uso de ferramentas de design como Illustrator, Photoshop e Figma para criar wireframes e protótipos que ajudam a dar vida às ideias. Embora meu trabalho seja dedicado ao desenvolvimento, essa experiência me permite trabalhar em estreita colaboração com designers para garantir que sua visão seja implementada de forma eficaz.
        </p>
        <p>
          Minhas habilidades de desenvolvimento incluem a construção de aplicações web usando tecnologias como React, Next.js, Tailwind e Styled Components, e trabalhar com tecnologias do lado do servidor e bancos de dados, como Node.js, Express, Nest.js, Knex.js, SQLite e MongoDB (Restful API).
        </p>
      </div>
    </Container>
  )
}
