export default function HeroSceneFallback() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto flex items-center justify-center select-none" aria-hidden="true">
      {/* Outer Telemetry Ring */}
      <div className="absolute inset-4 rounded-full border border-[var(--border)] border-dashed animate-[spin_60s_linear_infinite]" />

      {/* Middle Concentric Ring */}
      <div className="absolute inset-16 rounded-full border border-[var(--border-strong)] opacity-60" />

      {/* Inner Technical Ring with 4 Accent Pips */}
      <div className="absolute inset-28 rounded-full border border-[var(--border)] relative">
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
        <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
        <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
      </div>

      {/* Center Procedural Core Iconography */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-strong)] shadow-[var(--shadow-floating)] backdrop-blur-md">
        <div className="w-16 h-16 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-center relative mb-3">
          <div className="w-8 h-8 rounded-lg border border-[var(--accent)] rotate-45 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
          </div>
          {/* Subtle crosshairs */}
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[var(--border)]" />
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[var(--border)]" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          SYSTEMS CORE
        </span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-muted)] mt-0.5">
          TELEMETRY ACTIVE
        </span>
      </div>

      {/* Fixed Telemetry Engineering Annotations */}
      <div className="absolute top-10 right-6 font-mono text-[10px] tracking-wider text-[var(--text-muted)] bg-[var(--surface)] px-2.5 py-1 rounded border border-[var(--border)] backdrop-blur-sm">
        <span className="text-[var(--accent)] mr-1.5">01 //</span>PRE-SALES
      </div>

      <div className="absolute bottom-16 right-4 font-mono text-[10px] tracking-wider text-[var(--text-muted)] bg-[var(--surface)] px-2.5 py-1 rounded border border-[var(--border)] backdrop-blur-sm">
        <span className="text-[var(--accent)] mr-1.5">02 //</span>SYSTEM DESIGN
      </div>

      <div className="absolute bottom-10 left-4 font-mono text-[10px] tracking-wider text-[var(--text-muted)] bg-[var(--surface)] px-2.5 py-1 rounded border border-[var(--border)] backdrop-blur-sm">
        <span className="text-[var(--accent)] mr-1.5">03 //</span>FIELD ENGINEERING
      </div>

      <div className="absolute top-16 left-6 font-mono text-[10px] tracking-wider text-[var(--text-muted)] bg-[var(--surface)] px-2.5 py-1 rounded border border-[var(--border)] backdrop-blur-sm">
        <span className="text-[var(--accent)] mr-1.5">04 //</span>DEPLOYMENT &amp; SUCCESS
      </div>
    </div>
  );
}
