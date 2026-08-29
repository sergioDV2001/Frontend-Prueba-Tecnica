import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { useBreadcrumbs } from '../router/useBreadcrumbs'
import { useCartStore } from '../../../features/cart/store/cartStore'

function App() {
  const breadcrumbs = useBreadcrumbs()
  const cartCount = useCartStore((state) => state.count)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header cartCount={cartCount} breadcrumbs={breadcrumbs} />
      <Outlet />
    </div>
  )
}

export default App
