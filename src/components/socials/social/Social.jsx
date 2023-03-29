import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

export function Social({icon, link}){
  return(
    <Container> 
      <a href={link}>
        <i className={icon} />
      </a>
    </Container>
  )
}
