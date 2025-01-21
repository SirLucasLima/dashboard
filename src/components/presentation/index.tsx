import { Link } from 'react-router-dom'

import { StyledPresentation } from './styled-presentation'

export const Presentation = () => {
  return (
    <StyledPresentation>
      <div className="wrapper-presentation">
        <p>Hi folks! I am</p>
        <h1>Dev Lucas Lima</h1>
        <h2>{'>'} Full Stack Developer</h2>
        {/* <h2>{'>'} Full Stack Developer & UI Designer</h2> */}
      </div>

      <div className="wrapper-presentation">
        <section>Turning ideas into real applications</section>
        <Link to={'/me/about'}>Comece aqui</Link>
      </div>
    </StyledPresentation>
  )
}
