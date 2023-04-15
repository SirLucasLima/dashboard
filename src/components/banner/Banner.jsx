import { Container } from "./styles"

export function Banner(){
  return(
    <Container>
      <h1>
        Transformando idéias em aplicações reais!
      </h1>
      <button>
        Hire me
        <i className="ri-service-line" />
      </button>
    </Container>
  )
}
