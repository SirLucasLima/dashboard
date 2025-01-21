import { Github } from 'lucide-react'

import { globalLinksConfig } from '@/config/global-links-config'

import { StyledFooter } from './styled-footer'

export const Footer = () => {
  return (
    <StyledFooter>
      <a href={globalLinksConfig.projectGitHub} target="_blank" rel="noreferrer">
        <Github size={12} />
        Github
      </a>
    </StyledFooter>
  )
}
