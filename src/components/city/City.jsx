import { Container } from "./styles"
import Gramado from "../../assets/map.png"

export function City(){
  return(
    <Container>
      <div className="header">
        <span>Based In:</span>
      </div>
      <div className="map">
        <img src={Gramado} alt="" />
      </div>
    </Container>
  )
}
