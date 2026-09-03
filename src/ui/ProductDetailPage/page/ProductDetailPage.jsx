import { Link, useParams } from 'react-router-dom'
import { useProduct } from '../../../features/products/hooks/useProduct'
import { useCartStore } from '../../../features/cart/store/cartStore'
import { RequestStatus } from '../../shared/components/RequestStatus'
import { useToastStore } from '../../shared/components/Toaster'
import { LogoIcon } from '../../shared/icons'
import { ProductSummary } from '../components/ProductSummary'
import { ProductSpecs } from '../components/ProductSpecs'
import { ProductActions } from '../components/ProductActions'

function ProductDetailPage() {
  const { productId } = useParams()
  const { product, loading, error } = useProduct(productId)
  const addProduct = useCartStore((state) => state.addProduct)
  const isAdding = useCartStore((state) => state.adding)
  const addToast = useToastStore((state) => state.addToast)

  if (loading || error) {
    return (
      <RequestStatus
        loading={loading}
        error={error}
        loadingMessage="Cargando producto…"
        errorMessage="No se pudo cargar el producto. Inténtalo de nuevo más tarde."
      />
    )
  }

  const handleAddToCart = async (payload) => {
    try {
      await addProduct(payload)
      addToast(`${product.brand} ${product.model} añadido al carrito`)
    } catch {
      addToast('No se pudo añadir el producto al carrito', 'error')
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        <span aria-hidden="true">←</span> Volver al listado
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-8">
          {product.imgUrl ? (
            <img
              src={product.imgUrl}
              alt={`${product.brand} ${product.model}`}
              className="max-h-96 w-full max-w-xs object-contain"
            />
          ) : (
            <div className="flex aspect-3/4 w-full max-w-xs items-center justify-center rounded-xl bg-linear-to-br from-slate-100 to-slate-200 text-slate-300">
              <LogoIcon className="h-24 w-24" />
            </div>
          )}
        </div>

        <div>
          <ProductSummary product={product} />
          <ProductSpecs product={product} />
          <ProductActions
            product={product}
            onAddToCart={handleAddToCart}
            isAdding={isAdding}
          />
        </div>
      </div>
    </main>
  )
}

export default ProductDetailPage
