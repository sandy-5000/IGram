import React, {  useState } from "react";
import logo from "../../assets/logo.png";
import { MuiOtpInput } from "mui-one-time-password-input";

const EmailOTP = () => {
  const [otpD, setOtp] = React.useState("");

//   const handleChange = (newValue) => {
//     setOtp(newValue);
//   };
 


  return (
    <>
      <div className=" h-screen w-full relative flex flex-row justify-between">
        <div className="w-11/12 absolute top-[10%] sm:w-full md:w-full mdl:w-full">
          <div className="w-[40%] flex flex-col justify-center items-center sm:w-full md:w-full mdl:w-full">
            {/* <img src={logo} className="w-[8rem] h-[8rem]" /> */}
            <p className="text-[#D11D65] font-bold mt-10">OTP Verification</p>
            <p className="text-[#D11D65] font-bold mt-10 sm:text-center">
              OTP send to 
            </p>
            <div className="w-7/12 sm:w-full rounded-lg flex flex-col gap-y-5 h-full items-center mt-7 md:w-4/12 mdl:w-5/12">
              {/* <OTPInput value={OTP} onChange={setOTP} numInputs={4}  renderSeparator={<span></span>}  renderInput={(props) => <input {...props} />} /> */}
              <MuiOtpInput
                value={otpD}
                length={6}
                onChange={(value) => {
                  const sanitizedValue = value.replace(/[^0-9]/g, " ");
                  setOtp(sanitizedValue);
                }}
                width={1}
                autoFocus
                className="sm:w-6/12 dark:text-[#ffff]"
              />
              <button
                className="rounded w-9/12 h-[35px] bg-[#642F0D] text-white sm:w-10/12"
                // onClick={handleOTP}
              >
                Continue
              </button>
              {/* <p>Re-send the code in 0:20</p> */}
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};
export default EmailOTP;