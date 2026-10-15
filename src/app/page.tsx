import Link from "next/link";
import { ArrowRight, Braces, Layers3, Sparkles } from "lucide-react";
import { BrandMark } from "@/components/shared/BrandMark";

const templates = [
  {
    slug: "devfolio",
    id: "01",
    name: "DevFolio",
    kind: "Developer portfolio",
    text: "A high-contrast, technical showcase for engineers who care about craft.",
    audience: "Developers · Engineers · Freelancers",
    icon: Braces,
  },
  {
    slug: "forma",
    id: "02",
    name: "Forma",
    kind: "Creative portfolio",
    text: "An image-led editorial canvas with confident typography and art-book restraint.",
    audience: "Designers · Directors · Photographers",
    icon: Sparkles,
  },
  {
    slug: "elevate",
    id: "03",
    name: "Elevate",
    kind: "Professional portfolio",
    text: "A credible, results-focused home for strategic independent professionals.",
    audience: "Consultants · Marketers · PMs",
    icon: Layers3,
  },
];

export default function HomePage() {
  return (
    <main className="studio">
      <nav className="studio-nav" aria-label="Primary navigation">
        <Link href="/" className="studio-logo">
          <BrandMark /> Frame &amp; Form
        </Link>
        <div>
          <a href="#collection">Collection</a>
          <a href="#compare">Compare</a>
          <a href="#customize">Customize</a>
        </div>
        <a href="mailto:studio@example.com" className="studio-contact">
          Get in touch <ArrowRight size={15} />
        </a>
      </nav>
      <header className="studio-hero">
        <p className="eyebrow">Portfolio template collection · Edition 01</p>
        <h1>
          Your work deserves
          <br />a <em>better frame.</em>
        </h1>
        <div className="studio-hero-bottom">
          <p>
            Three distinct, production-ready portfolios for people who take their work personally.
          </p>
          <a href="#collection" aria-label="Explore collection">
            <ArrowRight size={24} />
          </a>
        </div>
      </header>
      <section className="studio-marquee" aria-label="Collection qualities">
        <span>Distinct by design</span>
        <i /> <span>Built to be yours</span>
        <i /> <span>Ready to ship</span>
      </section>
      <section id="collection" className="studio-collection section-pad">
        <div className="section-heading">
          <p className="eyebrow">The collection</p>
          <h2>
            Choose your
            <br />
            point of view.
          </h2>
          <p>
            Not three skins on the same layout. Three carefully considered systems, each made for a
            different kind of work.
          </p>
        </div>
        <div className="template-grid">
          {templates.map((template) => (
            <article className={`template-card ${template.slug}`} key={template.slug}>
              <div className="template-preview">
                <span>{template.id}</span>
                <template.icon size={42} strokeWidth={1.2} />
                <div className="preview-lines">
                  <i />
                  <i />
                  <i />
                </div>
                <b>{template.name}</b>
              </div>
              <div className="template-info">
                <p>{template.kind}</p>
                <h3>{template.name}</h3>
                <p>{template.text}</p>
                <small>{template.audience}</small>
                <Link href={`/templates/${template.slug}`}>
                  View live template <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="compare" className="studio-compare section-pad">
        <div className="section-heading">
          <p className="eyebrow">Find your fit</p>
          <h2>
            One collection.
            <br />
            Three voices.
          </h2>
        </div>
        <div className="compare-table" role="table" aria-label="Template comparison">
          <div role="row">
            <b>Template</b>
            <b>Visual tone</b>
            <b>Best for</b>
            <b>Signature detail</b>
          </div>
          <div role="row">
            <strong>DevFolio</strong>
            <span>Technical / Dark</span>
            <span>Product builders</span>
            <span>System-led case studies</span>
          </div>
          <div role="row">
            <strong>Forma</strong>
            <span>Editorial / Warm</span>
            <span>Visual creatives</span>
            <span>Asymmetric image stories</span>
          </div>
          <div role="row">
            <strong>Elevate</strong>
            <span>Structured / Light</span>
            <span>Strategic operators</span>
            <span>Proof-focused narrative</span>
          </div>
        </div>
      </section>
      <section id="customize" className="studio-customize section-pad">
        <div>
          <p className="eyebrow">Made to adapt</p>
          <h2>
            Your name.
            <br />
            Your work.
            <br />
            <em>Your rules.</em>
          </h2>
        </div>
        <div>
          <p>
            Every template separates content from presentation. Update one clearly organized
            TypeScript file, replace the local artwork, and make the portfolio unmistakably yours.
          </p>
          <ul>
            <li>
              <span>01</span> Edit content in one data file
            </li>
            <li>
              <span>02</span> Swap original local imagery
            </li>
            <li>
              <span>03</span> Tune colors with CSS variables
            </li>
            <li>
              <span>04</span> Deploy anywhere Next.js runs
            </li>
          </ul>
        </div>
      </section>
      <footer className="studio-footer">
        <Link href="/" className="studio-logo">
          <BrandMark /> Frame &amp; Form
        </Link>
        <p>Built with care for independent people.</p>
        <div>
          <a href="#collection">Templates</a>
          <a href="mailto:studio@example.com">Contact</a>
        </div>
      </footer>
    </main>
  );
}
