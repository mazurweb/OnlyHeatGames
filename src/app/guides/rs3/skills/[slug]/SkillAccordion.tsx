"use client";

import { useState } from "react";
import type { SkillMethod } from "@/data/skills";

type Props = {
  methods: SkillMethod[];
  costColor: Record<string, string>;
};

export default function SkillAccordion({ methods, costColor }: Props) {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? -1 : i);
  }

  return (
    <div>
      {methods.map((m, i) => {
        const isOpen = openIndex === i;
        return (
          <div className="lband" key={i}>
            <div className="lband-hdr" onClick={() => toggle(i)}>
              <span className="lrange">{m.levels}</span>
              <span className="lband-title">{m.method}</span>
              <span className="lband-xp">{m.xpPerHour} XP/hr</span>
              <span className={`chevron${isOpen ? " open" : ""}`}>
                &#9660;
              </span>
            </div>
            {isOpen && (
              <div className="lband-body">
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    flexWrap: "wrap",
                    marginBottom: 10,
                  }}
                >
                  {m.xpPerAction && (
                    <div>
                      <span
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.6rem",
                          color: "var(--text-muted)",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        XP / Action:{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: "monospace",
                          color: "#7ecfff",
                          fontSize: "0.78rem",
                        }}
                      >
                        {m.xpPerAction}
                      </span>
                    </div>
                  )}
                  <div>
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.6rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      XP / Hour:{" "}
                    </span>
                    <span
                      style={{
                        fontFamily: "monospace",
                        color: "#7ecfff",
                        fontSize: "0.78rem",
                      }}
                    >
                      {m.xpPerHour}
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.6rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Cost:{" "}
                    </span>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "0.78rem",
                        color: costColor[m.cost] || "var(--text-sec)",
                      }}
                    >
                      {m.cost}
                    </span>
                  </div>
                </div>
                <p style={{ marginBottom: 0 }}>{m.notes}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
