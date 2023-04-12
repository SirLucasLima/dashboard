import { Container } from "./styles"
import Gramado from "../../assets/map.png"

export function About(){
  return(
    <Container>
      <div className="header">
        <h1>About</h1>
        <div className="resume">
          <span>Resume</span>
          <a href={Gramado} download>
            <i className="ri-file-download-line" />
          </a>
        </div>
      </div>
      <div className="textarea">
        <p>
          As a Full-Stack JavaScript developer with a background as a designer, I bring a unique perspective and skill set to my work. 
        </p>
        <p>
          I am proficient in using design tools like Illustrator, Photoshop and Figma to create wireframes and prototypes that help bring ideas to life. While my efforts are dedicated to development, this experience allows me to work closely with designers to ensure their vision is implemented effectively.
        </p>
        <p>
          My development skills include building web applications using technologies such as React, NextJ, TailWind and Styled Components, and working with databases and server-side technologies such as Node.js, Nest.js, Knex.js Express, SQLite and MongoDB (Restfull API).
        </p>
      </div>
    </Container>
  )
}
