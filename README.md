# Mobile Store — Front-End Test

Mini-aplicación para la compra de dispositivos móviles, desarrollada como prueba
técnica de front-end. Consta de dos vistas: listado de productos y detalle de
producto.

## Stack

- **[Vite](https://vite.dev/)** — bundler y servidor de desarrollo.
- **[React 19](https://react.dev/)** (JavaScript, sin TypeScript).
- **[React Router](https://reactrouter.com/)** — enrutado en cliente (SPA).
- **[Tailwind CSS v4](https://tailwindcss.com/)** — estilos utility-first.
- **[Zustand](https://zustand-demo.pmnd.rs/)** — gestión de estado global.
- **[Vitest](https://vitest.dev/)** + **[Testing Library](https://testing-library.com/)** — testing.
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** — calidad y formato.

## Requisitos previos

- Node.js >= 18 (probado con v24).

## Instalación

```bash
npm install
```

## Scripts disponibles

| Script               | Descripción                                   |
| -------------------- | --------------------------------------------- |
| `npm start`          | Arranca el servidor de desarrollo (modo dev). |
| `npm run dev`        | Alias de `npm start`.                         |
| `npm run build`      | Compila la aplicación para producción.        |
| `npm run preview`    | Sirve localmente el build de producción.      |
| `npm test`           | Ejecuta la suite de tests una vez.            |
| `npm run test:watch` | Ejecuta los tests en modo watch.              |
| `npm run lint`       | Analiza el código con ESLint.                 |
| `npm run format`     | Formatea el código con Prettier.              |

## Estructura del proyecto

El proyecto separa **presentación (`ui/`)** de **lógica y datos (`features/`)**:
`ui/` contiene todo lo relativo al frontend y `features/` toda la lógica de
negocio junto con la integración del API. Cada vista agrupa su `page`, sus
`components` y sus `utils`; lo transversal vive en la carpeta `shared` de cada
capa.

```
src/
  main.jsx                      # Punto de entrada (monta el Router)
  test/                         # Configuración de tests
  ui/                           # presentacion (todo el frontend)
    shared/                     #   Reutilizable en UI
      styles/                   #     Estilos globales + Tailwind
      icons/                    #     Iconos SVG
      components/               #     Componentes compartidos (Header, SearchBar…)
      router/                   #     Rutas y provider de navegación
      layout/                   #     Layout raíz (App)
    ProductListPage/            #   Vista PLP
      page/  components/  utils/ etc/
    ProductDetailPage/          #   Vista PDP
      page/  components/  utils/ etc/
  features/                     # LÓGICA + INTEGRACIÓN API
    shared/                     #   Config/utilidades transversales de la lógica
      config/                   #     URL del API, TTL de caché, claves de storage
    products/                   #   Datos y servicios de producto
      mocks/                    #     Datos de ejemplo (temporal hasta la API)
```