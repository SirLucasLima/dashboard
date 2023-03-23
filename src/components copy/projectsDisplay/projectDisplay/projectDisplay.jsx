import { Container } from "./styles"

export function ProjectDisplay({img, title}){
  return(
    <Container>
      <img src={img} alt={title} />
      <div className="readmore">
        <span>Read More</span>
        <span>{title}</span>
      </div>
    </Container>
  )
}
