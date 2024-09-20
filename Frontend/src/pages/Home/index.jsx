import Login from "../Login"
import EmailOTP from "../OTP/otpverification"
// import SignUp from "../SignUp/registeration"
import MainLayout from "/src/layouts/MainLayout"

const Home = () => {
  return (
    <MainLayout>
      <div className="h-screen w-screen a-center">
        <p className="text-gray-800 dark:text-gray-200">Home!</p>
      </div>
      <div>
        <Login/>
      </div>
      <div>
        {/* <SignUp/> */}
      </div>
      <div>
        <EmailOTP/>
      </div>
    </MainLayout>
  )
}

export default Home
