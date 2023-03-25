import { Container } from "./styles"

import UiLogos from "../../data/UiLogos.json"
import DevLogos from "../../data/DevLogos.json"
import { Skill } from "./skill/Skill"

export function Skills(){
  return(
    <Container>
      {DevLogos.map((item, index) => (
        <Skill 
          key={index}
          img={item.img}
          title={item.title}
        />
      ))}
    </Container>
  )
}
