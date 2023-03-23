import { PortofolioProject } from "../../components/portofolioProject/PortofolioProject"
import { PortofolioTitle } from "../../components/portofolioTitle/PortofolioTitle"
import { Container } from "./styles"

export function Portofolio(){
  return(
    <Container>
      <PortofolioTitle title={"Dev Portofolio"} placeholder={"Search"}/>
      <PortofolioProject />
    </Container>
  )
}
