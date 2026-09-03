import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
      <p className="text-6xl font-bold text-indigo-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-800">
        Página no encontrada
      </h1>
      <p className="mt-2 text-slate-500">
        La página que buscas no existe o se ha movido.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Volver al listado
      </Link>
    </main>
  )
}

export default NotFoundPage
