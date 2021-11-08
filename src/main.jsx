import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './Configs'

ReactDOM.render(
  <React.StrictMode>
    <Router forceRefresh={true}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
