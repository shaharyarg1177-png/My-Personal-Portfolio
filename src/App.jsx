import { useEffect } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

function App() {
  useEffect(() => {
    const page = document.querySelector('.portfolio-page')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealItems = page.querySelectorAll('[data-reveal]')
    let observer
    const activationTimers = new Set()

    if (!reduceMotion && 'IntersectionObserver' in window) {
      page.classList.add('motion-ready')
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
      )

      revealItems.forEach((item) => observer.observe(item))
    }

    function showClickFeedback(event) {
      const control = event.target.closest('a, button')
      if (!control || !page.contains(control)) return

      control.classList.add('is-activated')

      const timer = window.setTimeout(() => {
        control.classList.remove('is-activated')
        activationTimers.delete(timer)
      }, 450)
      activationTimers.add(timer)
    }

    page.addEventListener('click', showClickFeedback)

    return () => {
      observer?.disconnect()
      page.removeEventListener('click', showClickFeedback)
      activationTimers.forEach((timer) => window.clearTimeout(timer))
      page.classList.remove('motion-ready')
    }
  }, [])

  return (
    <div className="portfolio-page">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
