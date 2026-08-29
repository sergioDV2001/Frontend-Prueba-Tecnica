const toText = (value) =>
  Array.isArray(value) ? value.filter(Boolean).join(', ') : value

export function mapProduct(product) {
  return {
    id: product.id,
    brand: product.brand,
    model: product.model,
    price: product.price,
    imgUrl: product.imgUrl,
    cpu: toText(product.cpu),
    ram: product.ram,
    os: product.os,
    displayResolution: product.displayResolution,
    battery: product.battery,
    primaryCamera: toText(product.primaryCamera),
    secondaryCamera: toText(product.secondaryCmera),
    dimensions: product.dimentions,
    weight: product.weight ? `${product.weight} g` : product.weight,
    options: product.options ?? { colors: [], storages: [] },
  }
}
