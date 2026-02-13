import * as React from "react"

export default function Layout({ title = "Triggerflux", children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div>
          <p className="site-brand">Ignite chaos. Embrace motion. Break the silence.</p>
          <h1>{title}</h1>
        </div>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">© {new Date().getFullYear()} Triggerflux</footer>
    </div>
  )
}
