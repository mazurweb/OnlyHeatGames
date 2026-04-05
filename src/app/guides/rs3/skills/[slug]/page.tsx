import { skills, getSkillBySlug } from "@/data/skills";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import SkillAccordion from "./SkillAccordion";

export function generateStaticParams() {
  return skills.map((s) => ({ slug: s.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return { title: "Skill Not Found" };
  return {
    title: `${skill.name} Guide — RS3 Guide Hub`,
    description: skill.description,
  };
}

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

const costColor: Record<string, string> = {
  Free: "var(--green)",
  Low: "var(--green)",
  Medium: "var(--yellow)",
  High: "var(--orange)",
  "Very High": "var(--red)",
  Profit: "#7ecfff",
};

export default async function SkillPage({ params }: Props) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  const idx = skills.findIndex((s) => s.slug === slug);
  const prev = idx > 0 ? skills[idx - 1] : null;
  const next = idx < skills.length - 1 ? skills[idx + 1] : null;

  return (
    <div style={{ padding: "40px 48px", maxWidth: 920, margin: "0 auto" }}>
      {/* Breadcrumb */}
      <div
        style={{
          fontSize: "0.72rem",
          color: "var(--text-muted)",
          marginBottom: 16,
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.06em",
        }}
      >
        <Link href="/guides/rs3/skills" style={{ color: "var(--gold)" }}>
          Skills
        </Link>{" "}
        &rsaquo; {skill.name}
      </div>

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 8,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: "2rem" }}>{skill.emoji}</span>
        <h1 style={{ marginBottom: 0 }}>{skill.name}</h1>
        <span
          className="badge badge-gold"
          style={{ fontSize: "0.65rem" }}
        >
          Cap: {skill.cap}
        </span>
        <span className={`badge ${categoryBadge[skill.category]}`}>
          {categoryLabel[skill.category]}
        </span>
        <span
          className="badge badge-purple"
          style={{ fontSize: "0.6rem" }}
        >
          Priority #{skill.priority}
        </span>
      </div>

      {/* Description */}
      <p style={{ maxWidth: 700, marginBottom: 24 }}>{skill.description}</p>

      {skill.unlockQuest && (
        <div className="info-box blue" style={{ marginBottom: 20 }}>
          <strong>Unlock Quest:</strong> {skill.unlockQuest} — you must
          complete this quest before you can train {skill.name}.
        </div>
      )}

      {/* Key Milestones */}
      <h2>Key Milestones</h2>
      <table className="tbl" style={{ marginBottom: 28 }}>
        <thead>
          <tr>
            <th>Level</th>
            <th>Unlock</th>
            <th>Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          {skill.keyMilestones.map((m, i) => (
            <tr key={i}>
              <td className="td-g">{m.level}</td>
              <td style={{ fontWeight: 600, color: "var(--text)" }}>
                {m.unlock}
              </td>
              <td>{m.why}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Training Methods Accordion */}
      <h2>Training Methods by Level</h2>
      <SkillAccordion methods={skill.methods} costColor={costColor} />

      {/* Tips */}
      <h2 style={{ marginTop: 28 }}>Tips</h2>
      <ul className="step-list">
        {skill.tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>

      {/* Prev / Next Navigation */}
      <div
        className="divider"
        style={{ marginTop: 32, marginBottom: 14 }}
      >
        More Skills
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {prev ? (
          <Link
            href={`/skills/${prev.slug}`}
            className="card"
            style={{
              flex: 1,
              textDecoration: "none",
              minWidth: 180,
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                color: "var(--text-muted)",
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Previous
            </div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "var(--gold)",
              }}
            >
              {prev.emoji} {prev.name}
            </div>
          </Link>
        ) : (
          <div style={{ flex: 1 }} />
        )}
        {next ? (
          <Link
            href={`/skills/${next.slug}`}
            className="card"
            style={{
              flex: 1,
              textDecoration: "none",
              textAlign: "right",
              minWidth: 180,
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                color: "var(--text-muted)",
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Next
            </div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "var(--gold)",
              }}
            >
              {next.name} {next.emoji}
            </div>
          </Link>
        ) : (
          <div style={{ flex: 1 }} />
        )}
      </div>
    </div>
  );
}
