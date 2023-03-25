import { Container } from "./styles"

import { Logos } from "../../components/logos/Logos"
import { PortofolioProjects } from "../../components/portofolioProjects/PortofolioProjects"
import { PortofolioTitle } from "../../components/portofolioTitle/PortofolioTitle"

export function Portofolio(){
  return(
    <Container>
      <div className="left">
        <PortofolioTitle title={"Dev Portofolio"} placeholder={"Search"}/>
        <PortofolioProjects />
      </div>
      <div className="right">
        <Logos />
      </div>
    </Container>
  )
}
