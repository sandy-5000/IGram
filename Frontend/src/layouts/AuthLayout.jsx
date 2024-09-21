import { PropTypes } from "prop-types"
import ThemeButton from "/src/components/ThemeButton"
import { useState } from 'react'

const AuthLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <div className="relative min-h-screen w-screen bg-gray-200 dark:bg-[#040e11]">
        <div>
          {children}
        </div>
      </div>
      <ThemeButton
        isDarkMode={darkMode}
        toggle={() => setDarkMode(!darkMode)}
      />
    </div>

  )
}

AuthLayout.propTypes = {
  children: PropTypes.node,
}

export default AuthLayout
