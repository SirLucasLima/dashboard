import { Container } from "./styles"

import XP from "../../data/Experience.json"
import { XpCard } from "./xpCards/XpCard"

export function XpCards(){
  return(
    <Container>
      {XP.map((item, index) => (
        <XpCard 
          key={index}
          xp={item.xp} 
          description={item.description}
        />
      ))}
    </Container>
  )
}
