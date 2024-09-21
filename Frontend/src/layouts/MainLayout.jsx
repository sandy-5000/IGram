import { PropTypes } from "prop-types"
import Logo from "/src/components/Logo"
import ThemeButton from "/src/components/ThemeButton"
import { useState, useContext } from 'react'
import Auth from "/src/components/Auth"
import { Context } from "/src/context"
import { Navigate, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { RiSearchLine } from "react-icons/ri"
import { CgProfile } from "react-icons/cg"
import { FaBell } from "react-icons/fa"


const getNavIcon = ({ route, name, Icon }) => {
  return (
    <Link key={name} to={route} className="p-1 pl-0 ml-1">
      <div className="ring-2 ring-sky-600 dark:ring-sky-500 rounded-md px-2 flex">
        <div className="a-center">
          {Icon}
        </div>
        <span className="ml-1 text-slate-800 dark:text-slate-200">
          {name}
        </span>
      </div>
    </Link>
  )
}

const MainLayout = ({ children }) => {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark') === 'true')
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
        <div className="fixed bg-gray-200 dark:bg-[#040e11] w-screen z-10 h-[60px] flex justify-between border-b-2 border-gray-400 dark:border-gray-700">
          <div className="a-center pl-4 flex">
            <Logo className="h-full" />
            <div className="flex ml-4">
              {
                [
                  { name: 'Find', route: '/find', Icon: <RiSearchLine className="text-slate-800 dark:text-slate-200" /> },
                  { name: 'Profile', route: '/profile', Icon: <CgProfile className="text-slate-800 dark:text-slate-200" /> },
                  { name: '3', route: null, Icon: <FaBell className="text-slate-800 dark:text-slate-200" /> },
                ].map(x => getNavIcon(x))
              }
            </div>
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

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout
