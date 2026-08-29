import { create } from 'zustand'
import { getProductById } from '../services/productService'

export const useProductDetailStore = create((set, get) => ({
  byId: {},
  errorById: {},
  pendingIds: {},
  fetchProduct: async (id) => {
    const { byId, pendingIds } = get()
    if (byId[id] || pendingIds[id]) {
      return
    }

    set((state) => ({
      pendingIds: { ...state.pendingIds, [id]: true },
      errorById: { ...state.errorById, [id]: null },
    }))

    try {
      const product = await getProductById(id)
      set((state) => ({ byId: { ...state.byId, [id]: product } }))
    } catch (error) {
      set((state) => ({ errorById: { ...state.errorById, [id]: error } }))
    } finally {
      set((state) => {
        const pendingIds = { ...state.pendingIds }
        delete pendingIds[id]
        return { pendingIds }
      })
    }
  },
}))
