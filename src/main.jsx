import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPage from './pages/login.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import ProductsPage from './pages/products.jsx';
import ItemsPage from './pages/item/index.jsx';
import FormItemPage from './pages/item/form.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <ErrorPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/user",
    element: <ItemsPage />,
  },
  {
    path: "/user/edit/:id",
    element: <FormItemPage />,
  },
  {
    path: "/user/add",
    element: <FormItemPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
