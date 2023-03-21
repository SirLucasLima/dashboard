import { Container } from "./styles"

import { Name } from "../../components/name/Name"
import { Icons } from "../../components/icons/Icons"
import { Photo } from "../../components/photo/Photo"
import { ProjectsDisplay } from "../../components/projectsDisplay/ProjectsDisplay"
import { Map } from "../../components/map/Map"

export function Home(){
  return(
    <Container>
      <div className="left">
        <div className="header">
          <div className="photoIcons">
            <Photo />
            <Icons />
          </div>
          <div className="nameMap">
            <Name />
            <Map />
          </div>
        </div>
        <ProjectsDisplay />
      </div>
      <div className="right">

      </div>
    </Container>
  )
}
