import { Container } from "./styles"

import { Social } from "./social/Social"

export function Socials(){
  return(
    <Container>
      <Social icon="ri-linkedin-box-line"/>
      <Social icon="ri-github-fill"/>
      <Social icon="ri-instagram-line"/>
    </Container>
  )
}
