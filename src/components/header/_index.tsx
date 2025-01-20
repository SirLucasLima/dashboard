import { Link } from 'react-router-dom'

import { getHeaderConfig } from '../../config/header-config'
import { Text } from '../text/_index'
import {
  ContactContainerStyled,
  HeaderStyled,
  TabsListContainerStyled,
  TitleContainerStyled,
} from './header-styled'

export const Header = () => {
  const { title, tabs, contact } = getHeaderConfig()
  return (
    <HeaderStyled>
      <TitleContainerStyled>
        <Link to={title.href}>
          <Text variant="subtitle" children={title.text} />
        </Link>
      </TitleContainerStyled>
      <TabsListContainerStyled>
        {tabs.map((tab, index) => (
          <li key={index}>
            <Link to={tab.href}>
              <Text variant="list" children={tab.text} />
            </Link>
          </li>
        ))}
      </TabsListContainerStyled>
      <ContactContainerStyled>
        <Link to={contact.href}>
          <Text variant="link" children={contact.text} />
        </Link>
      </ContactContainerStyled>
    </HeaderStyled>
  )
}
