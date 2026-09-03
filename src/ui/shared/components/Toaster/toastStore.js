import { create } from 'zustand'

let nextId = 0

export const useToastStore = create((set) => ({
  toasts: [],
  addToast: (message, variant = 'success') => {
    const id = ++nextId
    set((state) => ({ toasts: [...state.toasts, { id, message, variant }] }))
    return id
  },
  removeToast: (id) => {
    set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) }))
  },
}))
