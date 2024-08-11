import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { CounterRedux } from './features/counter-redux'
import { CounterState } from './features/counter-state'
import { HomeIndex } from './features/home'

export interface Page {
  path: string
  label: string
  route: RouteObject
}

export const pages: Page[] = [
  { path: '/home', label: 'Home', route: { element: <HomeIndex /> } },
  { path: '/counter-redux', label: 'Counter Redux', route: { element: <CounterRedux /> } },
  { path: '/counter-state', label: 'Counter State', route: { element: <CounterState /> } },
]

export function AppRouter() {
  const routes: RouteObject[] = pages.map(({ path, route }) => ({ path, ...route }))

  return useRoutes([
    // Redirect to the first page
    { index: true, element: <Navigate to={routes[0].path ?? ''} replace /> },
    // Destructure the rest of the routes
    ...routes,
  ])
}
