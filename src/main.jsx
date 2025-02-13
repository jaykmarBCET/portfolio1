import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Toaster} from 'react-hot-toast'
import CookieConsent from 'react-cookie-consent'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Toaster/>
    <App/>

    <CookieConsent debug  style={{background:"blue"}}  >Please set permission for cookies </CookieConsent>
    </>
  </StrictMode>,
)
