import { User } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { socialLinks } from './config-social-links'
import { StyledMenuButton, StyledSocialLink, StyledSocialLinks } from './styled-side-menu'

export function SocialLinksButton() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      const target = event.target as Node
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <>
      <StyledMenuButton ref={buttonRef} $isActive={isOpen} onClick={() => setIsOpen(prev => !prev)}>
        <User strokeWidth={1.5} size={28} />
      </StyledMenuButton>

      <StyledSocialLinks ref={menuRef} $isOpen={isOpen}>
        {socialLinks.map(socialItem => (
          <StyledSocialLink
            key={socialItem.href}
            href={socialItem.href}
            target="_blank"
            rel="noreferrer"
          >
            <socialItem.icon size={socialItem.size} />
            {socialItem.name}
          </StyledSocialLink>
        ))}
      </StyledSocialLinks>
    </>
  )
}
