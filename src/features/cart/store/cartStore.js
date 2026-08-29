import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { addToCart } from '../services/cartService'
import { STORAGE_KEYS } from '../../shared/config'

export const useCartStore = create(
  persist(
    (set, get) => ({
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
    }),
    {
      name: STORAGE_KEYS.cartCount,
      partialize: (state) => ({ count: state.count }),
    },
  ),
)
