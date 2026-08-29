import { Link } from 'react-router-dom'
import { MOCK_PRODUCT_DETAIL } from '../../../features/products/mocks/product-detail.mocks'
import { LogoIcon } from '../../shared/icons'
import { buildProductSpecs } from '../utils/buildProductSpecs'

function ProductDetailPage() {
  const product = MOCK_PRODUCT_DETAIL
  const specs = buildProductSpecs(product)

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
          <div className="flex aspect-[3/4] w-full max-w-xs items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-300">
            <LogoIcon className="h-24 w-24" />
          </div>
        </div>

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

          <section className="mt-8 space-y-5">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-slate-800">
                Almacenamiento
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.options.storages.map((storage, index) => (
                  <button
                    key={storage.code}
                    type="button"
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                      index === 0
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {storage.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold text-slate-800">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.options.colors.map((color, index) => (
                  <button
                    key={color.code}
                    type="button"
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                      index === 0
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 sm:w-auto sm:px-10"
            >
              Añadir al carrito
            </button>
          </section>
        </div>
      </div>
    </main>
  )
}

export default ProductDetailPage
