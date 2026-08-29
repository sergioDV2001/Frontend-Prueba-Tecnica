import { Link } from 'react-router-dom'
import { LogoIcon, CartIcon } from '../../icons'
import { Breadcrumbs } from '../Breadcrumbs'

export function Header({ cartCount = 0, breadcrumbs = [] }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-slate-800"
          >
            <LogoIcon className="h-6 w-6 text-indigo-600" />
            <span>Mobile Store</span>
          </Link>
          <Breadcrumbs items={breadcrumbs} className="hidden sm:block" />
        </div>

        <button
          type="button"
          className="relative rounded-full p-2 text-slate-600 transition hover:bg-slate-100"
          aria-label={`Carrito, ${cartCount} artículos`}
        >
          <CartIcon className="h-6 w-6" />
          {cartCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-semibold text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
