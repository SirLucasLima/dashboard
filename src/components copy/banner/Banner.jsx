import { Container } from "./styles"

export function Banner(){
  return(
    <Container>
      <h1>
        Turning your ideas into real applications!
      </h1>
      <button>
        Hire me
        <i className="ri-service-line" />
      </button>
    </Container>
  )
}
