import { Link } from 'react-router-dom'

import { StyledPresentation } from './styled-presentation'
import { Typewriter } from './typewriter'

export const Presentation = () => {
  return (
    <StyledPresentation>
      <div className="wrapper-presentation">
        <p>Hi folks! I am</p>
        <h1>Dev Lucas Lima</h1>
        <h2>
          {'>'}{' '}
          <Typewriter
            texts={['Full Stack Developer', 'UI Designer']}
            typingSpeed={140}
            deletingSpeed={100}
            pauseBetween={1000}
          />
        </h2>
      </div>

      <div className="wrapper-presentation">
        <section>Turning ideas into real applications</section>
        <Link to={'/me/about'}>Comece aqui</Link>
      </div>
    </StyledPresentation>
  )
}
