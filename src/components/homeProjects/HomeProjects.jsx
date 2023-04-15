import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

import { HomeProject } from "./homeProject/HomeProject"
import { DevProjects } from "../../data/DevProjects"
import { UiProjects } from "../../data/UiProjects"

import { useContext, useState } from "react";
import { SkillContext } from "../../context/SkillContext";
import { Link } from "react-router-dom"


export function HomeProjects(){
  //handle togle between UI and DEV
  const { skill, options, selected, handleChange } = useContext(SkillContext)
  const  mapping = (skill ? DevProjects : UiProjects)
 
 
  return(
    <Container>
      <div className="header">
        <div className="title">
          <select value={selected} onChange={handleChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <Link to="/portofolio">
          <span>Veja mais...</span>
        </Link>
      </div>
      <div className="display">
        {mapping?.map((item, index) => (
          <HomeProject 
            key={index}
            img1={item.img1}
            title={item.title} 
          />
        ))}
      </div>
    </Container>
  )
}
