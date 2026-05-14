import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TagManager from 'react-gtm-module'

// Konfigurasi GTM Non-blocking
const tagManagerArgs = {
    gtmId: 'GTM-KJN7WLZM' 
}

TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
