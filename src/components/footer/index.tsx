import { Github } from 'lucide-react'

import { configLinks } from '@/config/config-links'

import { StyledFooter } from './styled-footer'

export const Footer = () => {
  return (
    <StyledFooter>
      <a href={configLinks.projectGitHub} target="_blank" rel="noreferrer">
        <Github size={12} />
        Github
      </a>
    </StyledFooter>
  )
}
