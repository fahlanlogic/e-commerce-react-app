import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login-page.jsx'
import RegisterPage from './pages/register-page.jsx'
import ErrorPage from './pages/error-404'
import ProductsPage from './pages/products-page'
import ProfilePage from './pages/profile-page'
import DetailProductPage from './pages/detail-product-page'
import { Provider } from 'react-redux'
import store from './store'
import DarkModeContextProvider from './context/darkMode'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World!</h1>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/products',
    element: <ProductsPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/product/:id',
    element: <DetailProductPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router}/>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
