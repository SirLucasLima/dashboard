import { ChevronDown, FileCode, Folder } from 'lucide-react'
import { useState } from 'react'

import { sideBarConfig } from '@/config/side-bar-config'

import { Collapsible } from '../collapsible/_index'
import { Text } from '../text/_index'
import { SideBarGroupStyled, SideBarItemStyled, SideBarStyled } from './side-bar-styled'

export const SideBar = () => {
  const [showFiles, setShowFiles] = useState(false)
  return (
    <SideBarStyled>
      {sideBarConfig.map(({ folder, file }, index) => (
        <SideBarGroupStyled key={index}>
          <SideBarItemStyled>
            <Text
              as="p"
              variant="list"
              size="md"
              prependIcon={<Folder />}
              appendIcon={<ChevronDown />}
              children={folder.text}
              fullWidth
              onClick={() => setShowFiles(!showFiles)}
            />
          </SideBarItemStyled>
          {file.map(({ text, href }, index) => (
            <Collapsible open={showFiles} key={index}>
              <SideBarItemStyled $isFile={true}>
                <Text
                  as="a"
                  variant="list"
                  size="md"
                  href={href}
                  prependIcon={<FileCode />}
                  children={text}
                />
              </SideBarItemStyled>
            </Collapsible>
          ))}
        </SideBarGroupStyled>
      ))}
    </SideBarStyled>
  )
}
