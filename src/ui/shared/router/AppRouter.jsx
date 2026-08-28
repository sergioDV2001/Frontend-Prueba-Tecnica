import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../layout/App'
import { ProductListPage } from '../../ProductListPage'
import { ProductDetailPage } from '../../ProductDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ProductListPage /> },
      { path: 'product/:productId', element: <ProductDetailPage /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
