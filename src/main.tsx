// dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
// styles
import { GlobalStyle } from './assets/styles/globalStyle'
// routes
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <span className='under_development'>Em desenvolvimento</span>
  </React.StrictMode>,
)
