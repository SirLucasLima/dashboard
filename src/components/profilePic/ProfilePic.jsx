import { Container } from "./styles"
import Pic from "../../assets/photo.svg"

export function ProfilePic(){
  return(
    <Container>
      <img src={Pic} alt="" />
    </Container>
  )
}
