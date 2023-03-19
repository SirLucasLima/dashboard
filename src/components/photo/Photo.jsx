import { Container } from "./styles"
import Pic from "../../assets/photo.svg"

export function Photo(){
  return(
    <Container>
      <img src={Pic} alt="" />
    </Container>
  )
}
