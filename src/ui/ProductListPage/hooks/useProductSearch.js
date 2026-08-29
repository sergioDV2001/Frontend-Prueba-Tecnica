import { useMemo, useState } from 'react'
import { filterProducts } from '../utils/filterProducts'

export function useProductSearch(products) {
  const [query, setQuery] = useState('')

  const filteredProducts = useMemo(
    () => filterProducts(products, query),
    [products, query],
  )

  return { query, setQuery, filteredProducts }
}
