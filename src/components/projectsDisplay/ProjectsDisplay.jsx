import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

import UI from "../../data/UiProjects.json"
import Dev from "../../data/DevProjects.json"
import { ProjectDisplay } from "./projectDisplay/projectDisplay"


export function ProjectsDisplay(){
  return(
    <Container>
      <div className="header">
        <div className="title">
          <i className="ri-arrow-left-s-line" />
          <h1>Dev Portofolio</h1>
          <i className="ri-arrow-right-s-line" />
        </div>
        <span>
          See All
        </span>
      </div>
      <div className="display">
        {Dev?.map((item, index) => (
          <ProjectDisplay 
            key={index}
            img={item.img}
            title={item.title} 
          />
        ))}
      </div>
    </Container>
  )
}
