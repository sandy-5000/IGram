import { useState } from "react"
import { FaRegEyeSlash } from "react-icons/fa"
import { useFormik } from "formik"
import { Yup } from "./Yup.jsx"
import { FaRegEye } from "react-icons/fa"
import { Link, } from "react-router-dom"
import AuthLayout from "/src/layouts/AuthLayout"
import Logo from "/src/components/Logo"
import backend from "/src/services/backend"
import { useNavigate } from "react-router-dom"

const Initial_SignUpValues = {
  email: "",
  username: "",
  password: "",
  ReTypePassword: "",
}

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [reTypePasswordVisible, setReTypePasswordVisible] = useState(false)
  const navigate = useNavigate()
  const [signUpError, setError] = useState(undefined)
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: Initial_SignUpValues,
    validationSchema: Yup,
    onSubmit: (values) => {
      const { email: usermail, username, password, ReTypePassword: cpassword } = values
      const body = { usermail, username, password, cpassword }
      setError(undefined)
      backend.post('/api/user/register', body)
        .then(({ data }) => {
          if (data.error) {
            setError(data.error)
            return
          }
          navigate('/login')
        })
        .catch(error => {
          console.log(error)
        })
    }
  })

  const handleVisible = () => {
    setPasswordVisible(!passwordVisible)
  }
  const handleReTypePasswordVisible = () => {
    setReTypePasswordVisible(!reTypePasswordVisible)
  }

  return (
    <AuthLayout>
      <div className="a-center">
        <div className="h-screen w-full lg:w-2/3 flex flex-col justify-center items-center sm:w-full mdl:w-full md:w-full ">
          <div className="mt-20">
            <Logo />
          </div>
          <div className="v-center w-full md:w-10/12 rounded-lg flex flex-col gap-y-4 h-full items-center mt-7 xs:mt-2 mdl:gap-y-5 sm:mb-10">
            <div className="w-8/12 lg:w-1/2">
              <input
                name="email"
                placeholder="Email"
                className={`w-full dark:bg-slate-700 dark:text-slate-200 pl-2 rounded h-[45px] ${errors.email && touched.email
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
            <div className="w-8/12 lg:w-1/2">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className={`w-full dark:bg-slate-700 dark:text-slate-200 pl-2 rounded h-[45px] ${errors.username && touched.username
                  ? "border-red-400 border-2"
                  : "border-gray-200 border-2"
                  }`}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ appearance: 'textfield' }}
              />
              {errors.username && touched.username ? (
                <small className="text-red-500 ">{errors.username}</small>
              ) : null}
            </div>
            <div className="w-8/12 lg:w-1/2">
              <div className="relative w-full h-[45px]">
                <input
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className={`w-full dark:bg-slate-700 dark:text-slate-200 pl-2 rounded h-full relative ${errors.password && touched.password
                    ? "border-red-400 border-2"
                    : "border-gray-200 border-2"
                    }`}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="absolute dark:text-slate-200 top-0 right-0 mt-4 mr-4">
                  {passwordVisible ? (
                    <FaRegEye onClick={handleVisible} />
                  ) : (
                    <FaRegEyeSlash onClick={handleVisible} />
                  )}
                </div>
              </div>
              {errors.password && touched.password ? (
                <small className="text-red-500 ">{errors.password}</small>
              ) : null}
            </div>
            <div className="w-8/12 lg:w-1/2">
              <div className="relative w-full h-[45px] ">
                <input
                  name="ReTypePassword"
                  type={reTypePasswordVisible ? "text" : "password"}
                  placeholder="ReType Password"
                  className={`w-full dark:bg-slate-700 dark:text-slate-200 pl-2 rounded h-full relative${errors.ReTypePassword && touched.ReTypePassword
                    ? "border-red-400 border-2"
                    : "border-gray-200 border-2"
                    }`}
                  value={values.ReTypePassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="absolute dark:text-slate-200 top-0 right-0 mt-4 mr-4">
                  {reTypePasswordVisible ? (
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
              className="rounded my-5 w-4/12 h-[35px] bg-sky-600 dark:bg-sky-500 text-gray-200 dark:text-gray-800"
              onClick={handleSubmit}
              type="submit"
            >
              SignUp
            </button>
            {
              signUpError && (
                <small className="text-red-500">
                  {signUpError}
                </small>
              )
            }
            <p className="sm:-ml-5 xs:text-sm text-sky-600 dark:text-sky-500">
              Already have an account?
              <Link className="text-gray-800 dark:text-gray-200 font-semibold" to="/login">
                {" "}
                Login
              </Link>
            </p>
          </div>

        </div>
      </div>
    </AuthLayout>
  )
}

export default SignUp