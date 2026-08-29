import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { ProductListPage } from '../../ProductListPage'

vi.mock('../../../features/products/services/productService', () => ({
  getProducts: () =>
    Promise.resolve([
      { id: '1', brand: 'Apple', model: 'iPhone 13', price: '809' },
    ]),
  getProductById: () => Promise.resolve({}),
}))

test('renderiza el listado de productos en la ruta principal', async () => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <App />,
        children: [{ index: true, element: <ProductListPage /> }],
      },
    ],
    { initialEntries: ['/'] },
  )

  render(<RouterProvider router={router} />)

  expect(screen.getByRole('link', { name: /mobile store/i })).toBeInTheDocument()
  expect(await screen.findByText('iPhone 13')).toBeInTheDocument()
})
