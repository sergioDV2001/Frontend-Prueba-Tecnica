import { render, screen, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductListPage from './ProductListPage'
import { getProducts } from '../../../features/products/services/productService'
import { useProductsStore } from '../../../features/products/store/productsStore'

vi.mock('../../../features/products/services/productService')

beforeEach(() => {
  useProductsStore.setState({
    products: [],
    loading: true,
    error: null,
    loaded: false,
    fetching: false,
  })
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

function renderPage() {
  render(
    <MemoryRouter>
      <ProductListPage />
    </MemoryRouter>,
  )
}

test('muestra los productos cuando la petición tiene éxito', async () => {
  getProducts.mockResolvedValue([
    { id: '1', brand: 'Apple', model: 'iPhone 13', price: '809' },
  ])

  renderPage()

  expect(await screen.findByText('iPhone 13')).toBeInTheDocument()
})

test('muestra un mensaje de error si la petición falla', async () => {
  getProducts.mockRejectedValue(new Error('network error'))

  renderPage()

  expect(
    await screen.findByText(/no se pudieron cargar los productos/i),
  ).toBeInTheDocument()
})

test('carga más productos al llegar al final (scroll infinito)', async () => {
  let triggerIntersection
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback) {
        triggerIntersection = () => callback([{ isIntersecting: true }])
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  )

  const many = Array.from({ length: 30 }, (_, index) => ({
    id: String(index),
    brand: 'Marca',
    model: `Modelo ${index}`,
    price: '100',
  }))
  getProducts.mockResolvedValue(many)

  renderPage()

  await screen.findByText('Modelo 0')
  expect(screen.queryByText('Modelo 20')).toBeNull()

  act(() => triggerIntersection())

  expect(await screen.findByText('Modelo 20')).toBeInTheDocument()
})
