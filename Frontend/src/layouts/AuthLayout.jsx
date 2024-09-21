import { PropTypes } from "prop-types"
import ThemeButton from "/src/components/ThemeButton"
import { useState, useContext } from 'react'
import Auth from "/src/components/Auth"
import { Context } from "/src/context"
import { Navigate } from "react-router-dom"

const AuthLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark') === 'true')
  const [user] = useContext(Context)

  if (user.loading) {
    return <Auth />
  }
  if (user.loggedIn) {
    return <Navigate to="/home" replace={true} />
  }

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <div className="relative min-h-screen w-screen bg-gray-200 dark:bg-[#040e11]">
        <div>
          {children}
        </div>
      </div>
      <Auth />
      <ThemeButton
        isDarkMode={darkMode}
        toggle={
          () => {
            setDarkMode(!darkMode)
            localStorage.setItem('dark', !darkMode)
          }
        }
      />
    </div>

  )
}

AuthLayout.propTypes = {
  children: PropTypes.node,
}

export default AuthLayout
