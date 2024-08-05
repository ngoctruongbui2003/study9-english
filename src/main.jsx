import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <Provider store={store}>
        <App />
      </Provider>
    </CssBaseline>
  </React.StrictMode>,
)
