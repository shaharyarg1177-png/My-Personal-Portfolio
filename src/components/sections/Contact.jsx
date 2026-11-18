import './Section.css'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shaharyar-jang-sharri-999523187?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    value: 'shaharyar-jang-sharri'
  },
  {
    label: 'Email',
    href: 'mailto:Shaharyarg1177@gmail.com',
    value: 'Shaharyarg1177@gmail.com'
  },
  {
    label: 'Phone',
    href: 'tel:+923137738635',
    value: '+92 313 7738635'
  },
  {
    label: 'X',
    href: 'https://x.com/shaharyar_jang',
    value: '@shaharyar_jang'
  },
  {
    label: 'Snapchat',
    href: 'https://www.snapchat.com/add/shaharyarg1177?share_id=WOkKoYXoIBM&locale=en-US',
    value: '@shaharyarg1177'
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/19apURHjA9/',
    value: 'Facebook profile'
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/shaharyarkhan23',
    value: 'behance.net/shaharyarkhan23'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/shaharyarg1177/',
    value: '@shaharyarg1177'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/shaharyarg1177-png',
    value: 'github.com/shaharyarg1177-png'
  }
]

function Contact() {
  const openEmailComposer = (prefilledMessage = '') => {
    const subject = encodeURIComponent('Portfolio inquiry')
    const body = encodeURIComponent(
      prefilledMessage || 'Hello Shaharyar,\n\nI would like to connect with you regarding an opportunity.\n\nBest regards,\n'
    )

    window.location.href = `mailto:Shaharyarg1177@gmail.com?subject=${subject}&body=${body}`
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = (form.get('name') || '').toString().trim()
    const email = (form.get('email') || '').toString().trim()
    const message = (form.get('message') || '').toString().trim()

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    window.location.href = `mailto:Shaharyarg1177@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s connect and explore opportunities.</h2>
        </div>

        <div className="contact-layout" data-reveal>
          <div className="contact-card">
            <p className="eyebrow">Based in Lahore, Pakistan</p>
            <h3>Open to the right opportunity.</h3>
            <p>
              Interested in roles across HR, customer support, sales support, business development,
              and operations. I bring a people-first mindset and a practical approach to delivering
              consistent service and team performance.
            </p>

            <div className="social-grid" aria-label="Social media links">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="social-link">
                  <span className="social-label">{item.label}</span>
                  <span className="social-value">{item.value}</span>
                </a>
              ))}
            </div>

            <div className="hero-actions">
              <button
                type="button"
                className="primary-btn"
                onClick={() => openEmailComposer('Hello Shaharyar,\n\nI would like to connect with you regarding an opportunity.\n\nBest regards,\n')}
              >
                Email Me
              </button>
              <a href="https://www.linkedin.com/in/shaharyar-jang-sharri-999523187?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="secondary-btn" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a message</h3>

            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>

            <label>
              <span>Message</span>
              <textarea name="message" rows="5" placeholder="Write your message here..." required />
            </label>

            <button type="submit" className="primary-btn contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
