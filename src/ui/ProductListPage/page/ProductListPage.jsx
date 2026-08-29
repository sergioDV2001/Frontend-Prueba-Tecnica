import { useProducts } from '../../../features/products/hooks/useProducts'
import { SearchBar } from '../../shared/components/SearchBar'
import { RequestStatus } from '../../shared/components/RequestStatus'
import { useProductSearch } from '../hooks/useProductSearch'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { ProductGrid } from '../components/ProductGrid'

function ProductListPage() {
  const { products, loading, error } = useProducts()
  const { query, setQuery, filteredProducts } = useProductSearch(products)
  const { visibleItems, hasMore, sentinelRef } =
    useInfiniteScroll(filteredProducts)

  if (loading || error) {
    return (
      <RequestStatus
        loading={loading}
        error={error}
        loadingMessage="Cargando productos…"
        errorMessage="No se pudieron cargar los productos. Inténtalo de nuevo más tarde."
      />
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Buscar por marca o modelo..."
          className="w-full mb-6"
        />

      <p className="mb-4 text-sm text-slate-500">
        {filteredProducts.length} productos
      </p>

      <ProductGrid
        products={visibleItems}
        query={query}
        hasMore={hasMore}
        sentinelRef={sentinelRef}
      />
    </main>
  )
}

export default ProductListPage
