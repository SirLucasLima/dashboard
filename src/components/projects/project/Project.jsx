import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

export function Project({title, deploy, frontend, backend, figma, behance, img2, description, techs}){
  return(
    <Container>
      <div className="title">
        <div className="left">
          {(behance ? 
            <a href={behance} target="_blank" rel="noopener" data-hover="Behance">
              <i className="ri-palette-line"/>
            </a> : ""
          )}
          {(figma ? 
            <a href={figma} target="_blank" rel="noopener" data-hover="Figma Layout">
              <i className="ri-palette-line"/>
            </a> : ""
          )}
          {(deploy ? 
            <a href={deploy} target="_blank" rel="noopener" data-hover="Deploy">
              <i className="ri-pages-line"/>
            </a> : ""
          )}
          {(frontend ? 
            <a href={frontend} target="_blank" rel="noopener" data-hover="Front-End Code">
              <i className="ri-reactjs-line"/>
            </a> : ""
          )}
          {(backend ? 
            <a href={backend} target="_blank" rel="noopener" data-hover="Back-End Code">
              <i className="ri-git-repository-line"/>
            </a> : ""
          )}
        </div>
        <h1>{title}</h1>
      </div>
      <div className="about">
        <div className="img">
          <img src={img2} alt="" />
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
