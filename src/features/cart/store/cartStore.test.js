import { useCartStore } from './cartStore'
import { addToCart } from '../services/cartService'

vi.mock('../services/cartService')

beforeEach(() => {
  useCartStore.setState({ count: 0, adding: false })
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('addProduct fija el contador devuelto por el servicio', async () => {
  addToCart.mockResolvedValue(3)

  const result = await useCartStore
    .getState()
    .addProduct({ id: '1', colorCode: 1, storageCode: 1 })

  expect(result).toBe(3)
  expect(useCartStore.getState().count).toBe(3)
})

test('addProduct propaga el error y no cambia el contador', async () => {
  addToCart.mockRejectedValue(new Error('network error'))
  useCartStore.setState({ count: 2 })

  await expect(
    useCartStore.getState().addProduct({ id: '1', colorCode: 1, storageCode: 1 }),
  ).rejects.toThrow('network error')

  expect(useCartStore.getState().count).toBe(2)
})
