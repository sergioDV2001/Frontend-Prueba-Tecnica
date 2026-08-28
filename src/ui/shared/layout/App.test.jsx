import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { ProductListPage } from '../../ProductListPage'

test('renderiza la página de listado en la ruta principal', () => {
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
  expect(screen.getByText('iPhone 13')).toBeInTheDocument()
})
