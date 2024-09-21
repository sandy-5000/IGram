
import Profile from "../Profile"
import MainLayout from "/src/layouts/MainLayout"

const Home = () => {
  return (
    <MainLayout>
      <div className="h-screen w-screen a-center">
        <p className="text-gray-800 dark:text-gray-200">Home!</p>
      </div>
      <div>
        <Profile/>
      </div>

    </MainLayout>
  )
}

export default Home
