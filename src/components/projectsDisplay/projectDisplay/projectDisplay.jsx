import { Container } from "./styles"
import oi from "../../../assets/display.png"

export function ProjectDisplay({img, title}){
  return(
    <Container>
      <img src={img} alt={title} />
    </Container>
  )
}
