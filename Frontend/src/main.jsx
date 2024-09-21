import { StrictMode, useState } from 'react'
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
import Chat from '/src/pages/Chat'
import Find from '/src/pages/Find'
import Profile from '/src/pages/Profile'
import { Context } from "/src/context"
import { PropTypes } from "prop-types"

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
  {
    path: '/find',
    element: <Find />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
])


// eslint-disable-next-line react-refresh/only-export-components
const StateProvider = ({ children }) => {
  const [user, setUser] = useState({
    loggedIn: false,
    loading: true,
    data: undefined,
  })
  return (
    <Context.Provider value={[user, setUser]}>
      {children}
    </Context.Provider>
  )
}

StateProvider.propTypes = {
  children: PropTypes.node,
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  </StrictMode>,
)
