"use client";

import { useState } from "react";

const toggles = [
  { id: "ai-native", label: "AI native" },
  { id: "agent-guide", label: "Agent guide" },
  { id: "deep-plan", label: "Deep plan mode" }
];

export default function Page() {
  const [activeToggle, setActiveToggle] = useState("ai-native");

  return (
    <main className="landing">
      <div className="aura aura-primary" />
      <div className="aura aura-secondary" />
      <div className="aura aura-tertiary" />

      <header className="hero">
        <p className="eyebrow">The next evolution of building</p>
        <h1>
          Nebula Forge
          <span>Full-stack mastery at the speed of thought.</span>
        </h1>
        <p className="subtitle">
          Compose production-grade applications with AI-native orchestration, guided agent
          collaboration, and deep architectural planning.
        </p>
      </header>

      <section className="workspace">
        <div className="input-shell">
          <label htmlFor="project-brief" className="input-label">
            Project Brief
          </label>
          <textarea
            id="project-brief"
            placeholder="Describe the product you&rsquo;re ready to ship..."
            className="project-textarea"
          />
          <div className="pill-row">
            {toggles.map((toggle) => (
              <button
                key={toggle.id}
                className={`pill ${activeToggle === toggle.id ? "active" : ""}`}
                onClick={() => setActiveToggle(toggle.id)}
              >
                {toggle.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
