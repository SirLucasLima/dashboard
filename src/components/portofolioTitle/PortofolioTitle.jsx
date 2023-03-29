import { Container } from "./styles"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";

export function PortofolioTitle({title, ...rest}){
  const { skill, toggle } = useContext(SkillContext)

  return(
    <Container>
      <div className="title">
        <i className="ri-arrow-left-s-line" onClick={toggle}/>
        <h1>{!skill ? "Dev Portofolio" : "Ui Portofolio"}</h1>
        <i className="ri-arrow-right-s-line" onClick={toggle}/>
      </div>
      <div className="input">
       <i className="ri-filter-2-line" />
        <input {...rest} />
      </div>
    </Container>
  )
}
