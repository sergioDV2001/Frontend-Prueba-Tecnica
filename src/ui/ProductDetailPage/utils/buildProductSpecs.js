import { formatPrice } from '../../shared/utils/formatPrice'

export function buildProductSpecs(product) {
  return [
    { label: 'Marca', value: product.brand },
    { label: 'Modelo', value: product.model },
    { label: 'Precio', value: formatPrice(product.price) },
    { label: 'CPU', value: product.cpu },
    { label: 'RAM', value: product.ram },
    { label: 'Sistema operativo', value: product.os },
    { label: 'Resolución de pantalla', value: product.displayResolution },
    { label: 'Batería', value: product.battery },
    { label: 'Cámara principal', value: product.primaryCamera },
    { label: 'Cámara secundaria', value: product.secondaryCamera },
    { label: 'Dimensiones', value: product.dimensions },
    { label: 'Peso', value: product.weight },
  ]
}
