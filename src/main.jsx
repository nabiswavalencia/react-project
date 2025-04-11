import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import './styles.css'
import App from './App.jsx'
import './i18n'; // Import the i18n configuration

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
