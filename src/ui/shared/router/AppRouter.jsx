import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../layout/App'
import { ProductListPage } from '../../ProductListPage'
import { ProductDetailPage } from '../../ProductDetailPage'
import { NotFoundPage } from '../../NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    handle: { crumb: () => ({ label: 'Productos', to: '/' }) },
    children: [
      { index: true, element: <ProductListPage /> },
      {
        path: 'product/:productId',
        element: <ProductDetailPage />,
        handle: { crumb: () => ({ label: 'Detalle' }) },
      },
      {
        path: '*',
        element: <NotFoundPage />,
        handle: { crumb: () => ({ label: 'Página no encontrada' }) },
      },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
