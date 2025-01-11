import { CardProfilePic } from '@/components/card-profile-pic/_index'

import { GridItem, HomeStyled } from './home-styled'

export const Home = () => {
  return (
    <HomeStyled>
      <GridItem $colSpan={6} $rowSpan={5}>
        <CardProfilePic />
      </GridItem>
      <GridItem $colSpan={6} $rowSpan={5}>
        <CardProfilePic />
      </GridItem>
      <GridItem $colSpan={6} $rowSpan={5}>
        <CardProfilePic />
      </GridItem>
      <GridItem $colSpan={6} $rowSpan={5}>
        <CardProfilePic />
      </GridItem>
      <GridItem $colSpan={6} $rowSpan={5}>
        <CardProfilePic />
      </GridItem>
    </HomeStyled>
  )
}
