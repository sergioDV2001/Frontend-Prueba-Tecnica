import { useMatches } from 'react-router-dom'

export function useBreadcrumbs() {
  const matches = useMatches()

  return matches
    .filter((match) => typeof match.handle?.crumb === 'function')
    .map((match) => match.handle.crumb(match))
}
