import Link from "next/link";
import { skills } from "@/data/skills";

const categoryBadge: Record<string, string> = {
  combat: "badge-red",
  gathering: "badge-green",
  artisan: "badge-orange",
  support: "badge-blue",
};

const categoryLabel: Record<string, string> = {
  combat: "Combat",
  gathering: "Gathering",
  artisan: "Artisan",
  support: "Support / Elite",
};

export const metadata = {
  title: "All 29 Skills — RS3 Guide Hub",
  description:
    "Best training methods for all 29 RS3 skills organized by category. XP/hr rates, AFK methods, and key milestones.",
};

export default function SkillsPage() {
  const sorted = [...skills].sort((a, b) => a.priority - b.priority);

  const categories = ["combat", "gathering", "artisan", "support"] as const;

  return (
    <div style={{ padding: "40px 48px", maxWidth: 1100, margin: "0 auto" }}>
      <h1>All 29 Skills — Leveling Guide</h1>
      <p style={{ maxWidth: 680, marginBottom: 24 }}>
        Every RS3 skill with level-by-level training methods, XP/hr estimates,
        and key milestones. Click any skill for the full guide.
      </p>

      {/* Priority Order Table */}
      <h2>Recommended Training Priority</h2>
      <div className="info-box" style={{ marginBottom: 16 }}>
        <strong>How to read this table:</strong> Priority 1 means train first.
        Skills with lower priority numbers unlock content that makes later
        skills easier. Follow this order for the most efficient overall
        progression.
      </div>

      <table className="tbl" style={{ marginBottom: 32 }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Skill</th>
            <th>Cap</th>
            <th>Category</th>
            <th>Why This Order</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s) => (
            <tr key={s.slug}>
              <td className="td-g">{s.priority}</td>
              <td>
                <Link
                  href={`/guides/rs3/skills/${s.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  {s.emoji} {s.name}
                </Link>
              </td>
              <td className="td-xp">{s.cap}</td>
              <td>
                <span className={`badge ${categoryBadge[s.category]}`}>
                  {categoryLabel[s.category]}
                </span>
              </td>
              <td>{s.description.split(".")[0]}.</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Skill cards by category */}
      {categories.map((cat) => {
        const catSkills = skills.filter((s) => s.category === cat);
        return (
          <div key={cat}>
            <div className="divider">{categoryLabel[cat]}</div>
            <div className="g4" style={{ marginBottom: 24 }}>
              {catSkills.map((s) => (
                <div key={s.slug} className="skill-card">
                  <Link href={`/guides/rs3/skills/${s.slug}`}>
                    <div className="skill-card-hdr">
                      <span className="skill-em">{s.emoji}</span>
                      <span className="skill-nm">{s.name}</span>
                      <span className="skill-cap">{s.cap}</span>
                    </div>
                    <div className="skill-body">{s.description}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div
        style={{
          textAlign: "center",
          fontSize: "0.7rem",
          color: "var(--text-muted)",
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.06em",
          paddingBottom: 40,
        }}
      >
        Click any skill card above for the full leveling guide with training
        methods and milestones.
      </div>
    </div>
  );
}
