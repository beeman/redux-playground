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
          <a className="navbar-brand" href="#">
            Redux Playground
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
