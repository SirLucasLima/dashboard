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
          Como desenvolvedor Full-Stack JavaScript com experiência em design, trago uma
          perspectiva única e um conjunto de habilidades para o meu trabalho. Sou proficiente
          no uso de ferramentas de design, como Illustrator, Photoshop e Figma, para criar
          wireframes e protótipos que dão vida às ideias. Além disso, minhas habilidades
          de desenvolvimento incluem HTML e CSS, JavaScript, TypeScript, React, Next.js,
          Stitches.css, Tailwind.css, Styled Components, React Hooks, ContextAPI, Zustand,
          entre outras. Também estou familiarizado com as necessidades de servidor e banco
          de dados, trabalhando com Node.js, Nest.js, Express, Fastify, Knex.js, Prisma, Jest,
          Vitest, SQLite e Postgres. Combinando essas habilidades, sou capaz de trabalhar em
          estreita colaboração com equipes de design para garantir a implementação eficaz
          da visão do projeto
        </p>
      </div>
    </Container>
  )
}
