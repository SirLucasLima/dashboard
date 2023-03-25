import { Container } from "./styles"

export function Logo({img, title}){
  return(
    <Container>
      <div className="img">
        <img src={img} alt={title} />
      </div>
      <span>{title}</span>
    </Container>
  )
}
