import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Inc_dnc from './inc_dnc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inc_dnc />
 
  </StrictMode>,
)
