import { Container } from "./styles"

import { Name } from "../../components/name/Name"
import { Icons } from "../../components/icons/Icons"

export function Home(){
  return(
    <Container>
      <Name />
      <Icons />
    </Container>
  )
}
