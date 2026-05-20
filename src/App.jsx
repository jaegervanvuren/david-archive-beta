import { useMemo, useState } from "react";
import { brand, portals, tools, roadmap } from "./data/siteData.js";

const iconMap = {
  salvador: "✦",
  learning: "⌁",
  priests: "◇",
  pedagogy: "✎",
  vault: "▣",
};

function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top">
        <span className="brand-mark">D</span>
        <span>
          <strong>{brand.acronym}</strong>
          <small>{brand.fullName}</small>
        </span>
      </a>

      <nav className="nav" aria-label="Main navigation">
        <a href="#portals">Portals</a>
        <a href="#learning-lab">Learning Lab</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#vault">Vault</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">Protocol 01 · Archive before empire</p>
        <h1>{brand.tagline}</h1>
        <p className="hero-description">{brand.description}</p>

        <div className="hero-actions">
          <a className="button primary" href="#portals">
            Enter the Archive
          </a>
          <a className="button secondary" href="#learning-lab">
            Launch Learning Lab
          </a>
        </div>

        <div className="signal-row" aria-label="D.A.V.I.D. values">
          <span>Covenant</span>
          <span>Instruction</span>
          <span>Design</span>
          <span>Worldbuilding</span>
        </div>
      </div>

      <div className="archive-panel">
        <div className="panel-header">
          <span>D.A.V.I.D. Interface</span>
          <span className="pulse">Live Beta</span>
        </div>

        <div className="david-orb" aria-label="D.A.V.I.D. archive core">
          <div className="orb-ring ring-one" />
          <div className="orb-ring ring-two" />
          <div className="orb-core">
            <span>D</span>
          </div>
        </div>

        <div className="telemetry">
          <p>
            <strong>Directive:</strong> preserve creative memory without reducing
            knowledge to spectacle.
          </p>
          <p>
            <strong>Mode:</strong> technological republic, not technocratic empire.
          </p>
          <p>
            <strong>Archive:</strong> Salvador · Education · Pedagogy · Field Journal · Vault
          </p>
        </div>
      </div>
    </section>
  );
}

function PortalSelector() {
  const [selectedId, setSelectedId] = useState("salvador");

  const selected = useMemo(
    () => portals.find((portal) => portal.id === selectedId),
    [selectedId]
  );

  return (
    <section id="portals" className="section">
      <div className="section-heading">
        <p className="eyebrow">Five Portals</p>
        <h2>One archive, multiple worlds.</h2>
        <p>
          Each portal can become its own full page later. For the beta, this
          selector functions as the public map of the entire D.A.V.I.D. ecosystem.
        </p>
      </div>

      <div className="portal-layout">
        <div className="portal-list">
          {portals.map((portal) => (
            <button
              className={`portal-button ${selectedId === portal.id ? "active" : ""}`}
              key={portal.id}
              onClick={() => setSelectedId(portal.id)}
              type="button"
            >
              <span className="portal-icon">{iconMap[portal.id]}</span>
              <span>
                <strong>{portal.title}</strong>
                <small>{portal.summary}</small>
              </span>
            </button>
          ))}
        </div>

        <article className="portal-detail">
          <p className="eyebrow">{selected.eyebrow}</p>
          <h3>{selected.title}</h3>
          <p>{selected.featuredText}</p>

          <div className="status-chip">{selected.status}</div>

          <div className="feature-grid">
            {selected.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function LearningLab() {
  return (
    <section id="learning-lab" className="section">
      <div className="section-heading">
        <p className="eyebrow">D.A.V.I.D. Learning Lab</p>
        <h2>Interactive tools for disciplined learning.</h2>
        <p>
          The education wing begins with small prototypes: math, typing,
          bilingual prompts, comic reading, and critical literacy tools.
        </p>
      </div>

      <div className="tool-grid">
        {tools.map((tool) => (
          <article className="tool-card" key={tool.title}>
            <div className="tool-card-top">
              <span>{tool.type}</span>
              <small>{tool.status}</small>
            </div>
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="section roadmap-section">
      <div className="section-heading">
        <p className="eyebrow">Build Roadmap</p>
        <h2>From beta archive to operating system.</h2>
        <p>
          The platform should grow one controlled artifact at a time: one page,
          one tool, one public preview, one protected record.
        </p>
      </div>

      <div className="roadmap">
        {roadmap.map((step, index) => (
          <div className="roadmap-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Vault() {
  const tags = [
    "Copyright",
    "Comic PDFs",
    "Manuscript",
    "Concept Art",
    "Game Devlog",
    "Pedagogy",
    "Travel Journal",
    "Contact",
  ];

  return (
    <section id="vault" className="section vault">
      <p className="eyebrow">Development Vault</p>
      <h2>The protected memory of the platform.</h2>
      <p>
        Use this section for copyright records, project timelines, manuscript
        notes, comic PDFs, visual archives, game devlogs, field journals, and
        collaboration material. Sensitive drafts can remain locked while
        public-facing previews are displayed.
      </p>

      <div className="tag-row">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <strong>{brand.acronym}</strong>
      <span>{brand.fullName}</span>
      <small>Beta archive prototype. Built for expansion.</small>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <div className="background-grid" />
      <div className="background-glow one" />
      <div className="background-glow two" />
      <div className="scanline" />

      <Header />
      <main>
        <Hero />
        <PortalSelector />
        <LearningLab />
        <Roadmap />
        <Vault />
      </main>
      <Footer />
    </div>
  );
}