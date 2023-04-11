import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

export function Social({icon, link}){
  return(
    <Container> 
      <a href={link} target="_blank" rel="noopener">
        <i className={icon} />
      </a>
    </Container>
  )
}
