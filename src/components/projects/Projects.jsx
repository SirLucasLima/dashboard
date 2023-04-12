import { Container } from "./styles"
import { Project } from "./project/Project";

import { UiProjects } from "../../data/UiProjects"
import { DevProjects } from "../../data/DevProjects"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { SearchContext } from "../../context/SearchContext";

export function Projects(){
  const { skill } = useContext(SkillContext)
  const  mapping = (skill ? UiProjects : DevProjects)
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
          <Project 
            key={index}
            backend={item.links.backend}
            frontend={item.links.frontend}
            deploy={item.links.deploy}
            behance={item.links.behance}
            title={item.title}
            description={item.description}
            techs={item.techs.join(", ")}
          />
      ))}
    </Container>
  )
}
