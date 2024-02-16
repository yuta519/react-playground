import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import './index.css';
import { Theme, ThemeContext } from './Context';
import store from './state/store';
import ApiCall from './pages/ApiCall';
import Auth from './pages/AuthWithUseReducer.tsx';
import ContextPage from './pages/ContextPage';
import CountriesDropdownMenu from './pages/CountriesDropdownMenu';
import CurrencyConverterPage from './pages/CurrencyConverterPage';
import CounterWithProps from './pages/CounterWithProps.tsx';
import IncrementWithUseRef from './pages/IncrementWithUseRef';
import InfiniteLoop from './pages/InfiniteLoop.tsx';
import InfiniteScroll from './pages/InfiniteScroll';
import PaginatedList from'./pages/PagenatedList';
import Stopwatch from './pages/Stopwatch';
import Timer from './pages/CountUpBySecond';
import Weather from './pages/Weather';

const router = createBrowserRouter([
  { path: '/', element: <App />},
  { path: '/test', element: <App /> },
  { path: '/auth', element: <Auth /> },
  { path: '/countries', element: <CountriesDropdownMenu /> },
  { path: '/counter_with_props', element: <CounterWithProps /> },
  { path: '/context', element: <ContextPage /> },
  { path: '/currency_converter', element: <CurrencyConverterPage /> },
  { path: '/call_api', element: <ApiCall /> },
  { path: '/increment_with_useref', element: <IncrementWithUseRef /> },
  { path: '/paginated_list', element: <PaginatedList /> },
  { path: '/infinite_loop', element: <InfiniteLoop /> },
  { path: '/infinite_scroll', element: <InfiniteScroll /> },
  { path: '/stopwatch', element: <Stopwatch /> },
  { path: '/timer', element: <Timer /> },
  { path: '/weather', element: <Weather /> },
])

const Main = () => {
  const [theme, setTheme] = useState<Theme>('light')
  const themeValue = { theme, update: (theme: Theme) => setTheme(theme) }

  return (
      <ThemeContext.Provider value={themeValue}>
        <React.StrictMode>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </React.StrictMode>
      </ThemeContext.Provider>
  )
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />, )

