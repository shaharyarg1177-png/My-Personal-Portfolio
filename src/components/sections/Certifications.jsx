import './Section.css'

function Certifications() {
  return (
    <section id="certifications" className="section alt-section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Certifications</p>
          <h2>Recognized learning</h2>
        </div>

        <div className="card-grid certification-grid">
          <article className="card" data-reveal>
            <p className="eyebrow">Certnexus · 2024</p>
            <h3>Promote Ethical Use of Data-Driven Technologies</h3>
            <p>Coursework in responsible data use, privacy, fairness, and identifying ethical risks.</p>
          </article>
          <article className="card" data-reveal>
            <p className="eyebrow">Great Learning · 2024</p>
            <h3>Talent Management</h3>
            <p>Learning in talent acquisition, development, retention, engagement, and workforce planning.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Certifications
