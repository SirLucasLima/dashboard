import { Container } from "./styles"
import { Skill } from "./skill/Skill"

import DEV from "../../data/DevSkills.json"
import UI from "../../data/UiSkills.json"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";

export function Skills(){
    const { skill } = useContext(SkillContext)
    const  mapping = (skill ? UI : DEV)
    
  return(
    <Container>
      {mapping?.map((item, index) => (
        <Skill 
          key={index}
          img={item.img}
          title={item.title}
        />
      ))}
    </Container>
  )
}
