import { Container } from "./styles"
import { Skill } from "./skill/Skill"

import { DevSkills } from "../../data/DevSkills" 
import { UiSkills } from "../../data/UiSkills"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";

export function Skills(){
    const { skill } = useContext(SkillContext)
    const  mapping = (skill ? UiSkills : DevSkills)
    
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
