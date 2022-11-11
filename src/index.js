import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './GlobalStyles/base.scss'

//Context API
import { AppProvider } from './context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
)
