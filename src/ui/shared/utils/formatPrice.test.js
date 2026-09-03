import { formatPrice } from './formatPrice'

test('formatea un número como euros', () => {
  const formatted = formatPrice(170)

  expect(formatted).toMatch(/170/)
  expect(formatted).toMatch(/€/)
})

test('acepta un precio en formato string', () => {
  expect(formatPrice('809')).toMatch(/809/)
})

test('devuelve el valor original cuando no es numérico', () => {
  expect(formatPrice('n/a')).toBe('n/a')
})
