import { StatusMessage } from '../StatusMessage'

export function RequestStatus({
  loading,
  error,
  loadingMessage = 'Cargando…',
  errorMessage = 'Se produjo un error. Inténtalo de nuevo más tarde.',
}) {
  if (loading) {
    return <StatusMessage>{loadingMessage}</StatusMessage>
  }

  if (error) {
    return <StatusMessage tone="error">{errorMessage}</StatusMessage>
  }

  return null
}
