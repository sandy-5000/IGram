import { PropTypes } from "prop-types"
import { MdOutlineWbSunny } from "react-icons/md"
import { RiMoonClearLine } from "react-icons/ri"

const ThemeButton = ({ isDarkMode, toggle }) => {
  return (
    <button
      className="w-10 h-10 a-center right-5 bottom-5 z-10 fixed rounded-md ring-2 ring-sky-600 dark:ring-sky-500 cursor-pointer"
      onClick={toggle}
    >
      <span className="text-slate-800 dark:text-slate-200">
        {isDarkMode ? <MdOutlineWbSunny size={20} /> : <RiMoonClearLine size={20} />}
      </span>
    </button>
  )
}

ThemeButton.propTypes = {
  isDarkMode: PropTypes.bool,
  toggle: PropTypes.any,
}

export default ThemeButton
