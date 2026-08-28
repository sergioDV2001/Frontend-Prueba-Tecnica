import { Link } from 'react-router-dom'
import { productDetailPath } from '../../shared/router/routes'
import { MOCK_PRODUCTS } from '../../../features/products/mocks/product.mocks'
import { LogoIcon, SearchIcon, CartIcon } from '../../shared/icons'

const MOCK_CART_COUNT = 3

function ProductListPage() {
  const products = MOCK_PRODUCTS

  return (
    <div className="min-h-screen bg-slate-50">
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
            <nav aria-label="breadcrumb" className="hidden sm:block">
              <ol className="flex items-center gap-2 text-sm text-slate-400">
                <li aria-current="page" className="text-slate-500">
                  Productos
                </li>
              </ol>
            </nav>
          </div>

          <button
            type="button"
            className="relative rounded-full p-2 text-slate-600 transition hover:bg-slate-100"
            aria-label={`Carrito, ${MOCK_CART_COUNT} artículos`}
          >
            <CartIcon className="h-6 w-6" />
            {MOCK_CART_COUNT > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-semibold text-white">
                {MOCK_CART_COUNT}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="relative mb-6 max-w-xl">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Buscar por marca o modelo..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <p className="mb-4 text-sm text-slate-500">
          {products.length} productos
        </p>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <li key={product.id}>
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
          ))}
        </ul>
      </main>
    </div>
  )
}

export default ProductListPage
