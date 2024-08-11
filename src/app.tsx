import { Provider } from 'react-redux'
import { AppLayout } from './app-layout.tsx'
import { AppRouter } from './app-router.tsx'
import { store } from './app-store.ts'

export function App() {
  return (
    <Provider store={store}>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </Provider>
  )
}
