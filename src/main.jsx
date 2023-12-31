import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Context } from './context/AppContext'
import { BrowserRouter } from 'react-router-dom'
BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>,
)
