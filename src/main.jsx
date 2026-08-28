import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ui/shared/styles/index.css'
import { AppRouter } from './ui/shared/router/AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
