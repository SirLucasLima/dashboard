import { Container } from "./styles"

export function XpCard({xp, description}){
  return(
    <Container>
      <h1>{xp}</h1>
      <div className="p">
        <h3>{description}</h3>
      </div>
    </Container>
  )
}
