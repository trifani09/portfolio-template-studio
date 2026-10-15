import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Code2, Github, Mail, MapPin } from "lucide-react";
import { devfolio as d } from "@/data/devfolio";
import { ArrowLink } from "@/components/shared/ArrowLink";

export function DevfolioPage() {
  return (
    <main className="devfolio">
      <nav className="dev-nav">
        <Link href="/templates/devfolio" className="dev-logo">
          <Code2 /> MC<span>.</span>
        </Link>
        <div>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </div>
        <a href={`mailto:${d.email}`} className="dev-hire">
          <i /> Let&apos;s talk
        </a>
      </nav>
      <header className="dev-hero">
        <div className="dev-availability">
          <i /> Available for select projects · 2027
        </div>
        <div className="dev-hero-grid">
          <div>
            <p className="dev-kicker">Hello, I&apos;m {d.name.split(" ")[0]} —</p>
            <h1>{d.title}</h1>
            <p className="dev-intro">{d.intro}</p>
            <div className="dev-actions">
              <a className="dev-primary" href="#work">
                Explore my work <ArrowDown size={18} />
              </a>
              <a className="dev-secondary" href={`mailto:${d.email}`}>
                Start a conversation <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="dev-portrait" aria-label="Abstract profile illustration">
            <div className="dev-orbit" />
            <div className="dev-code-card">
              <span>currently_building.ts</span>
              <code>
                <i>const</i> focus = &#123;
                <br />
                &nbsp; craft: <b>true</b>,<br />
                &nbsp; impact: <b>true</b>
                <br />
                &#125;;
              </code>
            </div>
            <small>
              <MapPin size={13} />
              {d.location}
            </small>
          </div>
        </div>
      </header>
      <section className="dev-stack" aria-label="Technology stack">
        <span>TOOLBOX</span>
        {d.stack.map((x) => (
          <b key={x}>{x}</b>
        ))}
      </section>
      <section id="work" className="dev-section">
        <div className="dev-section-head">
          <div>
            <p>01 / SELECTED WORK</p>
            <h2>
              Things I&apos;ve built,
              <br />
              <em>and why they matter.</em>
            </h2>
          </div>
          <p>
            A selection of product and platform work — balancing technical depth with a sharp eye
            for the humans on the other side.
          </p>
        </div>
        <div className="dev-projects">
          {d.projects.map((p) => (
            <article className="dev-project" key={p.title}>
              <div className="dev-project-image">
                <Image
                  src={p.image}
                  alt={`Abstract preview for ${p.title}`}
                  fill
                  sizes="(max-width: 800px) 100vw, 55vw"
                />
                <span>{p.number}</span>
              </div>
              <div>
                <small>FEATURED PROJECT</small>
                <h3>{p.title}</h3>
                <h4>{p.subtitle}</h4>
                <p>{p.description}</p>
                <div className="dev-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <ArrowLink href={p.href}>View source</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="experience" className="dev-experience dev-section">
        <div>
          <p className="dev-label">02 / EXPERIENCE</p>
          <h2>
            Built through
            <br />
            <em>real-world scale.</em>
          </h2>
        </div>
        <div>
          {d.experience.map((x) => (
            <article key={x.company}>
              <span>{x.period}</span>
              <div>
                <h3>{x.role}</h3>
                <b>{x.company}</b>
                <p>{x.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="about" className="dev-about dev-section">
        <div>
          <p className="dev-label">03 / ABOUT</p>
          <h2>
            Engineering is a<br />
            team sport.
          </h2>
          <p>
            I&apos;m most at home between disciplines: translating product intent into systems,
            helping designers understand the medium, and leaving codebases better than I found them.
          </p>
          <ArrowLink href={`mailto:${d.email}`}>More about how I work</ArrowLink>
        </div>
        <div className="dev-stats">
          {d.achievements.map((x) => (
            <div key={x.label}>
              <strong>{x.value}</strong>
              <span>{x.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="dev-contact">
        <Github size={28} />
        <p>Have a hard problem or a half-formed idea?</p>
        <h2>
          Let&apos;s make something
          <br />
          <em>useful together.</em>
        </h2>
        <a href={`mailto:${d.email}`}>
          <Mail size={18} />
          {d.email}
        </a>
      </section>
      <footer className="dev-footer">
        <div className="dev-logo">
          <Code2 /> MC<span>.</span>
        </div>
        <p>© 2026 {d.name}. Sample portfolio content.</p>
        <div>
          {d.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
