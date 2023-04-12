import { Container } from "./styles"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { SearchContext } from "../../context/SearchContext";
import { useState } from "react";

export function ProjectsInput({...rest}){
  //handle togle between UI and DEV
  const { skill, toggle } = useContext(SkillContext)
  const { setSearch } = useContext(SearchContext)

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
       <div className="title">
          <select value={selected} onChange={handleChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      <div className="input">
       <i className="ri-filter-2-line" />
        <input {...rest} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </Container>
  )
}
