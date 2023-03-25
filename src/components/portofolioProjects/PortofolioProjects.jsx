import { PortofolioProject } from "./portofolioProject/PortofolioProject"
import { Container } from "./styles"

export function PortofolioProjects(){
  return(
    <Container>
      <PortofolioProject />
      <PortofolioProject />
      <PortofolioProject />
      <PortofolioProject />
    </Container>
  )
}
