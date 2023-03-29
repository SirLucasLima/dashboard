import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

import UI from "../../data/UiProjects.json"
import DEV from "../../data/DevProjects.json"
import { ProjectDisplay } from "./projectDisplay/projectDisplay"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";


export function ProjectsDisplay(){
  const { skill, toggle } = useContext(SkillContext)
  const  mapping = (skill ? UI : DEV)

  return(
    <Container>
      <div className="header">
        <div className="title">
          <i className="ri-arrow-left-s-line" onClick={toggle}/>
          <h1>{!skill ? "Dev Portofolio" : "Ui Portofolio"}</h1>
          <i className="ri-arrow-right-s-line" onClick={toggle}/>
        </div>
        <span>
          See All
        </span>
      </div>
      <div className="display">
        {mapping?.map((item, index) => (
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
