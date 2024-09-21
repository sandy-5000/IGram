
import React, { useEffect, useState } from 'react';
import MainLayout from "/src/layouts/MainLayout"
import FeedPage from '../Feeds';
import ProfilePage from '../Profile';




const Home = () => {
  const [lastLogin, setLastLogin] = useState('September 20, 2024 10:00 AM');
  const [activities, setActivities] = useState([
    { id: 1, description: 'Liked a post', time: '2 hours ago' },
    { id: 2, description: 'Commented on a photo', time: '3 hours ago' },
    { id: 3, description: 'Updated profile picture', time: '5 hours ago' },
  ]);

  const [friends, setFriends] = useState([
    { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Jane Smith', avatar: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Bob Johnson', avatar: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Bhnson', avatar: 'https://via.placeholder.com/50' },
  ]);

  useEffect(() => {
    // Simulate data fetching for animations
    setTimeout(() => {
      setLastLogin('September 21, 2024 9:00 AM');
    }, 1000);
  }, []);

  return (
    <MainLayout>
      <div className="h-screen w-screen a-center ">
        <p className="text-gray-800 dark:text-gray-200">Home!</p>
      </div>
      <div>
        <FeedPage/>
        <ProfilePage/>
      </div>
     <div>
     <div className="min-h-screen bg-salt-800 p-4  dark:text-[#2563eb]">
      {/* Welcome Message */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition-all duration-500 transform hover:scale-105 dark:bg-slate-800">
        <h1 className="text-2xl font-bold">Welcome back, User!</h1>
        <p className="text-green-600 mt-2">
          Last login: <span className="font-semibold">{'time'}</span>
        </p>
      </div>

      {/* Activity Feed */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6  dark:bg-slate-800">
        <h2 className="text-xl font-bold mb-4">Activity Feed</h2>
        <ul className="space-y-3">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="bg-gray-300 p-4 rounded-lg shadow-sm flex justify-between items-center transition-transform duration-500 hover:translate-x-1"
            >
              <p>{activity.description}</p>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Friends List */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6  dark:bg-slate-800">
        <h2 className="text-xl font-bold mb-4">Friends</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {friends.map((friend) => (
            <li
              key={friend.id}
              className="flex items-center bg-gray-300 p-4 rounded-lg shadow-sm transition-transform duration-500 hover:scale-105"
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
  );
}
     </div>

    </MainLayout>
  )
}

export default Home
