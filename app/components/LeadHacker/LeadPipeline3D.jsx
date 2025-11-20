export default function LeadPipeline3D() {
  return (
    <section className="grid-2 gap-8">
      <div className="glass p-6 md:p-7">
        <p className="section-label">Lead Hacker pipeline view</p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight">
          See your lead flow as a living system, not a spreadsheet.
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          The console doesn&apos;t just talk back. It maps your traffic,
          capture, nurture, and sales motions into a pipeline diagram you can
          actually act on.
        </p>

        <div className="mt-5 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 text-xs text-slate-200">
          <p className="mb-3 text-[0.66rem] uppercase tracking-[0.2em] text-slate-400">
            holographic pipeline overlay
          </p>

          <div className="grid gap-3 md:grid-cols-4">
            <Column title="Traffic" items={["Meta + YT", "Partners", "Referrals"]} />
            <Column
              title="Capture"
              items={["Quiz funnels", "DM workflows", "Calendars"]}
            />
            <Column
              title="Nurture"
              items={["Email engines", "Content drips", "Event promos"]}
            />
            <Column
              title="Revenue"
              items={["Booked calls", "Close %, LTV", "Expansion"]}
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[0.7rem] text-slate-300">
            <span className="pill">Drop‑off alerts</span>
            <span className="pill">Channel blend suggestions</span>
            <span className="pill">Agent task queues</span>
          </div>
        </div>
      </div>

      <div className="glass p-6 md:p-7">
        <p className="section-label">What you get</p>
        <ul className="mt-3 space-y-3 text-sm text-slate-200">
          <li>
            ▸ 30‑day Hacker Plan formatted so a human team or an AI agent crew
            can run it without you babysitting.
          </li>
          <li>
            ▸ Lead source map, funnel weak‑spots, and exact experiments to run
            next — not 40 pages of fluff.
          </li>
          <li>
            ▸ Templates for prompts, SOPs, and dashboards that plug straight
            into your existing tools.
          </li>
        </ul>
      </div>
    </section>
  );
}

function Column({ title, items }) {
  return (
    <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-3 shadow-[0_12px_30px_rgba(15,23,42,0.9)]">
      <p className="mb-2 text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
        {title}
      </p>
      <ul className="space-y-1 text-[0.74rem] text-slate-100">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
