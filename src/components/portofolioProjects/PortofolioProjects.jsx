import { Container } from "./styles"
import { PortofolioProject } from "./portofolioProject/PortofolioProject"

import UI from "../../data/UiProjects"
import DEV from "../../data/DevProjects"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { SearchContext } from "../../context/SearchContext";

export function PortofolioProjects(){
  const { skill } = useContext(SkillContext)
  const  mapping = (skill ? UI : DEV)
  const { search } = useContext(SearchContext)

  return(
    <Container>
      {mapping
        .filter((item) => {
        return search.toLowerCase() === '' 
          ? item 
          : item.title.toLowerCase().includes(search) || item.description.toLowerCase().includes(search) 
      })
        .map((item, index) => (
          <PortofolioProject 
            key={index}
            title={item.title}
            description={item.description}
            backend={item.links.backend}
            frontend={item.links.frontend}
            deploy={item.links.deploy}
            behance={item.links.behance}
          />
      ))}
    </Container>
  )
}
