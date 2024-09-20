import { useState } from "react"
import ThemeButton from "/src/components/ThemeButton"
import Home from "/src/pages/Home"

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <Home />
      <ThemeButton
        isDarkMode={darkMode}
        toggle={() => setDarkMode(!darkMode)}
      />
    </div>
  )
}

export default App
