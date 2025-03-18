import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './globals.css'

import './demos/ipc'
import { Providers } from './shared'
// import './demos/node'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		<Providers>
   	 <App />
		</Providers>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
