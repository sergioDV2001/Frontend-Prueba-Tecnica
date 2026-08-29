import { buildProductSpecs } from '../../utils/buildProductSpecs'

export function ProductSpecs({ product }) {
  const specs = buildProductSpecs(product)

  return (
    <section className="mt-8">
      <h2 className="mb-3 text-lg font-semibold text-slate-800">
        Especificaciones
      </h2>
      <dl className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="flex justify-between gap-4 border-b border-slate-100 py-2"
          >
            <dt className="text-sm text-slate-500">{spec.label}</dt>
            <dd className="text-right text-sm font-medium text-slate-800">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
