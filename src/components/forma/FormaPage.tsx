import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { forma as f } from "@/data/forma";

export function FormaPage() {
  return (
    <main className="forma">
      <nav className="forma-nav">
        <Link href="/templates/forma" className="forma-logo">
          AV<span>®</span>
        </Link>
        <p>
          {f.discipline}
          <br />
          Selected works 2024—26
        </p>
        <div>
          <a href="#work">Index</a>
          <a href="#about">Studio</a>
          <a href={`mailto:${f.email}`}>Contact</a>
        </div>
      </nav>
      <header className="forma-hero">
        <p>(01 — Introduction)</p>
        <h1>
          <span>Ideas with</span>
          <em>texture, tension</em>
          <span>&amp; staying power.</span>
        </h1>
        <div>
          <p>{f.intro}</p>
          <a href="#work" aria-label="Scroll to selected work">
            <ArrowDownRight />
          </a>
        </div>
      </header>
      <section id="work" className="forma-work">
        <div className="forma-rule">
          <p>(02 — Selected work)</p>
          <p>Art direction · Identity · Digital</p>
        </div>
        <div className="forma-work-grid">
          {f.works.map((w, i) => (
            <article className={w.className} key={w.title}>
              <div className="forma-image">
                <Image
                  src={w.image}
                  alt={`Artwork for ${w.title}`}
                  fill
                  sizes="(max-width: 700px) 100vw, 65vw"
                />
                <span>0{i + 1}</span>
              </div>
              <div>
                <h2>{w.title}</h2>
                <p>{w.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="forma-cases">
        <div className="forma-rule">
          <p>(03 — Selected stories)</p>
          <p>Behind the work</p>
        </div>
        {f.cases.map((c) => (
          <article key={c.client}>
            <span>{c.number}</span>
            <p>{c.client}</p>
            <h2>{c.title}</h2>
            <div>
              <p>{c.summary}</p>
              <small>{c.tags.join(" · ")}</small>
            </div>
            <ArrowUpRight />
          </article>
        ))}
      </section>
      <section className="forma-process">
        <div>
          <p>(04 — Approach)</p>
          <h2>
            Close looking.
            <br />
            Clear thinking.
            <br />
            <em>Careful making.</em>
          </h2>
        </div>
        <div>
          {f.process.map((p) => (
            <article key={p.step}>
              <span>{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="about" className="forma-about">
        <div className="forma-about-art">
          <span>
            form follows
            <br />
            <em>feeling</em>
          </span>
        </div>
        <div>
          <p>(05 — The studio)</p>
          <h2>
            Small by design.
            <br />
            Open by nature.
          </h2>
          <p>
            Amara Vale is an independent creative practice working across identity, editorial, and
            digital experience. Every collaboration is direct, curious, and grounded in a belief
            that good design should feel inevitable — but never obvious.
          </p>
          <a href={`mailto:${f.email}`}>
            Start a project <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <section className="forma-clients">
        <p>Selected collaborations</p>
        <div>
          {f.clients.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </section>
      <section className="forma-contact">
        <p>(06 — Contact)</p>
        <h2>
          Have something
          <br />
          interesting in mind?
        </h2>
        <a href={`mailto:${f.email}`}>
          {f.email}
          <ArrowUpRight />
        </a>
      </section>
      <footer className="forma-footer">
        <div className="forma-logo">
          AV<span>®</span>
        </div>
        <p>
          Independent practice
          <br />
          Available worldwide
        </p>
        <div>
          {f.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
