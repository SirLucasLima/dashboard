import { StyledHeader } from './styled-header'

export const Header = () => {
  // const { title, tabs, contact } = getHeaderConfig()
  return (
    <StyledHeader>
      <div className="traffic-light-wrapper">
        <button type="button" className="red-traffic-light" />
        <button type="button" className="yellow-traffic-light" />
        <button type="button" className="green-traffic-light" />
      </div>
      <span>dev-lucas-lima - Dev Studio Code</span>
      <div className="empty-space">&nbsp;</div>
    </StyledHeader>
  )
}
