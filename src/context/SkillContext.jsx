import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

export const SkillContext = createContext()
export const SkillContextProvider = ({ children }) => {
  //togle skill map
  const [ skill, setSkill ] = useState(JSON.parse(localStorage.getItem("skill")) || false)

  const toggle = () => {
    setSkill(!skill)
  }

  useEffect(() => {
    localStorage.setItem("skill", skill)
  }, [skill])


  //toggle skill select
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
    <SkillContext.Provider value={{skill, options, selected, setSelected, handleChange}}>
      {children}
    </SkillContext.Provider>
  )
}