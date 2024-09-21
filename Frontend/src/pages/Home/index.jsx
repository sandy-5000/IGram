import { useEffect, useState, useContext } from 'react'
import MainLayout from "/src/layouts/MainLayout"
import FeedPage from '/src/pages/Feeds'
import { Context } from "/src/context"


const Home = () => {
  const [user] = useContext(Context)
  const [lastLogin, setLastLogin] = useState(null)
  const [activities] = useState([
    { id: 1, description: 'Liked a post', time: '2 hours ago' },
    { id: 2, description: 'Commented on a photo', time: '3 hours ago' },
    { id: 3, description: 'Updated profile picture', time: '5 hours ago' },
  ])

  const [friends, setFriends] = useState(
    (user?.data?.friends || []).map((x, index) => {
      return {
        id: index + 1,
        name: x,
        avatar: 'https://via.placeholder.com/50',
      }
    })
  )

  useEffect(() => {
    if (user?.data?.friends) {
      setFriends(user.data.friends.map((x, index) => {
        return {
          id: index + 1,
          name: x,
          avatar: 'https://via.placeholder.com/50',
        }
      }))
    }
    setLastLogin(user?.data?.last_login)
  }, [user])

  return (
    <MainLayout>
      <div>
        <div className="min-h-screen bg-salt-800 p-4  dark:text-sky-500">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all duration-500 transform hover:scale-105 dark:bg-slate-800">
            <h1 className="text-2xl font-bold">Welcome back, {user?.data?.username}!</h1>
            <p className="text-green-600 mt-2">
              Last login: <span className="font-semibold">{lastLogin}</span>
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6  dark:bg-slate-800">
            <h2 className="text-xl font-bold mb-4">Activity Feed</h2>
            <ul className="space-y-3">
              {activities.map((activity) => (
                <li
                  key={activity.id}
                  className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-sm flex justify-between items-center transition-transform duration-500 hover:translate-x-1"
                >
                  <p>{activity.description}</p>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="shadow-md rounded-lg p-6 mb-6 bg-white dark:bg-slate-800">
            <h2 className="text-xl font-bold mb-4">Friends</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {friends.map((friend) => (
                <li
                  key={friend.id}
                  className="flex items-center bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-sm transition-transform duration-500 hover:scale-105"
                >
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <p className="font-semibold">{friend.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <FeedPage />
      </div>
    </MainLayout>
  )
}

export default Home
