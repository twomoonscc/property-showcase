/**
 * @param {{ stats: Array<{ number: string, label: string }> }} props
 */
export default function StatRow({ stats }) {
  return (
    <div
      className="grid gap-0.5 border border-border-subtle rounded-card overflow-hidden"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))` }}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-bg-elevated py-9 px-8 text-center"
        >
          <span className="font-mono text-[40px] font-normal text-brand block mb-2">
            {stat.number}
          </span>
          <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-text-secondary">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
