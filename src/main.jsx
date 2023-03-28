import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Form from './components/Form'
import Predict from './pages/Predict'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Predict/>
  </React.StrictMode>,
)
