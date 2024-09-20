import { PropTypes } from "prop-types"
import Logo from "/src/components/Logo"
import ThemeButton from "/src/components/ThemeButton"
import { useState } from 'react'

const MainLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <div className="relative min-h-screen w-screen bg-gray-200 dark:bg-[#040e11]">
        <div className="fixed w-screen z-10 h-[60px] flex justify-between border-b-2 border-gray-400 dark:border-gray-700">
          <div className="a-center pl-4">
            <Logo />
          </div>
          <div></div>
        </div>
        <div className="pt-[60px]">
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

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
