import { useParams } from 'react-router-dom'

function ProductDetailPage() {
  const { productId } = useParams()

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-800">
        Detalle del producto
      </h1>
      <p className="mt-2 text-slate-500">
        Producto seleccionado: <span className="font-mono">{productId}</span> (Tarea
        3).
      </p>
    </section>
  )
}

export default ProductDetailPage
