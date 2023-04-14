import { Link } from "react-router-dom"
import { Container } from "./styles"

export function HomeProject({img1, title}){
  return(
    <Link to={"/portofolio"}>
      <Container>
        <img src={img1} alt={title} />
        <div className="readmore">
          <h3>{title}</h3>
        </div>
      </Container>
    </Link>
  )
}
