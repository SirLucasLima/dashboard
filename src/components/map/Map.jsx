import { Container } from "./styles"
import { Icon } from "../icons/icon/Icon"

export function Map(){
  return(
    <Container>
      <div className="header">
        <span>Based In:</span>
      </div>
      <div className="map">
        <img src="/src/assets/map.png" alt="" />
      </div>
    </Container>
  )
}
