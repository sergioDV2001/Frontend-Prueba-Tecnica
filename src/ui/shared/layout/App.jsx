import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { useBreadcrumbs } from '../router/useBreadcrumbs'

function App() {
  const breadcrumbs = useBreadcrumbs()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header cartCount={3} breadcrumbs={breadcrumbs} />
      <Outlet />
    </div>
  )
}

export default App
