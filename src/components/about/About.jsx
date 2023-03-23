import { Container } from "./styles"

export function About(){
  return(
    <Container>
      <div className="header">
        <h1>About</h1>
        <div className="resume">
          <span>Resume</span>
          <i className="ri-file-download-line" />
        </div>
      </div>
      <div className="textarea">
        <p>
          Well, I'm a full-stack javascript developer, I'm always looking to keep up to date with the market, so I'm currently dedicating efforts to Next.JS and Nest.JS technologies. 
        </p>
        <p>
          Although my focus is development, I'm also a UX/UI designer, I've worked in that area and I keep updating myself, because I believe that makes me a more complete developer.
        </p>
      </div>
    </Container>
  )
}
