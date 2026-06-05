import { useState } from "react";
import "./App.css";

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

const EXPERIENCE = [
  {
    role: "Football Analytics Intern",
    org: "Florida Gators Football Program",
    period: "Aug 2025 – Present",
    logo: "/gators-logo.png",
    bullets: [
      "Write Advance Reports actively used by coaching staff in game strategy",
      "Build and design processes to evaluate transfer portal targets using Teamworks-Telemetry Tracking Data and PFF B2B Data",
      "Lead vendor communications with data providers and manage junior interns",
      "Contribute to contract and NIL conversations alongside football operations leadership",
    ],
  },
  {
    role: "Scouting Intern",
    org: "BLESTO",
    period: "Feb 2025 – Jul 2025",
    logo: "/blesto.png",
    bullets: [
      "Prepared NFL-style preliminary scouting reports on 2026 NFL Draft prospects",
      "Compiled statistics, biographies, and background using LexisNexis",
    ],
  },
];

const PROJECTS = [
  {
    title: "Transfer Portal Database Automation",
    tags: ["Teamworks API","Google Sheets API","Python","Process Development"],
    desc: "Built a Transfer Portal Database using Teamworks Transfer Portal Database to track all transfer portal players, provide information to scouts and coaches, and sort priorities using analytics grades and scouting reports.",
  },
  {
    title: "Advance Reports",
    tags: ["Python", "Teamworks API","Data Visualization"],
    desc: "Found Actionable Insights from data on opponent trends, tendencies, and weaknesses. Provided coaching staff with digestible data-derived suggestions to influence strategy and decision making. Used and NFL model to provide useful and easy to understand reports with explanatory visualizations.",
  },
  {
    title: "Transfer Portal Snap Count Study and Pipeline",
    tags: ["Python", "Teamworks API","Google Sheets API"],
    desc: "Used snap counts to identify players who are playing at a level that signals they are worth evaluating. Set up and autmated system to create area lists for scouts and auto-populate work lists weekly.",
  },
  {
    title: "Comprehensive Analytics Grade Database and Tracker",
    tags: ["Python", "Statistical Modeling", "Teamworks-Telemetry","Teamworks-Advanced Stats"],
    desc: "Used data provided by Teamworks Advanced Stats models broken down at the play level to recalculate and opponent adjust Advanced Stats. Combined with numerous Gators Football Analytics Metrics to create analytics grades. Tracked grades over the course of the seaon to provide insight into player trends that motivate scout analysis.",
  },
  {
    title: "Athleticism, Track Time, and Physical Trait Studies",
    tags: ["Python", "Teamworks API","Regression","XGBoost","Data Cleaning"],
    desc: "Conducted 10+ studies on athleticim markers to provide insight into which physical traits correlate with Football Performance",
  },
];

const SKILLS = [
  { category: "Programming Languages", items: ["Python", "R"] },
  { category: "Data & Services", items: ["Teamworks API", "Teamworks-Telemetry", "LexisNexis", "Google Sheets"] },
  { category: "Methods", items: ["Regression", "XGBoost", "Machine Learning","Voronoi Analysis", "Player Tracking"] },
  { category: "Football", items: ["Scouting", "Game Planning", "Transfer Portal Eval", "NIL/Contracts"] },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-logo" onClick={() => scrollTo("about")}>JH</span>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {NAV_LINKS.map((l) => (
              <button key={l} onClick={() => scrollTo(l)}>{l}</button>
            ))}
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="hero">
        <div className="hero-inner">
          <div className="hero-tag">Football Analytics & Strategy</div>
          <h1>John Haddock</h1>
          <p className="hero-sub">
            Statistics & Economics · University of Florida Honors Program
          </p>
          <p className="hero-bio">
            I provide a unqiue skillset that blends Football Data Analysis and Strategic Knowledge. I am effective at using these skills to make informed football decisions. I will make an immediate impact, leveraging my years of experience, Statistics (BS) degree, and analytical ability to assist any football program in making important gameday and strategic decisions.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo("Projects")}>View Projects</button>
            <button className="btn-secondary" onClick={() => scrollTo("Contact")}>Get in Touch</button>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">2+</span><span className="stat-label">Years in Football Analytics & Strategy</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">20+</span><span className="stat-label">Analytics Projects</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">DEC 2027</span><span className="stat-label">Graduation</span></div>
          </div>
        </div>
        <div className="hero-bg-text">ANALYTICS</div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="section-inner">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                      {e.logo && (
                        <img src={e.logo} alt={e.org} style={{height:"120px", width:"120px", objectFit:"contain", borderRadius:"6px", border:"1px solid #e2e8f0", padding:"4px", background:"#fff"}} />
                      )}
                      <div>
                        <h3>{e.role}</h3>
                        <span className="timeline-org">{e.org}</span>
                        <div><span className="timeline-period">{e.period}</span></div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-alt">
        <div className="section-inner">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className={`project-card ${activeProject === i ? "active" : ""}`}
                onClick={() => setActiveProject(activeProject === i ? null : i)}
              >
                <h3>{p.title}</h3>
                <div className="tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-inner">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div key={s.category} className="skill-block">
                <h3>{s.category}</h3>
                <ul>
                  {s.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="achievements">
            <h3>Achievements</h3>
            <div className="achievement-list">
              {[
                "Presidential Scholarship – University of Florida",
                "UF Honors Program",
                "3× Varsity Football State Champion",
                "Mu Alpha Theta – National Math Honors Society",
                "National Honor Society",
                "Cum Laude – Shorecrest Preparatory School",
                "Wharton Moneyball Program Alumni",
              ].map((a) => (
                <div key={a} className="achievement-item">
                  <span className="achievement-dot" />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section-alt">
        <div className="section-inner contact-inner">
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-sub">
            I'm always open to conversations about football analytics, strategy, and data science.
          </p>
          <div className="contact-links">
            <a href="mailto:j.haddock@gators.ufl.edu" className="contact-link">
              <span className="contact-icon">✉</span>
              j.haddock@gators.ufl.edu
            </a>
            <a href="https://www.linkedin.com/in/john-haddock-057486265/" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-icon">in</span>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>John Haddock · {new Date().getFullYear()} · Built with React</span>
      </footer>
    </div>
  );
}
