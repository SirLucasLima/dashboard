import { SideBar } from '../side-bar/_index'
import {
  AppContainersStyled,
  ContentContainerStyled,
  SideBarContainerStyled,
} from './app-container-styled'
import type { AppContainersProps } from './app-container-types'

export const AppContainers = ({ children }: AppContainersProps) => {
  return (
    <AppContainersStyled>
      <SideBarContainerStyled>
        <SideBar />
      </SideBarContainerStyled>
      <ContentContainerStyled>{children}</ContentContainerStyled>
    </AppContainersStyled>
  )
}
