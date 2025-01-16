import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App.tsx'
import { GlobalStyled } from '@styles/GlobalStyled.ts'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <GlobalStyled />
      <App />
    </StrictMode>
  </BrowserRouter>,
)
