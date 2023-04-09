import { Container } from "./styles"
import Map from "../../assets/map.png"

export function Map(){
  return(
    <Container>
      <div className="header">
        <span>Based In:</span>
      </div>
      <div className="map">
        <img src={Map} alt="" />
      </div>
    </Container>
  )
}
