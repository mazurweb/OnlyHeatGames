import Link from "next/link";

const sections = [
  {
    href: "/guides/rs3/quests",
    icon: "\uD83D\uDCDC",
    title: "Quest Path by Level",
    desc: "Full level-bracketed quest guide starting from Lumbridge with zero requirements.",
  },
  {
    href: "/guides/rs3/combat",
    icon: "\u2694\uFE0F",
    title: "Combat & Fighting Leveling",
    desc: "Level-by-level training spots, gear upgrades, and ability unlocks for all combat styles.",
  },
  {
    href: "/guides/rs3/skills",
    icon: "\uD83D\uDCC8",
    title: "All Skills Leveling Guide",
    desc: "Best training methods for all 29 RS3 skills with XP/hr estimates and AFK options.",
  },
  {
    href: "/guides/rs3/completionist",
    icon: "\uD83C\uDFC6",
    title: "Completionist Roadmap",
    desc: "The full endgame checklist from Quest Cape to Trimmed Completionist Cape.",
  },
];

export default function RS3GuidesPage() {
  return (
    <div style={{ padding: "40px 48px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <Link href="/guides" style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Guides
        </Link>
        <span style={{ color: "var(--text-muted)" }}>/</span>
        <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--navy)" }}>RuneScape 3</span>
      </div>
      <h1 style={{ marginBottom: 8 }}>RuneScape 3 Guides</h1>
      <p style={{ marginBottom: 28 }}>
        Everything you need to go from fresh Lumbridge spawn to Completionist
        Cape. Built for returning and new Main account players.
      </p>

      <div className="guide-grid">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="guide-card c-orange">
            <div className="guide-card-icon">{s.icon}</div>
            <div className="guide-card-title">{s.title}</div>
            <div className="guide-card-desc">{s.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
