import { Link } from 'react-router-dom'

export function Breadcrumbs({ items = [], className = '' }) {
  if (items.length === 0) {
    return null
  }

  return (
    <nav aria-label="breadcrumb" className={className}>
      <ol className="flex items-center gap-2 text-sm text-slate-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const isLink = Boolean(item.to) && !isLast

          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLink ? (
                <Link to={item.to} className="hover:text-slate-600">
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="text-slate-500"
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
