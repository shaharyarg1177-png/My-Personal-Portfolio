import './Section.css'

function Projects() {
  return (
    <section id="projects" className="section alt-section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Projects</p>
          <h2>Research and professional work</h2>
        </div>

        <div className="card-grid">
          <article className="card" data-reveal>
            <h3>Knowledge Management Strategies in Telecom</h3>
            <p>
              Research study on how telecommunication companies, including Zong,
              implemented knowledge management strategies during the COVID-19 pandemic.
            </p>
          </article>
          <article className="card" data-reveal>
            <h3>Quest for Equity</h3>
            <p>
              Research exploring fairness and bias in performance management systems,
              with a focus on inclusion and equity in modern workplaces.
            </p>
          </article>
          <article className="card" data-reveal>
            <h3>Employee Performance Evaluation</h3>
            <p>
              Comparative analysis of behavioral and results-driven approaches used
              to evaluate employee performance in contemporary workplaces.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
