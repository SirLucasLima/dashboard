import { Container } from "./styles"
import Pic from "../../assets/MeEmoji.webp"

export function ProfilePic(){
  return(
    <Container>
      <img src={Pic} alt="" />
    </Container>
  )
}
