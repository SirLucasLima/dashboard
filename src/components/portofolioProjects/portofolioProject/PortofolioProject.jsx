import { Container } from "./styles"

export function PortofolioProject({title}){
  return(
    <Container>
      <div className="img">
        <img src="/src/assets/display.png" alt="" />
      </div>
      <div className="about">
        <div className="title">
          <h1>{title}</h1>
          <div className="links">
            <a href="/" data-hover="Deploy">
              <i className="ri-global-line"/>
            </a>
            <a href="/" data-hover="Front End">
              <i className="ri-terminal-window-line" />
            </a>
            <a href="/" data-hover="Back End">
              <i className="ri-terminal-box-line" />
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
