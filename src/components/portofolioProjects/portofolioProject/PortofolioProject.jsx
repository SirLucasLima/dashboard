import { Container } from "./styles"

export function PortofolioProject(){
  return(
    <Container>
      <div className="img">
        <img src="/src/assets/display.png" alt="" />
      </div>
      <div className="about">
        <div className="title">
          <h1>AirBnb Clone</h1>
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
          <p>
            Well, I'm a full-stack javascript developer, I'm always looking to keep up to date with the market, so I'm currently dedicating efforts to Next.JS and Nest.JS technologies. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam odio, sequi aperiam ex, tenetur adipisci consectetur est aliquid recusandae molestias laboriosam fugit quae, eius id fugiat explicabo! Corrupti autem expedita, at saepe animi eos praesentium dolor, harum odio aliquam pariatur obcaecati tempore perspiciatis numquam nobis iusto sapiente quasi provident nemo totam ab. Blanditiis, accusantium, iste iusto libero corporis ipsum reiciendis aspernatur sint modi expedita inventore quia, odio ea sunt ipsa. Adipisci perferendis officia nesciunt natus ipsum architecto. Minus totam animi maiores reprehenderit et doloremque assumenda soluta eligendi magnam quos.
          </p>

        </div>
      </div>
    </Container>
  )
}
