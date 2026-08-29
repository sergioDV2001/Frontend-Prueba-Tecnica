import { MOCK_PRODUCTS } from '../../../features/products/mocks/product.mocks'
import { SearchBar } from '../../shared/components/SearchBar'
import { useProductSearch } from '../hooks/useProductSearch'
import { ProductItem } from '../components/ProductItem'

function ProductListPage() {
  const { query, setQuery, filteredProducts } = useProductSearch(MOCK_PRODUCTS)

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-end justify-between">
        <p className="mb-4 text-sm text-slate-500">
          {filteredProducts.length} productos
        </p>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Buscar por marca o modelo..."
          className="mb-3 w-full"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="py-12 text-center text-slate-500">
          No hay productos que coincidan con &quot;{query}&quot;
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default ProductListPage
