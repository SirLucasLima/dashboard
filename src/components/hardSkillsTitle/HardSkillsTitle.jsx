import { Link } from "react-router-dom"
import { Container } from "./styles"

export function HardSkillsTitle(){
  return(
    <Container>
      <h1>Hard Skills</h1>
      <Link to={"/"}>
          <i className="ri-arrow-right-line" />
      </Link>
    </Container>
  )
}
