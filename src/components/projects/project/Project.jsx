import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

export function Project({title, deploy, frontend, backend, behance, description}){
  return(
    <Container>
      <div className="img">
        <img src="/src/assets/display.png" alt="" />
      </div>
      <div className="about">
        <div className="title">
          <h1>{title}</h1>
          <div className="links">
            {(behance ? 
              <a href={behance} data-hover="Design">
                <i className="ri-behance-line"/>
              </a> : ""
            )}
            {(deploy ? 
              <a href={deploy} data-hover="Deploy">
                <i className="ri-global-line"/>
              </a> : ""
            )}
            {(frontend ? 
              <a href={frontend} data-hover="Front End">
                <i className="ri-terminal-window-line"/>
              </a> : ""
            )}
            {(backend ? 
              <a href={backend} data-hover="Back End">
                <i className="ri-terminal-box-line"/>
              </a> : ""
            )}
          </div>
        </div>
        <div className="textarea">
          <p>{description}</p>
        </div>
      </div>
    </Container>
  )
}
