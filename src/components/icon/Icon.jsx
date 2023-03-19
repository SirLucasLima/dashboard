import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

export function Icon({icon}){
  return(
    <Container> 
      <i className={icon}></i>
    </Container>
  )
}
