import profilePic from '@/assets/profile-pic.webp'

import { Card } from '../card/_index'
import { ProfilePicStyled } from './card-profile-pic-styled'

export const CardProfilePic = () => {
  return (
    <Card variant="secondary" overflow="hidden" padding={false}>
      <ProfilePicStyled src={profilePic} alt="imagem de perfil" />
    </Card>
  )
}
