import { bottomConfig } from '@/config/bottom-config'

import { Text } from '../text/_index'
import {
  BottomStyled,
  CurriculumContainerStyled,
  TabsListContainerStyled,
  TitleContainerStyled,
} from './bottom-styled'

export const Bottom = () => {
  return bottomConfig.map((config, index) => (
    <BottomStyled key={index}>
      <TitleContainerStyled>
        <Text as="a" href={config.title.href} variant="link" size="md">
          {config.title.text}
        </Text>
      </TitleContainerStyled>
      <TabsListContainerStyled>
        {config.tabs.map((tab, index) => (
          <Text key={index} as="li" href={tab.href} variant="link" size="md">
            <tab.icon />
          </Text>
        ))}
      </TabsListContainerStyled>
      <CurriculumContainerStyled>
        <Text key={index} as="a" variant="link" size="md">
          {config.language.text + ' '}
          <config.language.icon />
        </Text>
      </CurriculumContainerStyled>
    </BottomStyled>
  ))
}
