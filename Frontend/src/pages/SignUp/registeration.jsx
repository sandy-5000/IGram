import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";

import { useFormik } from "formik";
import { SignUp_Yup } from "./Yup.jsx";
import { FaRegEye } from "react-icons/fa";
import { Link, } from "react-router-dom";

const Initial_SignUpValues = {
  email: "",
  phonenumber: "",
  password: "",
  ReTypePassword: "",
};

const SignUp = () => {
  const [passWordVisible, setpassWordVisible] = useState(false);
  const [ReTypepassWordVisible, setReTypepassWordVisible] = useState(false);
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: Initial_SignUpValues,
    validationSchema: SignUp_Yup,
    onSubmit: (values) => {
   console.log(values)
  }});

  const handleVisible = () => {
    //for password
    setpassWordVisible((prev) => !prev);
  };
  const handleReTypePasswordVisible = () => {
    // for retype password
    setReTypepassWordVisible((prev) => !prev);
  };

  return (
    <>
          <div className="w-[40%] flex flex-col justify-center items-center sm:w-full mdl:w-full md:w-full ">
           
            <p className="text-[#D11D65] font-bold mt-10 xs:mt-2">Sign Up</p>
            <div className="w-7/12 lg:w-10/12 rounded-lg flex flex-col gap-y-2 h-full items-center mt-7 xs:mt-2 sm:w-10/12 mdl:w-7/12 md:w-6/12 mdl:gap-y-5 sm:mb-10">
              <div className="w-6/12">
                <input
                  name="email"
                  placeholder="Email"
                  className={`w-full pl-2 rounded h-[45px] ${
                    errors.email && touched.email
                      ? "border-red-400 border-2"
                      : "border-gray-200 border-2"
                  }`}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <small className="text-red-500 ">{errors.email}</small>
                ) : null}
              </div>
              <div className="w-6/12">
                <input
                type="number"
                  name="phonenumber"
                  placeholder="Phone Number"
                  className={`w-full pl-2 rounded h-[45px] ${
                    errors.phonenumber && touched.phonenumber
                      ? "border-red-400 border-2"
                      : "border-gray-200 border-2"
                  }`}
                  value={values.phonenumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ appearance: 'textfield' }} 
                />
                {errors.phonenumber && touched.phonenumber ? (
                  <small className="text-red-500 ">{errors.phonenumber}</small>
                ) : null}
              </div>
              <div className="w-6/12">
                <div className="relative w-full h-[45px]">
                  <input
                    name="password"
                    // type={${passWordVisible ? "text" : "password"}}
                    type="text"
                    placeholder="Password"
                    className={`w-full pl-2 rounded h-full relative ${
                      errors.password && touched.password
                        ? "border-red-400 border-2"
                        : "border-gray-200 border-2"
                    }`}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="absolute top-0 right-0 mt-4 mr-4">
                    {passWordVisible ? (
                      <FaRegEye onClick={handleVisible} />
                    ) : (
                      <FaRegEyeSlash onClick={handleVisible} />
                    )}
                  </div>
                </div>
                {errors.password && touched.password ? (
                  <span className="text-red-500 ">{errors.password}</span>
                ) : null}
              </div>
              <div className="w-6/12">
                <div className="relative w-full h-[45px] ">
                  <input
                    name="ReTypePassword"
                    // type={${ReTypepassWordVisible ? "text" : "password"}}
                    type="text"
                    placeholder="ReType Password"
                    className={`w-full pl-2 rounded h-full relative${
                      errors.ReTypePassword && touched.ReTypePassword
                        ? "border-red-400 border-2"
                        : "border-gray-200 border-2"
                    }`}
                    value={values.ReTypePassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="absolute top-0 right-0 mt-4 mr-4">
                    {ReTypepassWordVisible ? (
                      <FaRegEye onClick={handleReTypePasswordVisible} />
                    ) : (
                      <FaRegEyeSlash onClick={handleReTypePasswordVisible} />
                    )}
                  </div>
                </div>
                {errors.ReTypePassword && touched.ReTypePassword ? (
                  <small className="text-red-500">
                    {errors.ReTypePassword}
                  </small>
                ) : null}
              </div>

              <button
                className="rounded w-4/12 h-[35px] bg-[#512C19] text-white"
                onClick={handleSubmit}
                type="submit"
              >
                Sign Up
              </button>
              <p className="sm:-ml-5 xs:-ml-3 xs:text-sm">
                Already have an account?
                <Link className="text-red-500 font-bold" to="/login">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
    </>
  );
};

export default SignUp;