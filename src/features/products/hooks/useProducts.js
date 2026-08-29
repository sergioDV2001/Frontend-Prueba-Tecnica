import { useEffect } from 'react'
import { useProductsStore } from '../store/productsStore'

export function useProducts() {
  const products = useProductsStore((state) => state.products)
  const loading = useProductsStore((state) => state.loading)
  const error = useProductsStore((state) => state.error)
  const fetchProducts = useProductsStore((state) => state.fetchProducts)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return { products, loading, error }
}
