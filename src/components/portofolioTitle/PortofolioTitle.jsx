import { Container } from "./styles"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { SearchContext } from "../../context/SearchContext";

export function PortofolioTitle(){
  const { skill, toggle } = useContext(SkillContext)
  const { setSearch } = useContext(SearchContext)

  return(
    <Container>
      <div className="title">
        <i className="ri-arrow-left-s-line" onClick={toggle}/>
        <h1>{!skill ? "Dev Portofolio" : "Ui Portofolio"}</h1>
        <i className="ri-arrow-right-s-line" onClick={toggle}/>
      </div>
      <div className="input">
       <i className="ri-filter-2-line" />
        <input onChange={(e) => setSearch(e.target.value)} />
      </div>
    </Container>
  )
}
