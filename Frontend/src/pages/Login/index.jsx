import { useState, useContext } from "react"
import { FaRegEyeSlash } from "react-icons/fa"
import { useFormik } from "formik"
import { Yup } from "./Yup.jsx"
import { FaRegEye } from "react-icons/fa"
import { Link } from "react-router-dom"
import AuthLayout from "/src/layouts/AuthLayout"
import Logo from "/src/components/Logo"
import backend from "/src/services/backend"
import { useNavigate } from "react-router-dom"
import { Context } from "/src/context"

const initial_Values = {
  email: "",
  password: "",
}

const Login = () => {
  const navigate = useNavigate()
  const [, setUser] = useContext(Context)
  const [passWordVisible, setpassWordVisible] = useState(false)
  const [error, setError] = useState(undefined)
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initial_Values,
      validationSchema: Yup,
      onSubmit: async (values) => {
        const { email: usermail, password } = values
        const body = { usermail, password }
        setError(undefined)
        backend.post('/api/user/login', body)
          .then(({ data }) => {
            if (data.error) {
              setError(data.error)
              return
            }
            localStorage.setItem('token', data.jwt)
            setUser({
              loggedIn: true,
              data,
            })
            navigate('/home', { replace: true })
          })
          .catch(error => {
            setError('An Error occured')
            console.log(error)
          })
      },
    })
  const handleVisible = () => {
    setpassWordVisible(!passWordVisible)
  }
  return (
    <AuthLayout>
      <div className="h-screen w-full flex flex-col justify-center items-center sm:w-full mdl:w-full md:w-full dark:text-[#2563eb] ">
        <div className="mt-24">
          <Logo />
        </div>
        <div className="w-full md:w-10/12 rounded-lg flex flex-col justify-center gap-y-5 h-full items-center mt-7 sm:mb-10">
          <div className="w-8/12 lg:w-1/2">
            <input
              placeholder="Email"
              className={`w-full dark:bg-slate-700 dark:text-slate-200 pl-2 rounded h-[45px]  ${errors.email && touched.email
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

          <div className="relative w-8/12 lg:w-1/2">
            <input
              placeholder="Password"
              className={`w-full dark:bg-slate-700 dark:text-slate-200 pl-2 rounded h-[45px] relative ${errors.password && touched.password
                ? "border-blue-700 border-2"
                : "border-gray-200 border-2"
                }`}
              name="password"
              type={passWordVisible ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="absolute dark:text-slate-200 top-0 right-0 mt-4 mr-4">
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
          <Link className="text-sky-600 dark:text-sky-500" to="/reset-password">
            Forget Password?
          </Link>
          <button
            className="rounded w-3/12 h-[35px] bg-sky-600 dark:bg-sky-500 text-gray-200 dark:text-gray-800"
            onClick={handleSubmit}
            type="submit"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit()
            }}
          >
            Login
          </button>
          {
            error && (
              <small className="text-red-500">
                {error}
              </small>
            )
          }
          <p className="sm:-ml-5 xs:text-sm text-sky-600 dark:text-sky-500">
            Don&#39;t have an account?{" "}
            <Link className="text-gray-800 dark:text-gray-200 font-semibold" to="/signUp">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
