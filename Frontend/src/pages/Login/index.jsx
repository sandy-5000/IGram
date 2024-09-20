import React, { useState } from "react";
// import logo from "../../assets/logo.png";
import { FaRegEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import { Login_Yup } from "./loginYup.jsx";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { UserLogin } from "../APICalls/allapis";
// import { toast } from "react-toastify";
// import "../../Custom.css"
const initial_Values = {
  email: "",
  password: "",
};

const Login = () => {
  const [passWordVisible, setpassWordVisible] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initial_Values,
      validationSchema: Login_Yup,
      onSubmit: async (values) => {
          console.log(values)
      },
    });
  const handleVisible = () => {
    setpassWordVisible((prev) => !prev);
  };
  return (
    <>
          <div className="w-full flex flex-col justify-center items-center sm:w-full mdl:w-full md:w-full dark:text-[#2563eb] ">
            <p className="dark:text-[#2563eb] font-bold mt-10">Login</p>
            <div className="w-2/12 lg:w-10/12 rounded-lg flex flex-col justify-center gap-y-5 h-full items-center mt-7 sm:w-10/12 md:w-6/12 mdl:w-7/12 sm:mb-10">
              <div className="w-6/12">
                <input
                  placeholder="Email"
                  className={`w-full  pl-2 rounded h-[45px]  ${
                    errors.email && touched.email
                      ? "border-blue-400 border-2"
                      : "border-gray-200 border-2"
                  }`}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <small className="text-red-500">{errors.email}</small>
                ) : null}
              </div>

              <div className="relative w-6/12">
                <input
                  placeholder="Password"
                  className={`w-full  pl-2 rounded h-[45px] relative ${
                    errors.password && touched.password
                      ? "border-blue-700 border-2"
                      : "border-gray-200 border-2"
                  }`}
                  name="password"
                  // type={${passWordVisible ? "text" : "password"}}
                  type="text"
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
                {errors.password && touched.password ? (
                  <small className="text-red-500">{errors.password}</small>
                ) : null}
              </div>
              <Link className="dark:text-[#2563eb]" to="/emailverification">
                Forget Password?
              </Link>
              <button
                className="rounded w-3/12 h-[35px] bg-[#512C19] text-white"
                onClick={handleSubmit}
                type="submit"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSubmit();
                }}
              >
                Login
              </button>
              <p className="sm:-ml-5 xs:text-sm ">
                Don't have an account?{" "}
                <Link className="text-red-500 font-bold" to="/signUp">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
    </>
  );
};

export default Login;