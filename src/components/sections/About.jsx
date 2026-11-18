import './Section.css'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">About Me</p>
          <h2>People-first professional with a strong service and operations mindset.</h2>
        </div>

        <div className="about-grid">
          <div data-reveal>
            <p>
              I am Shaharyar Jang, a motivated HR and business operations professional with experience across
              customer support, business development, recruitment support, and field operations. I enjoy helping
              organizations improve service quality, strengthen client relationships, and support team performance.
            </p>
          </div>
          <div data-reveal>
            <p>
              My background includes coordinating teams, resolving customer issues, assisting with employee and
              recruitment processes, managing sales opportunities, and improving communication between departments.
              I bring a practical, adaptable approach, clear communication, and a commitment to delivering results
              in fast-paced environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
