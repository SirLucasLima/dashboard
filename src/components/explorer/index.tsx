import { ChevronDown, ChevronRight, FileCode, Folder, FolderOpen } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useExplorerStore } from '@/store/use-explorer-store'

import { Collapsible } from '../collapsible'
import { getExplorerConfig } from './config-explorer'
import { StyledExplorer, StyledExplorerFile, StyledExplorerFolder } from './styled-explorer'

export const Explorer = () => {
  const location = useLocation()
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({})
  const explorerConfig = useMemo(() => getExplorerConfig(), [])
  const prevPathnameRef = useRef<string | null>(null)

  useEffect(() => {
    const currentPath = location.pathname
    const prevPath = prevPathnameRef.current

    if (currentPath !== prevPath) {
      setOpenGroups(prev => {
        const nextState = { ...prev }

        explorerConfig.forEach((group, index) => {
          const hasCurrentPath = group.file.some(({ href }) => href === currentPath)

          if (hasCurrentPath) {
            nextState[index] = true
          }
        })

        return nextState
      })
    }

    prevPathnameRef.current = currentPath
  }, [location.pathname, explorerConfig])

  const handleToggle = (index: number) => {
    setOpenGroups(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const isExplorerOpened = useExplorerStore(state => state.isExplorerOpened)

  return (
    <StyledExplorer $isOpen={isExplorerOpened}>
      {explorerConfig.map(({ folder, file }, index) => {
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
