import { readCache, writeCache } from './cacheStorage'

beforeEach(() => {
  localStorage.clear()
})

test('guarda y recupera un valor dentro de su tiempo de vida', () => {
  writeCache('clave', { total: 100 }, 1000)

  expect(readCache('clave')).toEqual({ total: 100 })
})

test('devuelve null cuando el valor ha expirado', () => {
  writeCache('clave', { total: 100 }, -1)

  expect(readCache('clave')).toBeNull()
})

test('devuelve null cuando no hay nada almacenado', () => {
  expect(readCache('inexistente')).toBeNull()
})
