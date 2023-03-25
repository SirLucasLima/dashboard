import { Container } from "./styles"

export function Skill({img, title}){
  return(
    <Container>
      <div className="img">
        <img src={img} alt={title} />
      </div>
      <div className="title">
        <span>{title}</span>
      </div>
    </Container>
  )
}
