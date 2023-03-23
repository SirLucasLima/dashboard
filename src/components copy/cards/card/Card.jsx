import { Container } from "./styles"

export function Card({xp, description}){
  return(
    <Container>
      <h1>{xp}</h1>
      <div className="p">
        <p>{description}</p>
      </div>
    </Container>
  )
}
