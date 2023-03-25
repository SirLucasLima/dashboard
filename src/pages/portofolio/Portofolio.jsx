import { Container } from "./styles"

import { PortofolioTitle } from "../../components/portofolioTitle/PortofolioTitle"
import { PortofolioProjects } from "../../components/portofolioProjects/PortofolioProjects"
import { SkillsTitle } from "../../components/skillsTitle/SkillsTitle"
import { Skills } from "../../components/skills/Skills"

export function Portofolio(){
  return(
    <Container>
      <div className="left">
        <PortofolioTitle title={"Dev Portofolio"} placeholder={"Search"}/>
        <PortofolioProjects />
      </div>
      <div className="right">
        <SkillsTitle />
        <Skills />
      </div>
    </Container>
  )
}
