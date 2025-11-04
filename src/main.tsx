import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css' // Import theme first to override Bootstrap
import './styles/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
