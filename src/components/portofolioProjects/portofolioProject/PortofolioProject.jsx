import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

export function PortofolioProject({title, links, icons, description}){
  return(
    <Container>
      <div className="img">
        <img src="/src/assets/display.png" alt="" />
      </div>
      <div className="about">
        <div className="title">
          <h1>{title}</h1>
          <div className="links">
            <a href={links} data-hover="Deploy">
              <i className="ri-global-line"/>
            </a>
          </div>
        </div>
        <div className="textarea">
          <p>{description}</p>
        </div>
      </div>
    </Container>
  )
}
