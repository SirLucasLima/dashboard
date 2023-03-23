import { Container } from "./styles"

export function PortofolioTitle({title, ...rest}){
  return(
    <Container>
      <h1>{title}</h1>
      <div className="input">
       <i className="ri-filter-2-line" />
        <input {...rest} />
      </div>
    </Container>
  )
}
