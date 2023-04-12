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
  const { skill, toggle } = useContext(SkillContext)
  const  mapping = (skill ? DevProjects : UiProjects)

  //select handle togle
  const options = [
    {value: 'DevProjects', text: '🧑🏽‍💻 Dev Projects '},
    {value: 'UiProjects', text: '🧑🏽‍🎨 UI Projects '}
  ]
  const [selected, setSelected] = useState(options[0].value)
  const handleChange = event => {
    setSelected(event.target.value)
    toggle()
  }

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
          <span>See All</span>
        </Link>
      </div>
      <div className="display">
        {mapping?.map((item, index) => (
          <HomeProject 
            key={index}
            img={item.img}
            title={item.title} 
          />
        ))}
      </div>
    </Container>
  )
}
