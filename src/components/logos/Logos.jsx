import { Container } from "./styles"

import UiLogos from "../../data/UiLogos.json"
import DevLogos from "../../data/DevLogos.json"
import { Logo } from "./logo/Logo"

export function Logos(){
  return(
    <Container>
      {DevLogos.map((item, index) => (
        <Logo 
          key={index}
          img={item.img}
          title={item.title}
        />
      ))}
    </Container>
  )
}
