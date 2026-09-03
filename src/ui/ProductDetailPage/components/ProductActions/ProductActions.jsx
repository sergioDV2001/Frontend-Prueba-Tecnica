import { useState } from 'react'
import { OptionSelector } from '../../../shared/components/OptionSelector'

const firstCode = (options) => options[0]?.code

export function ProductActions({
  product,
  onAddToCart = () => {},
  isAdding = false,
}) {
  const { storages, colors } = product.options
  const [storageCode, setStorageCode] = useState(firstCode(storages))
  const [colorCode, setColorCode] = useState(firstCode(colors))

  const handleAdd = () => {
    onAddToCart({ id: product.id, colorCode, storageCode })
  }

  return (
    <section className="mt-8 space-y-5">
      <OptionSelector
        label="Almacenamiento"
        options={storages}
        value={storageCode}
        onChange={setStorageCode}
      />
      <OptionSelector
        label="Color"
        options={colors}
        value={colorCode}
        onChange={setColorCode}
      />
      <button
        type="button"
        onClick={handleAdd}
        disabled={isAdding}
        className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {isAdding ? 'Añadiendo…' : 'Añadir al carrito'}
      </button>
    </section>
  )
}
