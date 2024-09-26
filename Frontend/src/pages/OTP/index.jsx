import React, { useEffect, useContext } from "react"
import { MuiOtpInput } from "mui-one-time-password-input"
import backend from "/src/services/backend"
import { useNavigate } from "react-router-dom"
import { Context } from "/src/context"

const otp = ({ usermail, OTP }) => {
  const body = { userMail: usermail, OTP }
  backend.post('/api/user/otp', body)
    .then(({ data }) => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
}

const EmailOTP = () => {
  const navigate = useNavigate()
  const [user] = useContext(Context)
  const OTP = Math.floor(Math.random() * 1000000) + ''
  const [otpD, setOtp] = React.useState("")
  
  useEffect(() => {
    if (!user.loggedIn) {
      navigate("/login")
      return
    }
    const { usermail } = user.data
    otp({usermail, OTP})
  }, [])

  return (
      <div className=" h-screen w-full relative flex flex-row justify-between">
        <div className="w-11/12 absolute top-[10%] sm:w-full md:w-full mdl:w-full">
          <div className="w-[40%] flex flex-col justify-center items-center sm:w-full md:w-full mdl:w-full">
            <p className="text-sky-600 dark:text-sky-500 font-bold mt-10">OTP Verification</p>
            <p className="text-sky-600 dark:text-sky-500 font-bold mt-10 sm:text-center">
              OTP send to
            </p>
            <div className="w-7/12 sm:w-full rounded-lg flex flex-col gap-y-5 h-full items-center mt-7 md:w-4/12 mdl:w-5/12">
              {/* <OTPInput value={OTP} onChange={setOTP} numInputs={4}  renderSeparator={<span></span>}  renderInput={(props) => <input {...props} />} /> */}
              <MuiOtpInput
                value={otpD}
                length={6}
                onChange={(value) => {
                  const sanitizedValue = value.replace(/[^0-9]/g, " ")
                  setOtp(sanitizedValue)
                  console.log(sanitizedValue)
                }}
                width={1}
                autoFocus
                className="sm:w-6/12 dark:text-[#ffff]"
              />
              <button
                className="rounded mt-16 w-9/12 h-[35px] bg-sky-600 dark:bg-sky-500 text-white sm:w-10/12"
                onClick={() => {
                  console.log(otpD)
                  navigate("/home")
                }}
              >
                Continue
              </button>
              {/* <p>Re-send the code in 0:20</p> */}
            </div>
          </div>
        </div>
      </div>
  )
}

export default EmailOTP
