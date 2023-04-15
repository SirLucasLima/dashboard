import { Link } from "react-router-dom"
import { Container } from "./styles"

export function Banner(){
  return(
    <Container>
      <h1>
        Transformando ideias em aplicações reais!
      </h1>
      <Link to={"https://wa.me/5554996652594"}>
        <div className="hire">
          Cantrate-me
          <i className="ri-service-line" />
        </div>
      </Link>
    </Container>
  )
}
