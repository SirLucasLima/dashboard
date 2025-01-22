import { FileCode, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { getConfigOpenFilesTabs } from './config-open-files-tabs'
import { StyledOpenFilesTabs, StyledOpenFileTab } from './styled-tabs'

export const OpenFilesTabs = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const configOpenFilesTabs = getConfigOpenFilesTabs()

  const [openFiles, setOpenFiles] = useState<string[]>([])

  // TODO bug when close tabs
  useEffect(() => {
    const currentPath = location.pathname

    if (configOpenFilesTabs[currentPath]) {
      setOpenFiles(prevFiles => {
        if (!prevFiles.includes(currentPath)) {
          return [...prevFiles, currentPath]
        }
        return prevFiles
      })
    }
  }, [location.pathname, configOpenFilesTabs])

  const handleClose = (index: number) => {
    const currentPath = location.pathname
    const newOpenFiles = [...openFiles]
    const closingFile = newOpenFiles.splice(index, 1)[0]
    setOpenFiles(newOpenFiles)

    if (currentPath === closingFile) {
      if (newOpenFiles.length > 0) {
        const nextIndex = index - 1 >= 0 ? index - 1 : 0
        navigate(newOpenFiles[nextIndex])
      } else {
        navigate('/blank')
      }
    }
  }

  return (
    <StyledOpenFilesTabs>
      {openFiles.map((filePath, index) => {
        const isCurrent = location.pathname === filePath
        const fileDisplayText = configOpenFilesTabs[filePath] ?? filePath

        return (
          <StyledOpenFileTab as={Link} to={filePath} key={filePath} $isCurrent={isCurrent}>
            <FileCode size={16} />
            <span>{fileDisplayText}</span>
            <X
              className="close-button"
              size={16}
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                handleClose(index)
              }}
            />
          </StyledOpenFileTab>
        )
      })}
    </StyledOpenFilesTabs>
  )
}
