import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

export const SearchContext = createContext()
export const SearchContextProvider = ({ children }) => {
  const [ search, setSearch ] = useState('')

  return(
    <SkillContext.Provider value={{search, setSearch}}>
      {children}
    </SkillContext.Provider>
  )
}