"use client";

import { useState } from "react";

const API_URL = "/api/hacker-diagnostic"; // do NOT change

export default function LeadHackerHero() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([
    "booting hacker-stack://lead-hacker",
    "watching for lead chaos, funnel leaks, and silent churn...",
    "ready when you are. describe the mess.",
  ]);
  const [loading, setLoading] = useState(false);

  async function runSnapshot(e) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const prompt = input.trim();
    setInput("");
    setLoading(true);

    setLines((prev) => [
  ...prev,
  "",
  `> snapshot.input :: ${prompt}`,
  "⧗ running multi-agent diagnostic...",
]);


    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) throw new Error("Bad response from console");

      const data = await res.json();
      const out = data.output || "no response received from ops kernel.";

      setLines((prev) => [...prev, "", out.trim()]);
    } catch (err) {
      setLines((prev) => [
        ...prev,
        "",
        "✖ console error: could not reach diagnostic kernel.",
        String(err?.message || err),
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="grid-2 gap-8">
      <div className="glass p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="neon-title">The Hacker Stack</p>
            <h1 className="section-title">
              <span className="neon-word">Lead Hacker</span> is your
              AI-native revenue command line.
            </h1>
          </div>
          <span className="badge">
            <span className="badge-dot" />
            live ops
          </span>
        </div>

        <p className="mt-5 max-w-xl text-sm text-slate-300">
          Pipe the chaos of your lead flow straight into an AI console that
          thinks like a 7-figure growth operator. Lead Hacker runs a
          diagnostic, writes the action plan, and orchestrates your agents.
        </p>

        <div className="mt-6 console-shell">
          <div className="console-header">
            <div className="console-dots">
              <span />
              <span />
              <span />
            </div>
            <span>lead-hacker // ops-console.snap</span>
          </div>

          <div className="console-body">
            <div className="console-output">
              {lines.map((line, i) => (
                <div key={i} className="console-line">
                  {line}
                </div>
              ))}
            </div>

            <form onSubmit={runSnapshot} className="console-prompt">
              <span className="text-xs text-emerald-400">you ⮞</span>
              <input
                className="console-input"
                placeholder="describe the chaos in your pipeline…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="button-primary" disabled={loading}>
                {loading ? "running…" : "Execute snapshot"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400">
          <span>• Weekend lead crashes</span>
          <span>• Paid traffic that doesn&apos;t convert</span>
          <span>• SDRs drowning in unqualified demos</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="mini-card">
          <p className="mini-label">What it feels like</p>
          <p>
            You describe the mess once. Lead Hacker parses, maps the systems,
            and spits out a prioritized 30-day playbook, ready for your team or
            our agents to execute.
          </p>
          <div className="pill-row">
            <span className="pill">Diagnostic → Playbook</span>
            <span className="pill">Multi-agent reasoning</span>
            <span className="pill">Battle-tested prompts</span>
          </div>
        </div>

        <div className="mini-card">
          <p className="mini-label">For who</p>
          <p>
            Agency founders, media buyers, CROs, and sales leaders sitting on
            chaotic attribution, leaky funnels, and under-performing teams.
          </p>
          <div className="pill-row">
            <span className="pill">$1M+ agencies</span>
            <span className="pill">B2B offers</span>
            <span className="pill">Info & coaching</span>
          </div>
        </div>
      </div>
    </section>
  );
}
