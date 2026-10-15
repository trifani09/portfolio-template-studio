import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, Linkedin, Quote, Sparkles } from "lucide-react";
import { elevate as e } from "@/data/elevate";
import { MotionController } from "@/components/shared/MotionController";

export function ElevatePage() {
  return (
    <main className="elevate" data-motion-root="elevate">
      <MotionController theme="elevate" />
      <nav className="elevate-nav">
        <Link href="/templates/elevate" className="elevate-logo">
          <span>JE</span> Jordan Ellis
        </Link>
        <div>
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>
        <a className="elevate-button small" href={`mailto:${e.email}`}>
          Let&apos;s talk <ArrowRight size={15} />
        </a>
      </nav>
      <header className="elevate-hero">
        <div>
          <p className="elevate-badge">
            <Sparkles size={14} /> Independent consultant · Available Q1
          </p>
          <h1>{e.headline}</h1>
          <p>{e.intro}</p>
          <div className="elevate-actions">
            <a className="elevate-button" href={`mailto:${e.email}`}>
              Discuss a project <ArrowRight size={17} />
            </a>
            <a href="#work">View selected work</a>
          </div>
          <div className="elevate-trust">
            <div>
              <span>15+</span>
              <p>
                Years shaping
                <br />
                growth strategy
              </p>
            </div>
            <div>
              <span>30+</span>
              <p>
                Teams supported
                <br />
                across sectors
              </p>
            </div>
          </div>
        </div>
        <div className="elevate-visual">
          <div className="elevate-portrait">
            <span>CLARITY</span>
            <i />
            <b>→ MOMENTUM</b>
          </div>
          <div className="elevate-float">
            <BarChart3 />
            <p>
              Strategy that
              <br />
              <b>moves with you.</b>
            </p>
          </div>
        </div>
      </header>
      <section className="elevate-metrics">
        <p className="elevate-overline">Illustrative outcomes from sample engagements</p>
        <div>
          {e.metrics.map((m) => (
            <article key={m.label}>
              <strong>{m.value}</strong>
              <h3>{m.label}</h3>
              <p>{m.note}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="expertise" className="elevate-section elevate-services">
        <div className="elevate-heading">
          <div>
            <p>01 / EXPERTISE</p>
            <h2>
              From ambition
              <br />
              to <em>action.</em>
            </h2>
          </div>
          <p>
            Focused support at the moments that matter most — from finding the opportunity to
            building the plan and bringing people with you.
          </p>
        </div>
        <div className="elevate-service-grid">
          {e.services.map((s) => (
            <article key={s.number}>
              <span>{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
              <CheckCircle2 />
            </article>
          ))}
        </div>
      </section>
      <section id="work" className="elevate-section elevate-work">
        <div className="elevate-heading">
          <div>
            <p>02 / SELECTED WORK</p>
            <h2>
              Strategy in
              <br />
              <em>the real world.</em>
            </h2>
          </div>
          <p>
            Sample case studies showing how customer truth, commercial focus, and practical
            execution can work together.
          </p>
        </div>
        <div>
          {e.cases.map((c, i) => (
            <article key={c.title}>
              <div>
                <span>{c.sector}</span>
                <h3>{c.title}</h3>
                <p>{c.result}</p>
                <a href={`mailto:${e.email}?subject=Case study ${i + 1}`}>
                  Request the full story <ArrowRight size={16} />
                </a>
              </div>
              <div className="elevate-case-image">
                <Image
                  src={c.image}
                  fill
                  alt={`Abstract graphic for ${c.sector} case study`}
                  sizes="(max-width: 800px) 100vw, 45vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="elevate-section elevate-career">
        <div>
          <p className="elevate-overline">03 / EXPERIENCE</p>
          <h2>
            Experience that
            <br />
            connects the dots.
          </h2>
        </div>
        <div>
          {e.experience.map((x) => (
            <article key={x.company}>
              <span>{x.years}</span>
              <div>
                <h3>{x.role}</h3>
                <b>{x.company}</b>
                <p>{x.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="elevate-testimonials">
        <p className="elevate-overline">WHAT PARTNERS SAY · SAMPLE CONTENT</p>
        <div>
          {e.testimonials.map((t) => (
            <blockquote key={t.name}>
              <Quote />
              <p>“{t.quote}”</p>
              <footer>
                <b>{t.name}</b>
                <span>{t.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      <section id="about" className="elevate-section elevate-about">
        <div className="elevate-about-card">
          <span>
            Curious
            <br />
            by default.
          </span>
        </div>
        <div>
          <p className="elevate-overline">04 / ABOUT</p>
          <h2>Good strategy starts with better questions.</h2>
          <p>
            I work alongside leadership teams to make complexity useful. My approach combines
            commercial rigour, customer empathy, and a bias toward action — bringing enough
            structure to create confidence, never bureaucracy.
          </p>
          <div>
            <Linkedin size={18} />
            <span>{e.location}</span>
          </div>
        </div>
      </section>
      <section className="elevate-contact">
        <p>READY WHEN YOU ARE</p>
        <h2>
          Let&apos;s make the next move
          <br />
          <em>your best one yet.</em>
        </h2>
        <a className="elevate-button light" href={`mailto:${e.email}`}>
          Start a conversation <ArrowRight />
        </a>
      </section>
      <footer className="elevate-footer">
        <div className="elevate-logo">
          <span>JE</span> Jordan Ellis
        </div>
        <p>Sample professional portfolio template.</p>
        <div>
          {e.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
