import { presentationConfig } from '@/config/presentation-config'

import { Text } from '../text/_index'
import {
  PresentationInfo,
  PresentationInfoItem,
  PresentationName,
  PresentationStyled,
} from './presentation-styled'

export const Presentation = () => {
  return presentationConfig.map((config, index) => (
    <PresentationStyled key={index}>
      <PresentationName>
        <Text as="p" variant="text" size="sm" children={config.presentation.welcome} />
        <Text as="h1" variant="title" size="xl" children={config.presentation.name} />
        <Text as="h2" variant="subtitle" size="lg" children={config.presentation.stack} />
      </PresentationName>
      {config.infos.map((info, index) => (
        <PresentationInfo key={index} href={info.href} target="_blank">
          <Text as="p" variant="comment" size="md" children={info.comment} />
          <PresentationInfoItem>
            <Text as="p" variant="tag" size="md" children={'const'} />
            <Text as="p" variant="variable" size="md" children={info.variable} />
            <Text as="p" variant="text" size="md" children={'= ' + info.value} />
          </PresentationInfoItem>
        </PresentationInfo>
      ))}
    </PresentationStyled>
  ))
}
