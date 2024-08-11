import { ReactNode } from 'react'

export function CoreUiPage({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="container mt-2 gap-y-2">
      <div className="d-flex flex-column gap-2">
        {title ? <h1>{title}</h1> : null}
        {children}
      </div>
    </div>
  )
}
