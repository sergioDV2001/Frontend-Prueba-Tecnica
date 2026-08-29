import { useToastStore } from './toastStore'

beforeEach(() => {
  useToastStore.setState({ toasts: [] })
})

test('añade un toast con el mensaje indicado', () => {
  useToastStore.getState().addToast('Producto añadido')

  expect(useToastStore.getState().toasts).toEqual([
    expect.objectContaining({ message: 'Producto añadido' }),
  ])
})

test('elimina un toast por su id', () => {
  const id = useToastStore.getState().addToast('Producto añadido')
  useToastStore.getState().removeToast(id)

  expect(useToastStore.getState().toasts).toHaveLength(0)
})
