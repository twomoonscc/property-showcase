/**
 * Polymorphic button/link component.
 * @param {{ variant?: 'primary' | 'outline', href?: string, children: React.ReactNode, className?: string, onClick?: () => void, type?: string }} props
 */
export default function Button({ variant = 'primary', href, children, className = '', onClick, type = 'button', ...rest }) {
  const base = 'inline-flex items-center justify-center text-[13px] font-semibold tracking-[0.08em] uppercase rounded-pill px-9 py-4 transition-[background,color,transform,box-shadow] duration-200 cursor-pointer font-body border-none'

  const primaryClass = `${base} bg-brand text-bg-base`
  const outlineClass = `${base} bg-transparent border border-brand text-brand py-[15px]`

  const merged = `${variant === 'primary' ? primaryClass : outlineClass} ${className}`

  if (href) {
    return (
      <a href={href} className={merged} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={merged} {...rest}>
      {children}
    </button>
  )
}
