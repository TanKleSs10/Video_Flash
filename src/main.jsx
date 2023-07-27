import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { MyContextProvider } from './context/MyContext'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>
)
