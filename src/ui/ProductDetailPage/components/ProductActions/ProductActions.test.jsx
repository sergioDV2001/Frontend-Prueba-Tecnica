import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductActions } from './ProductActions'

const product = {
  id: '1',
  options: {
    storages: [
      { code: 1, name: '128 GB' },
      { code: 2, name: '256 GB' },
    ],
    colors: [
      { code: 1, name: 'Negro' },
      { code: 2, name: 'Azul' },
    ],
  },
}

test('añade con la primera opción de cada selector por defecto', async () => {
  const onAddToCart = vi.fn()
  render(<ProductActions product={product} onAddToCart={onAddToCart} />)

  await userEvent.click(screen.getByRole('button', { name: /añadir/i }))

  expect(onAddToCart).toHaveBeenCalledWith({
    id: '1',
    colorCode: 1,
    storageCode: 1,
  })
})

test('actualiza la selección al elegir otras opciones', async () => {
  const onAddToCart = vi.fn()
  render(<ProductActions product={product} onAddToCart={onAddToCart} />)

  await userEvent.click(screen.getByRole('button', { name: '256 GB' }))
  await userEvent.click(screen.getByRole('button', { name: 'Azul' }))
  await userEvent.click(screen.getByRole('button', { name: /añadir/i }))

  expect(onAddToCart).toHaveBeenCalledWith({
    id: '1',
    colorCode: 2,
    storageCode: 2,
  })
})
