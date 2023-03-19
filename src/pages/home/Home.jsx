import { Container } from "./styles"

import { Name } from "../../components/name/Name"
import { Icons } from "../../components/icons/Icons"
import { Photo } from "../../components/photo/Photo"
import { ProjectsDisplay } from "../../components/projectsDisplay/ProjectsDisplay"

export function Home(){
  return(
    <Container>
      <Name />
      <Icons />
      <Photo /> 
      <ProjectsDisplay />
    </Container>
  )
}
