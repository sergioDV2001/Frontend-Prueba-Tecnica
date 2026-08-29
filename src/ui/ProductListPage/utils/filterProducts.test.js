import { filterProducts } from './filterProducts'

const products = [
  { id: '1', brand: 'Apple', model: 'iPhone 13' },
  { id: '2', brand: 'Samsung', model: 'Galaxy S22' },
]

test('devuelve todos los productos cuando la búsqueda está vacía', () => {
  expect(filterProducts(products, '')).toHaveLength(2)
})

test('filtra por marca sin distinguir mayúsculas', () => {
  expect(filterProducts(products, 'apple')).toEqual([products[0]])
})

test('filtra por modelo', () => {
  expect(filterProducts(products, 'galaxy')).toEqual([products[1]])
})

test('devuelve una lista vacía si no hay coincidencias', () => {
  expect(filterProducts(products, 'nokia')).toEqual([])
})
