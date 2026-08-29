export function ProductSummary({ product }) {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
        {product.brand}
      </p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">
        {product.model}
      </h1>
      <p className="mt-2 text-2xl font-bold text-indigo-600">
        {product.price} €
      </p>
    </div>
  )
}
