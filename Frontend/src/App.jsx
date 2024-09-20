import { useState } from "react"
import ThemeButton from "./components/ThemeButton"

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <div className="relative min-h-screen w-screen bg-gray-200 dark:bg-[#040e11]">
        <div className="a-center h-screen w-full">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            IGram!
          </h1>
        </div>
      </div>
      <ThemeButton
        isDarkMode={darkMode}
        toggle={
          () => {
            setDarkMode(!darkMode)
          }
        }
      />
    </div>
  )
}

export default App
