import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ProductDetailPage from './ProductDetailPage'
import { Toaster, useToastStore } from '../../shared/components/Toaster'
import { getProductById } from '../../../features/products/services/productService'
import { addToCart } from '../../../features/cart/services/cartService'
import { useProductDetailStore } from '../../../features/products/store/productDetailStore'
import { useCartStore } from '../../../features/cart/store/cartStore'

vi.mock('../../../features/products/services/productService')
vi.mock('../../../features/cart/services/cartService')

const PRODUCT = {
  id: '1',
  brand: 'Apple',
  model: 'iPhone 13',
  price: '809',
  options: {
    colors: [{ code: 1, name: 'Negro' }],
    storages: [{ code: 1, name: '128 GB' }],
  },
}

beforeEach(() => {
  useProductDetailStore.setState({ byId: {}, errorById: {}, pendingIds: {} })
  useCartStore.setState({ count: 0, adding: false })
  useToastStore.setState({ toasts: [] })
})

afterEach(() => {
  vi.restoreAllMocks()
})

function renderPage(id = '1') {
  render(
    <MemoryRouter initialEntries={[`/product/${id}`]}>
      <Routes>
        <Route path="/product/:productId" element={<ProductDetailPage />} />
      </Routes>
      <Toaster />
    </MemoryRouter>,
  )
}

test('muestra el detalle del producto cuando la petición tiene éxito', async () => {
  getProductById.mockResolvedValue(PRODUCT)

  renderPage('1')

  expect(
    await screen.findByRole('heading', { name: 'iPhone 13' }),
  ).toBeInTheDocument()
})

test('muestra un mensaje de error si la petición falla', async () => {
  getProductById.mockRejectedValue(new Error('network error'))

  renderPage('1')

  expect(
    await screen.findByText(/no se pudo cargar el producto/i),
  ).toBeInTheDocument()
})

test('muestra un toast de éxito al añadir al carrito', async () => {
  getProductById.mockResolvedValue(PRODUCT)
  addToCart.mockResolvedValue(1)

  renderPage('1')
  await screen.findByRole('heading', { name: 'iPhone 13' })
  await userEvent.click(
    screen.getByRole('button', { name: /añadir al carrito/i }),
  )

  expect(
    await screen.findByText(/iPhone 13 añadido al carrito/i),
  ).toBeInTheDocument()
})

test('muestra un toast de error y no el de éxito si falla añadir al carrito', async () => {
  getProductById.mockResolvedValue(PRODUCT)
  addToCart.mockRejectedValue(new Error('network error'))

  renderPage('1')
  await screen.findByRole('heading', { name: 'iPhone 13' })
  await userEvent.click(
    screen.getByRole('button', { name: /añadir al carrito/i }),
  )

  expect(
    await screen.findByText(/no se pudo añadir el producto al carrito/i),
  ).toBeInTheDocument()
  expect(screen.queryByText(/añadido al carrito/i)).toBeNull()
})
