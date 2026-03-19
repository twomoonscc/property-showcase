/**
 * @param {{ eyebrow: string, title: React.ReactNode, subtitle?: string, className?: string }} props
 */
export default function SectionHeader({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`mb-16 ${className}`}>
      <p className="reveal eyebrow">
        {eyebrow}
      </p>
      <h2
        className="reveal reveal-delay-1 font-display font-normal leading-[1.1] text-text-primary mt-4"
        style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="reveal reveal-delay-2 text-text-secondary mt-4 text-[16px]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
