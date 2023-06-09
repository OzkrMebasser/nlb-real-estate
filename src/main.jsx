import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import App from './App'
import './index.css'

//translations
import navbar_es from './translations/es/global.json';
import navbar_en from './translations/en/global.json';

i18next.init({
  interpolation: {escapeValues: false},
  lng: "en",
  resources: {
    es: {
      global: navbar_es,
    },
    en: {
      global: navbar_en,
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <I18nextProvider i18n={i18next}>  
    <App />
    </I18nextProvider>
  </React.StrictMode>
)
