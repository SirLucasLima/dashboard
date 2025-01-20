import { ChevronDown, ChevronUp, FileCode, Folder, FolderOpen } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { getSideBarConfig } from '@/config/side-bar-config'

import { Collapsible } from '../collapsible/_index'
import { Text } from '../text/_index'
import { SideBarGroupStyled, SideBarItemStyled, SideBarStyled } from './side-bar-styled'

export const SideBar = () => {
  const location = useLocation()
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({})
  const sideBarConfig = useMemo(() => getSideBarConfig(), [])
  const prevPathnameRef = useRef<string | null>(null)

  useEffect(() => {
    const currentPath = location.pathname
    const prevPath = prevPathnameRef.current

    if (currentPath !== prevPath) {
      setOpenGroups(prev => {
        const nextState = { ...prev }

        sideBarConfig.forEach((group, index) => {
          const hasCurrentPath = group.file.some(({ href }) => href === currentPath)

          if (hasCurrentPath) {
            nextState[index] = true
          }
        })

        return nextState
      })
    }

    prevPathnameRef.current = currentPath
  }, [location.pathname, sideBarConfig])

  const handleToggle = (index: number) => {
    setOpenGroups(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <SideBarStyled>
      {sideBarConfig.map(({ folder, file }, index) => {
        const isOpen = !!openGroups[index]

        return (
          <SideBarGroupStyled key={index}>
            <SideBarItemStyled>
              <Text
                variant="list"
                prependIcon={isOpen ? <FolderOpen /> : <Folder />}
                appendIcon={isOpen ? <ChevronUp /> : <ChevronDown />}
                fullWidth
                onClick={() => handleToggle(index)}
                children={folder.text}
              />
            </SideBarItemStyled>

            <Collapsible open={isOpen}>
              {file.map(({ text, href }, fileIndex) => (
                <SideBarItemStyled $isFile $isCurrent={location.pathname === href} key={fileIndex}>
                  <Link to={href}>
                    <Text variant="list" prependIcon={<FileCode />} children={text} />
                  </Link>
                </SideBarItemStyled>
              ))}
            </Collapsible>
          </SideBarGroupStyled>
        )
      })}
    </SideBarStyled>
  )
}
