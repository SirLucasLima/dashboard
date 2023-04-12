import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

export function Project({title, deploy, frontend, backend, behance, description, techs}){
  return(
    <Container>
      <div className="title">
        <div className="left">
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
        <h1>{title}</h1>
      </div>
      <div className="about">
        <div className="img">
          <img src="/src/assets/display.png" alt="" />
        </div>
        <div className="textarea">
          <div className="description">
           <p>{description}</p>
          </div>
          <span>Hard Skills: {techs}</span>
        </div>
      </div>
    </Container>
  )
}
