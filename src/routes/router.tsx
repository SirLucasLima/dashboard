import { createBrowserRouter } from 'react-router-dom'

import { appRoutes } from './app-routes'

const routes = [...appRoutes]

export const router = createBrowserRouter(routes)
