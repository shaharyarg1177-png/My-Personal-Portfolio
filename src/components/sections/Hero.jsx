import './Section.css'
import heroPortrait from '../../assets/portfolio/photo-3.jpg'

function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-layout">
        <div className="hero-copy" data-reveal>
          <p className="hero-intro">Hello, I&apos;m</p>
          <h1>Shaharyar<br />Jang</h1>
          <p className="hero-title">HR &amp; Business Operations Professional</p>
          <p className="lead">
            Building strong customer experiences, supporting teams, and creating efficient business operations with a people-first mindset.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-btn">
              Contact Me
            </a>
            <a href="#projects" className="secondary-btn">
              View My Work
            </a>
          </div>

          <div className="hero-stats" aria-label="Professional summary">
            <div className="stat-block">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-icons" aria-label="Profile highlights">
              <span>★</span>
              <span>✦</span>
              <span>◉</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="portrait-frame">
            <img src={heroPortrait} alt="Shaharyar Jang portrait" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
