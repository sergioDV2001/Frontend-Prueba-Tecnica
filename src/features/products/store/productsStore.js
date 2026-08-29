import { create } from 'zustand'
import { getProducts } from '../services/productService'

export const useProductsStore = create((set, get) => ({
  products: [],
  loading: true,
  error: null,
  loaded: false,
  fetching: false,
  fetchProducts: async () => {
    if (get().loaded || get().fetching) {
      return
    }

    set({ fetching: true, loading: true, error: null })

    try {
      const products = await getProducts()
      set({ products, loaded: true })
    } catch (error) {
      set({ error })
    } finally {
      set({ loading: false, fetching: false })
    }
  },
}))
