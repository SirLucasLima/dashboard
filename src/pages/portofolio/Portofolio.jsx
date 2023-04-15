import { Container } from "./styles"

import { ProjectsInput } from "../../components/projectsInput/ProjectsInput"
import { Projects } from "../../components/projects/Projects"
import { HardSkillsTitle } from "../../components/hardSkillsTitle/HardSkillsTitle"
import { HardSkills } from "../../components/hardSkills/HardSkills"

export function Portofolio(){
  return(
    <Container>
      <div className="left">
        <ProjectsInput title={"Dev Portofolio"} placeholder={"Palavra-chave..."}/>
        <Projects />
      </div>
      <div className="right">
        <HardSkillsTitle />
        <HardSkills />
      </div>
    </Container>
  )
}
