
import Feed from "../Feeds/index.jsx"
import MainLayout from "/src/layouts/MainLayout"

const Home = () => {
  return (
    <MainLayout>
      <div className="h-screen w-screen a-center">
        <p className="text-gray-800 dark:text-gray-200">Home!</p>
      </div>
      <div>
        <Feed/>
      </div>

    </MainLayout>
  )
}

export default Home
