import { Container } from "./styles"

import XP from "../../data/Experience.json"
import { Card } from "./card/Card"

export function Cards(){
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
