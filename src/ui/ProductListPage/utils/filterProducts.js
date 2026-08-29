export function filterProducts(products, query) {
  const term = query.trim().toLowerCase()

  if (!term) {
    return products
  }

  return products.filter((product) =>
    `${product.brand} ${product.model}`.toLowerCase().includes(term),
  )
}
