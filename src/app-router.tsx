import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { CounterRedux } from './features/counter-redux'
import { CounterState } from './features/counter-state'
import { HomeIndex } from './features/home'
import { TodoRedux } from './features/todo-redux'
import { TodoState } from './features/todo-state'

export interface Page {
  path: string
  label: string
  route: RouteObject
}

export const pages: Page[] = [
  { path: '/home', label: 'Home', route: { element: <HomeIndex /> } },
  { path: '/counter-redux', label: 'Counter Redux', route: { element: <CounterRedux /> } },
  { path: '/counter-state', label: 'Counter State', route: { element: <CounterState /> } },
  { path: '/todo-redux', label: 'Todo Redux', route: { element: <TodoRedux /> } },
  { path: '/todo-state', label: 'Todo State', route: { element: <TodoState /> } },
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
