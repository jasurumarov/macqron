import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
const App = lazy(() => import('./App'))
import './global.css'

// Redux Toolkit
import { Provider } from 'react-redux'
import { store } from './context/store'

// Components
import LazyLoading from './components/lazyLoading/LazyLoading'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<LazyLoading />}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)