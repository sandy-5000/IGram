import { PropTypes } from "prop-types"
import logoDark from "/src/assets/Logo-Dark.png"

const Logo = ({ size = 90 }) => {
  return (
    <div>
      <div style={{ width: size }} className="hover-effect relative a-center cursor-pointer">
        <img style={{ width: size }} className="z-[2] absolute left-0 right-0" src={logoDark} />
        <img style={{ width: size }} className="animate-pulse z-[2] absolute left-0 right-0" src={logoDark} />
      </div>
    </div>
  )
}

Logo.propTypes = {
  size: PropTypes.number
}

export default Logo
