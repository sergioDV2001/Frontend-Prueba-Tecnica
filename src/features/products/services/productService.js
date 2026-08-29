import { httpGet } from '../../shared/http/httpClient'
import { mapProduct } from '../mappers/productMapper'
import { readCache, writeCache } from '../../shared/cache/cacheStorage'
import { STORAGE_KEYS } from '../../shared/config'

export async function getProducts() {
  const cached = readCache(STORAGE_KEYS.productsCache)
  if (cached) {
    return cached
  }

  const products = await httpGet('/api/product')
  const mapped = products.map(mapProduct)
  writeCache(STORAGE_KEYS.productsCache, mapped)
  return mapped
}

export async function getProductById(id) {
  const cacheKey = `${STORAGE_KEYS.productCache}:${id}`
  const cached = readCache(cacheKey)
  if (cached) {
    return cached
  }

  const product = await httpGet(`/api/product/${id}`)
  const mapped = mapProduct(product)
  writeCache(cacheKey, mapped)
  return mapped
}
