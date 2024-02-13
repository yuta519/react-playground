import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import { Theme, ThemeContext } from './Context';
import ContextPage from './pages/ContextPage'
import CountriesDropdownMenu from './pages/CountriesDropdownMenu'
import CurrencyConverterPage from './pages/CurrencyConverterPage'
import CounterWithProps from './pages/CounterWithProps.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App/>},
  { path: '/test', element: <App/> },
  { path: '/countries', element: <CountriesDropdownMenu/> },
  { path: '/counter_with_props', element: <CounterWithProps/> },
  { path: '/context', element: <ContextPage /> },
  { path: '/currency_converter', element: <CurrencyConverterPage /> },
])

const Main = () => {
  const [theme, setTheme] = useState<Theme>('light')
  const themeValue = { theme, update: (theme: Theme) => setTheme(theme) }

  return (
      <ThemeContext.Provider value={themeValue}>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </ThemeContext.Provider>
  )
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />, )

