import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import { ProductListPage } from '../pages/ProductListPage'
import { ProductDetailPage } from '../pages/ProductDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ProductListPage /> },
      { path: 'product/:id', element: <ProductDetailPage /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
