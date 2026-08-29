import { mapProduct } from './productMapper'

test('normaliza los campos con typos y arrays del API', () => {
  const apiProduct = {
    id: 'x',
    brand: 'Acer',
    model: 'Iconia Talk S',
    price: '170',
    dimentions: '191.7 x 101 x 9.4 mm',
    secondaryCmera: ['2 MP', '720p'],
    primaryCamera: ['13 MP', 'autofocus'],
    weight: '260',
    options: { colors: [{ code: 1000, name: 'Black' }], storages: [] },
  }

  const result = mapProduct(apiProduct)

  expect(result.dimensions).toBe('191.7 x 101 x 9.4 mm')
  expect(result.secondaryCamera).toBe('2 MP, 720p')
  expect(result.primaryCamera).toBe('13 MP, autofocus')
  expect(result.weight).toBe('260 g')
})

test('usa opciones vacías cuando el producto no las trae', () => {
  const result = mapProduct({ id: 'x', brand: 'Acer', model: 'Z6' })

  expect(result.options).toEqual({ colors: [], storages: [] })
})
