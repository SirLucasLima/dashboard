import { Container } from "./styles"
import { HardSkill } from "./hardSkill/HardSkill";

import { DevSkills } from "../../data/DevSkills" 
import { UiSkills } from "../../data/UiSkills"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";

export function HardSkills(){
    const { skill } = useContext(SkillContext)
    const  mapping = (skill ? DevSkills : UiSkills)
    
  return(
    <Container>
      {mapping?.map((item, index) => (
        <HardSkill 
          key={index}
          img={item.img}
          title={item.title}
        />
      ))}
    </Container>
  )
}
