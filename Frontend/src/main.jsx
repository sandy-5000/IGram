import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"
import './index.css'
import Home from "/src/pages/Home"
import Login from '/src/pages/Login'
import SignUp from '/src/pages/SignUp'
import EmailOTP from '/src/pages/OTP'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/reset-password',
    element: <EmailOTP />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
