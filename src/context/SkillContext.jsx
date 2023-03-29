import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

export const SkillContext = createContext()
export const SkillContextProvider = ({ children }) => {
  const [ skill, setSkill ] = useState(JSON.parse(localStorage.getItem("skill")) || false)

  const toggle = () => {
    setSkill(!skill)
  }

  useEffect(() => {
    localStorage.setItem("skill", skill)
  }, [skill])

  return(
    <SkillContext.Provider value={{skill, toggle}}>
      {children}
    </SkillContext.Provider>
  )
}