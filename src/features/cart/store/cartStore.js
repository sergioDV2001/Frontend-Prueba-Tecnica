import { create } from 'zustand'
import { addToCart } from '../services/cartService'

export const useCartStore = create((set, get) => ({
  count: 0,
  adding: false,
  addProduct: async (payload) => {
    set({ adding: true })

    try {
      const count = await addToCart(payload)
      set({ count })
      return count
    } catch {
      return get().count
    } finally {
      set({ adding: false })
    }
  },
}))
