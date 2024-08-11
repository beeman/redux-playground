import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { pages } from './app-router.tsx'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-100 d-flex flex-column">
      <AppHeader />
      <main className="container-fluid py-2 flex-grow-1">{children}</main>
      <AppFooter />
    </div>
  )
}

function AppHeader() {
  const { pathname } = useLocation()

  return (
    <header>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" replace className="navbar-brand">
            Redux Playground
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              {pages.map(({ path, label }) => (
                <li className="nav-item" key={path}>
                  <Link key={path} to={path} className={`nav-link ${pathname === path ? 'active' : ''}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

function AppFooter() {
  return <footer className="text-center bg-body-tertiary py-1">❤️</footer>
}
