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

```
src/
  main.jsx            # Punto de entrada (monta el Router)
  App.jsx             # Layout raíz
  index.css           # Estilos globales + taailwind
  router/             # Definición de rutas y provider
  pages/              # Vistas: ProductListPage, ProductDetailPage
  constants/          # Configuración (URL API, claves de storage)
  test/               # Configuración de tests
```