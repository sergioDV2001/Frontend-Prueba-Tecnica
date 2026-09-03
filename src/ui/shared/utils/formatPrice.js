const priceFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
})

export function formatPrice(price) {
  const amount = Number(price)

  if (Number.isNaN(amount)) {
    return price
  }

  return priceFormatter.format(amount)
}
