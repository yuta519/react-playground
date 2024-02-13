import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import CountriesDropdownMenu from './pages/CountriesDropdownMenu'
import CurrencyConverterPage from './pages/CurrencyConverterPage'
import CounterWithProps from './pages/CounterWithProps.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App/>},
  { path: '/test', element: <App/> },
  { path: '/countries', element: <CountriesDropdownMenu/> },
  { path: '/counter_with_props', element: <CounterWithProps/> },
  { path: '/currency_converter', element: <CurrencyConverterPage/> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
