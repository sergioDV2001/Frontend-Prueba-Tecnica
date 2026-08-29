import { Link } from 'react-router-dom'
import { productDetailPath } from '../../../shared/router/routes'
import { LogoIcon } from '../../../shared/icons'

export function ProductItem({ product }) {
  return (
    <li>
      <Link
        to={productDetailPath(product.id)}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
      >
        <div className="flex aspect-[3/4] items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-300">
          <LogoIcon className="h-16 w-16" />
        </div>
        <div className="flex flex-1 flex-col p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            {product.brand}
          </p>
          <h3 className="mt-0.5 font-semibold text-slate-800">
            {product.model}
          </h3>
          <p className="mt-auto pt-3 text-lg font-bold text-indigo-600">
            {product.price} €
          </p>
        </div>
      </Link>
    </li>
  )
}
