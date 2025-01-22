import { ChevronDown, ChevronRight, FileCode, Folder, FolderOpen } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useExplorerStore } from '@/store/use-explorer-store'

import { Collapsible } from '../collapsible'
import { getConfigExplorer } from './config-explorer'
import { StyledExplorer, StyledExplorerFile, StyledExplorerFolder } from './styled-explorer'

export const Explorer = () => {
  const location = useLocation()
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({})
  const configExplorer = useMemo(() => getConfigExplorer(), [])
  const setCurrentPageName = useExplorerStore(state => state.setCurrentPageName)

  // TODO onClick must not close non current folder
  useEffect(() => {
    const currentPath = location.pathname
    let currentPageText = ''
    const nextState: Record<number, boolean> = {}

    configExplorer.forEach((group, index) => {
      const hasCurrentPath = group.file.some(({ href, text }) => {
        if (href === currentPath) {
          currentPageText = text
          return true
        }
        return false
      })
      if (hasCurrentPath) {
        nextState[index] = true
      }
    })

    setOpenGroups(nextState)
    setCurrentPageName(currentPageText)
  }, [location.pathname, configExplorer, setCurrentPageName])

  const handleToggle = (index: number) => {
    setOpenGroups(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const isExplorerOpened = useExplorerStore(state => state.isExplorerOpened)

  return (
    <StyledExplorer $isExplorerOpened={isExplorerOpened}>
      {configExplorer.map(({ folder, file }, index) => {
        const isOpen = !!openGroups[index]

        return (
          <nav key={index}>
            <StyledExplorerFolder onClick={() => handleToggle(index)}>
              {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              {isOpen ? <FolderOpen size={16} /> : <Folder size={16} />}
              <span>{folder.text}</span>
            </StyledExplorerFolder>

            <Collapsible open={isOpen}>
              {file.map(({ text, href }, fileIndex) => (
                <StyledExplorerFile
                  as={Link}
                  to={href}
                  $isCurrent={location.pathname === href}
                  key={fileIndex}
                >
                  <FileCode size={16} />
                  <span>{text}</span>
                </StyledExplorerFile>
              ))}
            </Collapsible>
          </nav>
        )
      })}
    </StyledExplorer>
  )
}
