import Link from "next/link";

const guides = [
  {
    slug: "tft",
    name: "Teamfight Tactics",
    icon: "\u2694",
    color: "c-blue",
    desc: "Comp tier lists, item cheat sheets, augment rankings, and stage-by-stage strategy for climbing ranked in TFT.",
    badges: [
      { label: "Meta Comps", cls: "badge-blue" },
      { label: "Set 14", cls: "badge-purple" },
      { label: "Updated Weekly", cls: "badge-orange" },
    ],
  },
  {
    slug: "league",
    name: "League of Legends",
    icon: "\u26A1",
    color: "c-orange",
    desc: "Champion guides, role breakdowns, macro strategy, and tier lists to help you climb from Iron to Challenger.",
    badges: [
      { label: "Champion Guides", cls: "badge-orange" },
      { label: "Patch Notes", cls: "badge-navy" },
      { label: "Beginner Friendly", cls: "badge-green" },
    ],
  },
  {
    slug: "rs3",
    name: "RuneScape 3",
    icon: "\uD83C\uDFF0",
    color: "c-navy",
    desc: "Complete guide hub for RS3 — quests, skills, combat, and the completionist roadmap from Lumbridge to endgame.",
    badges: [
      { label: "Quests", cls: "badge-orange" },
      { label: "All 29 Skills", cls: "badge-navy" },
      { label: "Combat Rework", cls: "badge-blue" },
      { label: "Completionist", cls: "badge-purple" },
    ],
  },
];

export default function GuidesPage() {
  return (
    <div style={{ padding: "40px 48px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>Game Guides</h1>
      <p style={{ marginBottom: 28 }}>
        Free, in-depth guides for competitive games. Updated regularly with the
        latest meta and strategies.
      </p>

      <div className="guide-grid" style={{ marginBottom: 40 }}>
        {guides.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className={`guide-card ${g.color}`}>
            <div className="guide-card-icon">{g.icon}</div>
            <div className="guide-card-title">{g.name}</div>
            <div className="guide-card-desc">{g.desc}</div>
            <div className="guide-card-meta">
              {g.badges.map((b, i) => (
                <span key={i} className={`badge ${b.cls}`}>{b.label}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="info-box">
        <strong>More games coming soon.</strong> Have a game you want guides for?
        Let us know and we&apos;ll add it to the list.
      </div>
    </div>
  );
}
