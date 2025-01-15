import { Card } from '../card/_index'
import { CardInfosStyled, InfosItem } from './card-infos-styled'

export const CardInfos = () => {
  return (
    <Card variant="secondary" overflow="hidden" padding={false}>
      <CardInfosStyled>
        <InfosItem>
          <span>Nome:</span>
          <h1>Dev Lucas Lima </h1>
        </InfosItem>
        <InfosItem>
          <span>Nome:</span>
          <h1>Lucas F. de Lima</h1>
        </InfosItem>
        <InfosItem>
          <span>Nome:</span>
          <h1>Lucas F. de Lima</h1>
        </InfosItem>
      </CardInfosStyled>
    </Card>
  )
}
