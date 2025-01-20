import { HeaderStyled } from './header-styled'

export const Header = () => {
  // const { title, tabs, contact } = getHeaderConfig()
  return (
    <HeaderStyled>
      <div className="traffic-light-wrapper">
        <button type="button" className="red-traffic-light" />
        <button type="button" className="yellow-traffic-light" />
        <button type="button" className="green-traffic-light" />
      </div>
      <span>fala-dev</span>
      <div className="w-14">&nbsp;</div>
    </HeaderStyled>
  )
}
