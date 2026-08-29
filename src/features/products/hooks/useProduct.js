import { useEffect } from 'react'
import { useProductDetailStore } from '../store/productDetailStore'

export function useProduct(id) {
  const product = useProductDetailStore((state) => state.byId[id])
  const error = useProductDetailStore((state) => state.errorById[id])
  const fetchProduct = useProductDetailStore((state) => state.fetchProduct)

  useEffect(() => {
    fetchProduct(id)
  }, [fetchProduct, id])

  return { product, loading: !product && !error, error: error ?? null }
}
