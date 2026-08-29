import { httpGet } from '../../shared/http/httpClient'
import { mapProduct } from '../mappers/productMapper'

export async function getProducts() {
  const products = await httpGet('/api/product')
  return products.map(mapProduct)
}

export async function getProductById(id) {
  const product = await httpGet(`/api/product/${id}`)
  return mapProduct(product)
}
