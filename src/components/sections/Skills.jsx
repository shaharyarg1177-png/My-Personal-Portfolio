import './Section.css'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Skills</p>
          <h2>Key strengths</h2>
        </div>

        <div className="skills-groups">
          <article className="skill-group" data-reveal>
            <h3>Professional skills</h3>
            <div className="professional-skill-groups">
              <div>
                <h4>Essential Core &amp; Soft Skills</h4>
                <div className="tag-list">
                  <span>Communication &amp; Active Listening</span>
                  <span>Emotional Intelligence (EQ)</span>
                  <span>Conflict Resolution &amp; Mediation</span>
                  <span>Adaptability &amp; Resilience</span>
                </div>
              </div>
              <div>
                <h4>Technical &amp; Digital Skills</h4>
                <div className="tag-list">
                  <span>HRIS &amp; Software Proficiency</span>
                  <span>Data Literacy &amp; Analytics</span>
                  <span>Employment Law &amp; Compliance</span>
                  <span>AI &amp; Digital Fluency</span>
                </div>
              </div>
              <div>
                <h4>Strategic &amp; Business Skills</h4>
                <div className="tag-list">
                  <span>Business Acumen</span>
                  <span>Change Management</span>
                  <span>Coaching &amp; Talent Development</span>
                </div>
              </div>
              <div>
                <h4>HR &amp; Operations</h4>
                <div className="tag-list">
                  <span>Customer Service</span>
                  <span>Business Development</span>
                  <span>Sales Support</span>
                  <span>Team Coordination</span>
                  <span>Recruitment Support</span>
                  <span>HR Support</span>
                  <span>Complaint Resolution</span>
                  <span>Operational Support</span>
                </div>
              </div>
            </div>
          </article>
          <article className="skill-group" data-reveal>
            <h3>Tools &amp; working style</h3>
            <div className="tag-list">
              <span>Microsoft Office</span>
              <span>MS Excel</span>
              <span>HRIS Systems</span>
              <span>Applicant Tracking Systems (ATS)</span>
              <span>SAP</span>
              <span>Oracle</span>
              <span>Other HR Software</span>
              <span>Digital Communication</span>
              <span>Professional Writing</span>
              <span>Time Management</span>
              <span>Interpersonal Skills</span>
              <span>Conflict Resolution</span>
              <span>Adaptability</span>
            </div>
          </article>
          <article className="skill-group" data-reveal>
            <h3>Languages</h3>
            <div className="tag-list">
              <span>Urdu</span>
              <span>English</span>
              <span>Punjabi</span>
              <span>Turkish</span>
              <span>French</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skills
