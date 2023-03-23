import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

export function Social({icon}){
  return(
    <Container> 
      <i className={icon} />
    </Container>
  )
}
