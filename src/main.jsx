import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import UsernameProvider from './components/context/usercontext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsernameProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </UsernameProvider>
  </React.StrictMode>
)
