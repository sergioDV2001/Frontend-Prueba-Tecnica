import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { ProductListPage } from './pages/ProductListPage'

test('renderiza la pagina de listado en la ruta principal', () => {
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

  expect(
    screen.getByRole('heading', { name: /listado de productos/i }),
  ).toBeInTheDocument()
})
