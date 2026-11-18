import { useState } from 'react'
import './Layout.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="topbar">
      <div className="container navbar">
        <a href="#home" className="brand" aria-label="Home page">
          Shaharyar Jang
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`nav${menuOpen ? ' nav-open' : ''}`}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" className="mobile-hire" onClick={() => setMenuOpen(false)}>
            Hire Me
          </a>
        </nav>

        <a href="/Shaharyar-Jang-CV.pdf" className="nav-cta" download>
          Download CV
        </a>
      </div>
    </header>
  )
}

export default Navbar
