import { PropTypes } from "prop-types"
import Logo from "/src/components/Logo"
import ThemeButton from "/src/components/ThemeButton"
import { useState, useContext } from 'react'
import Auth from "/src/components/Auth"
import { Context } from "/src/context"
import { Navigate, useNavigate } from "react-router-dom"

const MainLayout = ({ children }) => {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(true)
  const [user, setUser] = useContext(Context)

  if (user.loading) {
    return <Auth />
  }
  if (!user.loggedIn) {
    return <Navigate to="/login" replace={true} />
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser({
      loggedIn: false,
      loading: false,
      data: undefined,
    })
    navigate('/login', { replace: true })
  }

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <div className="relative min-h-screen w-screen bg-gray-200 dark:bg-[#040e11]">
        <div className="fixed w-screen z-10 h-[60px] flex justify-between border-b-2 border-gray-400 dark:border-gray-700">
          <div className="a-center pl-4">
            <Logo />
          </div>
          <div className="pr-10 v-center">
            <button
              onClick={logout}
              className="ring-2 ring-sky-500 rounded px-2 py-1 text-slate-800 dark:text-slate-200"
            >Logout</button>
          </div>
        </div>
        <div className="pt-[60px]">
          {children}
        </div>
      </div>
      <Auth />
      <ThemeButton
        isDarkMode={darkMode}
        toggle={() => setDarkMode(!darkMode)}
      />
    </div>

  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
