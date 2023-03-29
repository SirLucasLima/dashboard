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
          links={item.links.deploy}
          icons={item.icons}
          description={item.description}
        />
      ))}
    </Container>
  )
}
