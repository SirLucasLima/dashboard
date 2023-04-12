import { Container } from "./styles"

import { Social } from "./social/Social"

export function Socials(){
  return(
    <Container>
      <Social icon="ri-linkedin-box-line" link="https://www.linkedin.com/in/developerlucaslima/"/>
      <Social icon="ri-github-fill" link="https://github.com/developerlucaslima"/>
      <Social icon="ri-instagram-line" link="https://www.instagram.com/devlucaslima/"/>
    </Container>
  )
}
