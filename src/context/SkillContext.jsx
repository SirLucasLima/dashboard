import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

export const SkillContext = createContext()
export const SkillContextProvider = ({ children }) => {
  const [ skill, setSkill ] = useState(JSON.parse(localStorage.getItem("Dev")) || false)

  const toggle = () => {
    setDarkMode(!Dev)
  }

  useEffect(() => {
    localStorage.setItem("Dev", skill)
  }, [skill])

  return(
    <SkillContext.Provider value={{skill, toggle}}>
      {children}
    </SkillContext.Provider>
  )
}