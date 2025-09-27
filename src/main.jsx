import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from "./components/FormPage/Language/LanguageContext.jsx";
import './assets/css/index.css'
import './assets/css/tailwind.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
