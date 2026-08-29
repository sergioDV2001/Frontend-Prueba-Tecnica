import { create } from 'zustand'
import { addToCart } from '../services/cartService'

export const useCartStore = create((set) => ({
  count: 0,
  addProduct: async (payload) => {
    const count = await addToCart(payload)
    set({ count })
    return count
  },
}))
