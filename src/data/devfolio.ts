export const devfolio = {
  name: "Mika Chen",
  title: "Full-stack engineer crafting fast, thoughtful products.",
  intro:
    "I turn ambitious ideas into resilient digital experiences — from the first system sketch to the final polished interaction.",
  location: "Based in Vancouver · Available worldwide",
  email: "hello@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Bluesky", href: "https://bsky.app/" },
  ],
  stack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Figma"],
  projects: [
    {
      number: "01",
      title: "Relay",
      subtitle: "Realtime collaboration, made calm.",
      description:
        "A multiplayer workspace architecture supporting 40k+ daily sessions with sub-100ms sync.",
      image: "/images/devfolio/relay.svg",
      tags: ["Next.js", "WebSockets", "Redis"],
      href: "https://github.com/",
    },
    {
      number: "02",
      title: "Lumen",
      subtitle: "Finance without the friction.",
      description:
        "A personal finance experience that turns complex cashflow into clear, actionable stories.",
      image: "/images/devfolio/lumen.svg",
      tags: ["React", "D3", "Node.js"],
      href: "https://github.com/",
    },
    {
      number: "03",
      title: "Atlas API",
      subtitle: "Infrastructure teams can trust.",
      description:
        "A typed developer platform with observability built into every request and deployment.",
      image: "/images/devfolio/atlas.svg",
      tags: ["TypeScript", "GraphQL", "AWS"],
      href: "https://github.com/",
    },
  ],
  experience: [
    {
      period: "2023 — NOW",
      company: "Northstar Labs",
      role: "Staff Product Engineer",
      detail:
        "Leading platform foundations and product quality across three cross-functional teams.",
    },
    {
      period: "2020 — 2023",
      company: "Fieldwork",
      role: "Senior Software Engineer",
      detail: "Built collaboration systems used by distributed creative teams in 28 countries.",
    },
    {
      period: "2018 — 2020",
      company: "Independent",
      role: "Product Developer",
      detail: "Shipped focused web products for early-stage teams from zero to launch.",
    },
  ],
  achievements: [
    { value: "24", label: "products shipped" },
    { value: "12k", label: "open-source downloads" },
    { value: "99.99%", label: "best uptime" },
  ],
};
