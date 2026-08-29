import { Link } from 'react-router-dom'
import { productDetailPath } from '../../shared/router/routes'
import { MOCK_PRODUCTS } from '../../../features/products/mocks/product.mocks'
import { LogoIcon } from '../../shared/icons'
import { SearchBar } from '../../shared/components/SearchBar'
import { useProductSearch } from '../hooks/useProductSearch'

function ProductListPage() {
  const { query, setQuery, filteredProducts } = useProductSearch(MOCK_PRODUCTS)

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex justify-between items-end">
        <p className="mb-4 text-sm text-slate-500">
          {filteredProducts.length} productos
        </p>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Buscar por marca o modelo..."
          className="w-full mb-3"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="py-12 text-center text-slate-500">
          No hay productos que coincidan con &quot;{query}&quot;
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
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
      )}
    </main>
  )
}

export default ProductListPage
