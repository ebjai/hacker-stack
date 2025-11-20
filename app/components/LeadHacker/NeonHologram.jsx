export default function NeonHologram() {
  return (
    <section className="mt-4 grid-2 gap-8">
      <div className="glass p-6 md:p-8">
        <p className="section-label">Lead Hacker + Funnel Hacker bundle</p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-50">
          One console, two core plays: fill the pipeline and harden the funnel.
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          Lead Hacker for diagnostics and strategy. Funnel Hacker for
          conversion, offer flow, and post‑purchase expansion. Together they
          behave like an always‑on revenue room.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div className="mini-card bg-slate-950/80">
            <p className="mini-label">Lead Hacker</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-200">
              <li>▸ Pipeline snapshots &amp; 30‑day plans</li>
              <li>▸ Agent‑ready task queues</li>
              <li>▸ Channel &amp; budget recommendations</li>
            </ul>
          </div>
          <div className="mini-card bg-slate-950/80">
            <p className="mini-label">Funnel Hacker</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-200">
              <li>▸ Offer &amp; page teardown matrix</li>
              <li>▸ Upsell &amp; retention flows</li>
              <li>▸ CRO test backlog, ordered by impact</li>
            </ul>
          </div>
        </div>

        <button className="button-primary mt-6">
          Get on the early access list
        </button>
      </div>

      <div className="mini-card flex flex-col justify-between bg-slate-950/70">
        <div>
          <p className="mini-label">How founders use it</p>
          <ul className="mt-2 space-y-2 text-xs text-slate-200">
            <li>▸ Run a snapshot before quarterly planning.</li>
            <li>▸ Feed the output directly to your media buyers and closers.</li>
            <li>▸ Wire agents to execute when your team is offline.</li>
          </ul>
        </div>
        <p className="mt-4 text-[0.7rem] text-slate-400">
          This page is a live demo. The console above is wired to the same
          system that powers our internal Hacker Stack deployments.
        </p>
      </div>
    </section>
  );
}
