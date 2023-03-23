import { Container } from "./styles"

export function Card({xp, description}){
  return(
    <Container>
      <h1>{xp}</h1>
      <div className="p">
        <h3>{description}</h3>
      </div>
    </Container>
  )
}
