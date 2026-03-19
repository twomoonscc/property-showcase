import { tickerItems } from '@/lib/data/ticker'

export default function TickerTape() {
  // Duplicate for seamless loop
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div
      id="ticker"
      aria-hidden="true"
      className="h-14 bg-bg-elevated overflow-hidden border-t border-border-subtle border-b flex items-center"
    >
      <div
        className="flex items-center whitespace-nowrap"
        style={{ animation: 'tickerScroll 35s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-6 text-[12px] font-semibold tracking-[0.1em] uppercase text-text-secondary"
          >
            <span className="w-1.5 h-1.5 bg-brand rotate-45 shrink-0 inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
