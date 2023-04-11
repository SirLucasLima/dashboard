import { Container } from "./styles"

import XP from "../../data/Experience.json"
import { Card } from "./xpCard/XpCard"

export function XpCards(){
  return(
    <Container>
      {XP.map((item, index) => (
        <Card 
          key={index}
          xp={item.xp} 
          description={item.description}
        />
      ))}
    </Container>
  )
}
