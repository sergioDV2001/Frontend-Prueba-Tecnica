import { httpPost } from '../../shared/http/httpClient'

export async function addToCart({ id, colorCode, storageCode }) {
  const { count } = await httpPost('/api/cart', { id, colorCode, storageCode })
  return count
}
