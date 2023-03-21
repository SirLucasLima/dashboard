import { Container } from "./styles"

import { Photo } from "../../components/photo/Photo"
import { Socials } from "../../components/socials/Socials"
import { Name } from "../../components/name/Name"
import { Map } from "../../components/map/Map"
import { ProjectsDisplay } from "../../components/projectsDisplay/ProjectsDisplay"
import { Banner } from "../../components/banner/Banner"
import { Cards } from "../../components/cards/Cards"
import { About } from "../../components/about/About"

export function Home(){
  return(
    <Container>
      <div className="left">
        <div className="header">
          <div className="photoIcons">
            <Photo />
            <Socials />
          </div>
          <div className="nameMap">
            <Name />
            <Map />
          </div>
        </div>
        <ProjectsDisplay />
      </div>
      <div className="right">
        <Banner />
        <Cards />
        <About />
      </div>
    </Container>
  )
}
