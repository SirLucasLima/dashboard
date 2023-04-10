import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

import { ProjectDisplay } from "./projectDisplay/projectDisplay"
import UI from "../../data/UiProjects"
import DEV from "../../data/DevProjects"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { Link } from "react-router-dom"


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
        <a href="/portofolio">
          <Link to="/portofolio">
            <span>See All</span>
          </Link>
        </a>
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
