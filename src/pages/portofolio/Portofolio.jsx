import { PortofolioProjects } from "../../components/portofolioProjects/PortofolioProjects"
import { PortofolioTitle } from "../../components/portofolioTitle/PortofolioTitle"
import { Container } from "./styles"

export function Portofolio(){
  return(
    <Container>
      <div className="left">
        <PortofolioTitle title={"Dev Portofolio"} placeholder={"Search"}/>
        <PortofolioProjects />
      </div>
      <div className="right">

      </div>
    </Container>
  )
}
