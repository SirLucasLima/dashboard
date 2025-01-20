import { Text } from '../text/_index'
import { NumberingLinesStyled } from './numbering-lines'

export const NumberingLines = () => {
  const numbers = Array.from({ length: 40 }, (_, i) => i + 1)

  return (
    <NumberingLinesStyled>
      {numbers.map(number => (
        <Text variant="list" key={number} children={number + ' -'} />
      ))}
    </NumberingLinesStyled>
  )
}
