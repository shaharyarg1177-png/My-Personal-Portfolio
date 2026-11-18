import './Section.css'

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Education</p>
          <h2>Academic background</h2>
        </div>

        <div className="education-grid">
          <article className="info-block" data-reveal>
            <p className="eyebrow">2026 – 2029</p>
            <h3>LLB</h3>
            <p>University of London</p>
          </article>
          <article className="info-block" data-reveal>
            <p className="eyebrow">2019 – 2023</p>
            <h3>MBA (HRM)</h3>
            <p>Bahauddin Zakariya University, Multan</p>
          </article>
          <article className="info-block" data-reveal>
            <p className="eyebrow">2016 – 2018</p>
            <h3>BS IT Management</h3>
            <p>University of Central Punjab (UCP), Lahore</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education
