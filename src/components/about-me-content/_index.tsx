import React from 'react'

import { aboutMeConfig } from '@/config/about-me-config'

import { NumberingLines } from '../numbering-lines/_index'
import { Text } from '../text/_index'
import { AboutMeContentStyled, AboutMeLayoutStyled } from './about-me-content-styled'

export const AboutMeContent = () => {
  return (
    <AboutMeLayoutStyled>
      <NumberingLines />
      <AboutMeContentStyled>
        <Text as="h1" variant="subtitle">
          {aboutMeConfig.header}
        </Text>
        {aboutMeConfig.sections.map((section, idx) => (
          <React.Fragment key={idx}>
            <Text variant="variable">{section.variable}</Text>
            {section.content && <Text variant="text">{section.content}</Text>}
            {section.items &&
              section.items.map((item, jdx) => (
                <Text key={jdx} variant="tag">
                  {item.tag}
                  <Text as="span" variant="text">
                    {item.text}
                  </Text>
                </Text>
              ))}
            <Text> </Text>
          </React.Fragment>
        ))}
      </AboutMeContentStyled>
    </AboutMeLayoutStyled>
  )
}
