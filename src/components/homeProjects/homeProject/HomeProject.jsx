import { Container } from "./styles"

export function HomeProject({img, title}){
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
