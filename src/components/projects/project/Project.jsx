import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

export function Project({title, deploy, frontend, backend, figma, behance, description, techs}){
  return(
    <Container>
      <div className="title">
        <div className="left">
          {(behance ? 
            <a href={behance} data-hover="Behance">
              <i className="ri-palette-line"/>
            </a> : ""
          )}
          {(figma ? 
            <a href={figma} data-hover="Figma Layout">
              <i className="ri-palette-line"/>
            </a> : ""
          )}
          {(deploy ? 
            <a href={deploy} data-hover="Deploy">
              <i className="ri-pages-line"/>
            </a> : ""
          )}
          {(frontend ? 
            <a href={frontend} data-hover="Front-End Code">
              <i className="ri-reactjs-line"/>
            </a> : ""
          )}
          {(backend ? 
            <a href={backend} data-hover="Back-End Code">
              <i className="ri-git-repository-line"/>
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
