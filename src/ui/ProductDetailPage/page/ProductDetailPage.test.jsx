import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ProductDetailPage from './ProductDetailPage'
import { getProductById } from '../../../features/products/services/productService'
import { useProductDetailStore } from '../../../features/products/store/productDetailStore'

vi.mock('../../../features/products/services/productService')

beforeEach(() => {
  useProductDetailStore.setState({ byId: {}, errorById: {}, pendingIds: {} })
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
    </MemoryRouter>,
  )
}

test('muestra el detalle del producto cuando la petición tiene éxito', async () => {
  getProductById.mockResolvedValue({
    id: '1',
    brand: 'Apple',
    model: 'iPhone 13',
    price: '809',
    options: {
      colors: [{ code: 1, name: 'Negro' }],
      storages: [{ code: 1, name: '128 GB' }],
    },
  })

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
