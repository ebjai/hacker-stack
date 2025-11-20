export default function Agents() {
  return (
    <section className="glass mt-4 p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="section-label">Your three agents</p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50">
            Lead Hacker doesn&apos;t work alone — it orchestrates a full agent
            crew.
          </h2>
        </div>

        <div className="pill-row">
          <span className="pill">Ops Architect</span>
          <span className="pill">Funnel Engineer</span>
          <span className="pill">Revenue Strategist</span>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <AgentCard
          label="Agent 01"
          name="Ops Architect"
          bio="Maps your entire revenue system, flags bottlenecks, and designs the operating rhythm your business runs on."
        />
        <AgentCard
          label="Agent 02"
          name="Funnel Engineer"
          bio="Takes the messy middle — ads, pages, forms, sequences — and refactors it into a clean, testable funnel."
        />
        <AgentCard
          label="Agent 03"
          name="Revenue Strategist"
          bio="Turns diagnostics into prioritised sprints so you know exactly what to run this week to move cash in."
        />
      </div>
    </section>
  );
}

function AgentCard({ label, name, bio }) {
  return (
    <div className="mini-card h-full bg-slate-950/70">
      <p className="mini-label">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-50">{name}</p>
      <p className="mt-2 text-xs text-slate-300">{bio}</p>
      <div className="pill-row mt-3">
        <span className="pill">Multi‑step chains</span>
        <span className="pill">Ops memory</span>
      </div>
    </div>
  );
}
