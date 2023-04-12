import { Container } from "./styles"
import 'remixicon/fonts/remixicon.css'

import { HomeProject } from "./homeProject/HomeProject"
import { UiProjects } from "../../data/UiProjects"
import { DevProjects } from "../../data/DevProjects"

import { useContext, useState } from "react";
import { SkillContext } from "../../context/SkillContext";
import { Link } from "react-router-dom"


export function HomeProjects(){
  //handle togle between UI and DEV
  const { skill, toggle } = useContext(SkillContext)
  const  mapping = (skill ? UiProjects : DevProjects)

  //select handle togle
  const options = [
    {value: 'DevProjects', text: '💻 Dev Projects '},
    {value: 'UiProjects', text: '🧑🏽‍🎨 UI Projects '}
  ]
  const [selected, setSelected] = useState(options[0].value)
  const handleChange = event => {
    setSelected(event.target.value)
    toggle
  }

  return(
    <Container>
      <div className="header">
        <div className="title">
          <select value={selected} onChange={handleChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                <h1>
                  {option.text}
                </h1>
              </option>
            ))}
          </select>
        </div>
        <a href="/portofolio">
          <Link to="/portofolio">
            <span>See All</span>
          </Link>
        </a>
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
