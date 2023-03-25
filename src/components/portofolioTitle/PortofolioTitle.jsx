import { Container } from "./styles"

export function PortofolioTitle({title, ...rest}){
  return(
    <Container>
      <div className="title">
          <i className="ri-arrow-left-s-line" />
          <h1>{title}</h1>
          <i className="ri-arrow-right-s-line" />
      </div>
      <div className="input">
       <i className="ri-filter-2-line" />
        <input {...rest} />
      </div>
    </Container>
  )
}
