import { socialLinksConfig } from '@/config/social-links'

import { Button } from '../button/_index'
import { Card } from '../card/_index'
import { CardSocialLinksStyled } from './card-social-links-styled'

export const CardSocialLinks = () => {
  return (
    <Card variant="secondary" overflow="hidden" padding={false}>
      <CardSocialLinksStyled>
        {socialLinksConfig.map(({ href, variant, hover, icon: Icon }, index) => (
          <Button
            key={index}
            variant={variant}
            hover={hover}
            href={href}
            target="_blank"
            icon={Icon}
          />
        ))}
      </CardSocialLinksStyled>
    </Card>
  )
}
