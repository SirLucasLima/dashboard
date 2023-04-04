import { Container } from "./styles"
import { PortofolioProject } from "./portofolioProject/PortofolioProject"

import UI from "../../data/UiProjects.json"
import DEV from "../../data/DevProjects.json"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";

export function PortofolioProjects(){
  const { skill } = useContext(SkillContext)
  const  mapping = (skill ? UI : DEV)

  return(
    <Container>
      {DEV.map((item, index) => (
        <PortofolioProject 
          key={index}
          title={item.title}
          description={item.description}
          backend={item.links.backend}
          frontend={item.links.frontend}
          deploy={item.links.deploy}
          behance={item.links.behance}
        />
      ))}
    </Container>
  )
}
