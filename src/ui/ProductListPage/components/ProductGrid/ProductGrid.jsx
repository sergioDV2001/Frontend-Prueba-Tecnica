import { StatusMessage } from '../../../shared/components/StatusMessage'
import { ProductItem } from '../ProductItem'

export function ProductGrid({ products, query, hasMore, sentinelRef }) {
  if (products.length === 0) {
    return (
      <StatusMessage>
        No hay productos que coincidan con &quot;{query}&quot;
      </StatusMessage>
    )
  }

  return (
    <>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>

      {hasMore && (
        <div
          ref={sentinelRef}
          className="py-8 text-center text-sm text-slate-400"
        >
          Cargando más…
        </div>
      )}
    </>
  )
}
