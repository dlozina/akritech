import content from '../data/content.json';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Arrow = () => <span aria-hidden="true">↗</span>;

const projectDiagrams = [
  {
    image: 'workflow',
    description:
      'Workflow diagram: a call passes to a waiting timer and then review, with a recovery path back to the waiting stage.',
  },
  {
    image: 'voice',
    description:
      'Voice diagram: an audio waveform and a server platform exchange signals in both directions.',
  },
  {
    image: 'integration',
    description:
      'Integration diagram: an event passes through an approval gate before delivery.',
  },
  {
    image: 'platform',
    description:
      'Platform diagram: build, run, and observe stages form a pipeline, with monitoring feedback returning to the build stage.',
  },
];

const Base = () => (
  <>
    <Meta
      title={AppConfig.title}
      description={AppConfig.description}
      canonical="https://www.akritech.eu/"
    />
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <header className="site-header wrap">
      <a className="brand-link" href="#" aria-label="Akritech home">
        <Logo />
      </a>
      <nav aria-label="Main navigation">
        {content.navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
            {item.label === 'Contact' && <Arrow />}
          </a>
        ))}
      </nav>
    </header>
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pixel-dot" /> {content.hero.eyebrow}
          </p>
          <h1 id="hero-title">
            <span>Complex systems.</span> <span>Practical thinking.</span>{' '}
            <span className="hero-emphasis">Working software.</span>
          </h1>
          <p className="hero-description">{content.hero.description}</p>
          <div className="hero-actions">
            <a className="button" href="#contact">
              Let’s talk <Arrow />
            </a>
            <a className="text-link" href="#work">
              Explore the work <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="location">
            <span aria-hidden="true">⌖</span> {content.hero.location}
          </p>
        </div>
        <figure className="hero-art">
          <img
            src="/assets/images/coastal-workshop.webp"
            alt="Game-inspired pixel art of a coastal engineering studio at dusk, with glowing computer screens overlooking the sea and distant islands."
            width="1254"
            height="1254"
          />
          <figcaption>
            <span>The workshop, after hours.</span>
            <span aria-hidden="true">01 / 01</span>
          </figcaption>
        </figure>
      </section>
      <div className="expertise-strip">
        <div className="wrap">
          <span>Architecture</span>
          <b aria-hidden="true">+</b>
          <span>Application engineering</span>
          <b aria-hidden="true">+</b>
          <span>Conversational AI</span>
          <b aria-hidden="true">+</b>
          <span>Production ownership</span>
        </div>
      </div>
      <section id="work" className="section wrap" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="work-title">
              Built to do
              <br />
              the real work.
            </h2>
          </div>
          <p>{content.work.introduction}</p>
        </div>
        <div className="work-grid">
          {content.work.projects.map((project, index) => (
            <article className="project" key={project.id}>
              <div className="project-visual">
                <img
                  src={`/assets/images/diagram-${projectDiagrams[index]?.image}.webp`}
                  alt={projectDiagrams[index]?.description}
                  width="1672"
                  height="941"
                  loading="lazy"
                  decoding="async"
                />
                <div className="visual-caption" aria-hidden="true">
                  <span className="project-number">0{index + 1}</span>
                  <span className="visual-label">
                    {
                      [
                        'CALL → WAIT → REVIEW',
                        'VOICE ↔ PLATFORM',
                        'EVENT → APPROVAL → DELIVERY',
                        'BUILD → RUN → OBSERVE',
                      ][index]
                    }
                  </span>
                </div>
              </div>
              <div className="project-copy">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-outcome">
                  <p className="eyebrow">The outcome</p>
                  <p>{project.result}</p>
                </div>
                <ul className="tags" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        id="services"
        className="services-band"
        aria-labelledby="services-title"
      >
        <div className="wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / How I can help</p>
              <h2 id="services-title">
                A thinking partner.
                <br />A hands-on engineer.
              </h2>
            </div>
            <p>{content.services.introduction}</p>
          </div>
          <div className="service-list">
            {content.services.items.map((service, index) => (
              <div className="service" key={service.title}>
                <span className="service-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="engineering-note">
            <span aria-hidden="true">[ + ]</span>
            <p>
              <strong>{content.engineering.title}</strong> Consistent state
              across services. Clear access boundaries. Recovery paths and
              observability. These are part of the implementation, from the
              start.
            </p>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="about section wrap"
        aria-labelledby="about-title"
      >
        <div className="about-intro">
          <p className="eyebrow">03 / The person behind the code</p>
          <h2 id="about-title">
            Hi, I’m Dino<span className="blue">.</span>
          </h2>
          <p className="about-lead">
            From machines that move
            <br />
            to systems that talk.
          </p>
          <div
            className="journey"
            aria-label="Career focus: industrial automation, developer tooling, cloud platforms, conversational AI"
          >
            <span>Industrial automation</span>
            <span>Developer tooling</span>
            <span>Cloud platforms</span>
            <span>Conversational AI</span>
          </div>
        </div>
        <div className="about-copy">
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="eyebrow stack-label">Tools I work with</p>
          <ul className="tags">
            {content.about.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="text-link" href="https://github.com/dlozina">
            Find me on GitHub <Arrow />
          </a>
        </div>
      </section>
      <section
        id="contact"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <div className="wrap contact-inner">
          <div>
            <p className="eyebrow">04 / Let’s build something useful</p>
            <h2 id="contact-title">
              What are you
              <br />
              <span>working on?</span>
            </h2>
            <p>{content.contact.description}</p>
          </div>
          <a className="contact-link" href={`mailto:${content.contact.email}`}>
            <span>
              {content.contact.email} <Arrow />
            </span>
          </a>
        </div>
      </section>
    </main>
    <div className="footer-horizon" aria-hidden="true">
      <img
        src="/assets/images/coastal-horizon.webp"
        alt=""
        width="2172"
        height="724"
        loading="lazy"
        decoding="async"
      />
    </div>
    <footer className="site-footer wrap">
      <a className="brand-link" href="#" aria-label="Akritech home">
        <Logo />
      </a>
      <p>
        © {new Date().getFullYear()} Akritech · Built with care, block by block.
      </p>
      <div>
        <a href="https://github.com/dlozina">
          GitHub <Arrow />
        </a>
        <a href="https://www.linkedin.com/in/dino-lozina-6a049779/">
          LinkedIn <Arrow />
        </a>
      </div>
    </footer>
  </>
);

export { Base };
