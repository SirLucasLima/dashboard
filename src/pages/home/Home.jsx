import { Container } from "./styles"

import { ProfilePic } from "../../components/profilePic/ProfilePic"
import { Socials } from "../../components/socials/Socials"
import { Name } from "../../components/name/Name"
import { City } from "../../components/city/City"
import { Projects } from "../../components/projects/Projects"
import { Banner } from "../../components/banner/Banner"
import { XpCards } from "../../components/xpCards/XpCards"
import { About } from "../../components/about/About"

export function Home(){
  return(
    <Container>
      <div className="left">
        <div className="header">
          <div className="photoIcons">
            <ProfilePic />
            <Socials />
          </div>
          <div className="nameMap">
            <Name />
            <City />
          </div>
        </div>
        <Projects />
      </div>
      <div className="right">
        <Banner />
        <XpCards />
        <About />
      </div>
    </Container>
  )
}
