import { useState } from "react";
import "./App.css";

const NAV_LINKS = ["About", "Education", "Experience", "Projects", "Skills", "Contact"];

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
      "Compiled statistics, biographies, and background information using LexisNexis",
    ],
  },
];

const PROJECTS = [
  {
    title: "Transfer Portal Database Automation",
    tags: ["Teamworks API", "Google Sheets API", "Python", "Process Development"],
    docs: "open",
    desc: "Built a Transfer Portal Database using Teamworks to track all transfer portal players, provide information to scouts and coaches, and sort priorities using analytics grades and scouting reports.",
  },
  {
    title: "Advance Reports",
    tags: ["Python", "Teamworks API", "Data Visualization"],
    docs: "open",
    desc: "Found actionable insights from data on opponent trends, tendencies, and weaknesses. Provided coaching staff with digestible data-derived suggestions to influence strategy and decision making using an NFL-style reporting model.",
  },
  {
    title: "Transfer Portal Snap Count Study and Pipeline",
    tags: ["Python", "Teamworks API", "Google Sheets API"],
    docs: "limited",
    desc: "Used snap counts to identify players playing at a level that signals they are worth evaluating. Set up and automated a system to create area lists for scouts and auto-populate work lists weekly.",
  },
  {
    title: "Comprehensive Analytics Grade Database and Tracker",
    tags: ["Python", "Statistical Modeling", "Teamworks-Telemetry", "Teamworks-Advanced Stats"],
    docs: "open",
    desc: "Used Teamworks Advanced Stats play-level data to recalculate and opponent-adjust advanced stats. Combined with Gators Football Analytics metrics to create composite grades tracked over the season to surface player trends.",
  },
  {
    title: "Athleticism, Track Time, and Physical Trait Studies",
    tags: ["Python", "Teamworks API", "Regression", "XGBoost", "Data Cleaning"],
    docs: "open",
    desc: "Conducted 10+ studies on athleticism markers to provide insight into which physical traits correlate with football performance.",
  },
];

const SKILLS = [
  { category: "Programming Languages", items: ["Python", "R"] },
  { category: "Data & Services", items: ["Teamworks API", "Teamworks-Telemetry", "PFF", "LexisNexis", "Google Sheets"] },
  { category: "Methods", items: ["Regression", "XGBoost", "Machine Learning", "Voronoi Analysis", "Player Tracking"] },
  { category: "Football", items: ["Scouting", "Game Planning", "Transfer Portal Eval", "NIL/Contracts"] },
];

const ACHIEVEMENTS = [
  "Presidential Scholarship – University of Florida",
  "UF Honors Program",
  "Wharton Moneyball Program Alumni",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* NAV */}
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
            <p className="hero-sub">
              Statistics · Economics Minor · AI Certificate · University of Florida Honors Program
            </p>
          </p>
          <p className="hero-bio">
            I provide a unique skillset that blends football data analysis and strategic knowledge.
            Currently working in the College Personnel Department for Gators Football — building
            analytics pipelines, writing scouting reports used by coaches, and applying player
            tracking to real roster decisions. Available December 2027.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo("Projects")}>View Projects</button>
            <button className="btn-secondary" onClick={() => scrollTo("Contact")}>Get in Touch</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">2+</span>
              <span className="stat-label">Years in Football Analytics</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">20+</span>
              <span className="stat-label">Analytics Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">DEC 2027</span>
              <span className="stat-label">Graduation</span>
            </div>
          </div>
        </div>
        <div className="hero-bg-text">ANALYTICS</div>
      </section>
      {/* EDUCATION */}
      <section id="education" className="section section-alt">
        <div className="section-inner">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "80px", height: "80px", borderRadius: "6px", border: "1px solid #e2e8f0", padding: "4px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src="/gators-logo.png" alt="UF" style={{ height: "70px", width: "70px", objectFit: "contain" }} />
                    </div>
                    <div>
                      <h3>University of Florida</h3>
                      <span className="timeline-org">B.S. Statistics · Economics Minor · AI Certificate</span>
                      <div><span className="timeline-period">Aug 2024 – Dec 2027</span></div>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>Honors Program · Presidential Scholarship</li>
                  <li>Sports Analytics Club</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "80px", height: "80px", borderRadius: "6px", border: "1px solid #e2e8f0", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontWeight: "700", fontSize: "0.7rem", color: "#003087", textAlign: "center", lineHeight: 1.3 }}>SHORE{"\n"}CREST</span>
                    </div>
                    <div>
                      <h3>Shorecrest Preparatory School</h3>
                      <span className="timeline-org">St. Petersburg, FL · Cum Laude</span>
                      <div><span className="timeline-period">Graduated May 2024</span></div>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>35 ACT · 4.55 GPA</li>
                  <li>3× Varsity Football State Champion</li>
                  <li>Mu Alpha Theta · National Honor Society</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      {e.logo && (
                        <img
                          src={e.logo}
                          alt={e.org}
                          style={{ height: "80px", width: "80px", objectFit: "contain", borderRadius: "6px", border: "1px solid #e2e8f0", padding: "4px", background: "#fff" }}
                        />
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
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
            Detailed documentation and source code available upon request.
          </p>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div key={i} className="project-card">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <h3 style={{ margin: 0 }}>{p.title}</h3>
                  {p.docs === "open" && (
                    <span
                      title="Full documentation available upon request"
                      style={{ fontSize: "0.7rem", background: "rgba(34,197,94,0.1)", color: "#16a34a", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "99px", padding: "0.15rem 0.6rem", whiteSpace: "nowrap", flexShrink: 0 }}
                    >
                      ✦ Docs Available
                    </span>
                  )}
                  {p.docs === "limited" && (
                    <span
                      title="Limited documentation due to team agreements"
                      style={{ fontSize: "0.7rem", background: "rgba(249,115,22,0.1)", color: "var(--orange)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: "99px", padding: "0.15rem 0.6rem", whiteSpace: "nowrap", flexShrink: 0 }}
                    >
                      ✦ Limited Docs
                    </span>
                  )}
                </div>
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
              {ACHIEVEMENTS.map((a) => (
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
            <a href="mailto:jdhaddock22@gmail.com" className="contact-link">
              <span className="contact-icon">✉</span>
              <div>
                <div>jdhaddock22@gmail.com</div>
                <div style={{ fontSize: "0.7rem", color: "var(--gray)", marginTop: "2px" }}>Preferred</div>
              </div>
            </a>
            <a href="mailto:j.haddock@gators.ufl.edu" className="contact-link">
              <span className="contact-icon">✉</span>
              <div>
                <div>j.haddock@gators.ufl.edu</div>
                <div style={{ fontSize: "0.7rem", color: "var(--gray)", marginTop: "2px" }}>Strictly UF Related</div>
              </div>
            </a>
            <a href="tel:+19172805672" className="contact-link">
              <span className="contact-icon">☎</span>
              <div>
                <div>+1 (917) 280-5672</div>
                <div style={{ fontSize: "0.7rem", color: "var(--gray)", marginTop: "2px" }}>Phone</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/john-haddock-057486265/" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-icon">in</span>
              <div>
                <div>LinkedIn</div>
                <div style={{ fontSize: "0.7rem", color: "var(--gray)", marginTop: "2px" }}>john-haddock-057486265</div>
              </div>
            </a>
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "2rem" }}>
            References available upon request.
          </p>
        </div>
      </section>

      <footer className="footer">
        <span>John Haddock · {new Date().getFullYear()} · Built with React</span>
      </footer>

    </div>
  );
}