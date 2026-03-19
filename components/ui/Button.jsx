/**
 * Polymorphic button/link component.
 * @param {{ variant?: 'primary' | 'outline', href?: string, children: React.ReactNode, className?: string, style?: React.CSSProperties, onClick?: () => void, type?: string }} props
 */
export default function Button({ variant = 'primary', href, children, className = '', style = {}, onClick, type = 'button', ...rest }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-pill)',
    padding: '16px 36px',
    transition: 'background 0.2s, color 0.2s, transform 0.15s, box-shadow 0.2s',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'var(--font-body)',
    border: 'none',
  }

  const primaryStyle = {
    ...base,
    background: 'var(--brand)',
    color: '#0A0A0A',
    ...style,
  }

  const outlineStyle = {
    ...base,
    background: 'transparent',
    border: '1px solid var(--brand)',
    color: 'var(--brand)',
    padding: '15px 36px',
    ...style,
  }

  const mergedStyle = variant === 'primary' ? primaryStyle : outlineStyle

  if (href) {
    return (
      <a href={href} style={mergedStyle} className={className} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} style={mergedStyle} className={className} {...rest}>
      {children}
    </button>
  )
}
