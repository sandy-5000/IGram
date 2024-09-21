import MainLayout from "/src/layouts/MainLayout"
import { RiSearchLine } from "react-icons/ri"
import { CgProfile } from "react-icons/cg"
import { AiOutlineUserAdd } from "react-icons/ai"
import { PropTypes } from "prop-types"
import backend from "/src/services/backend"
import { useState, useContext } from "react"
import { Context } from "/src/context"

const UserBox = ({ me, username, user, setUser }) => {
  const friends = user?.data.friends || []
  return (
    <div key={username} className="pt-3 p-1">
      <div className="bg-slate-300 dark:bg-slate-700 rounded-md flex">
        <div className="h-10 w-1/12 a-center">
          <CgProfile className="h-full text-slate-800 dark:text-slate-300" />
        </div>
        <div className="h-10 w-10/12 v-center">
          <span className="text-slate-800 dark:text-slate-300">{username}</span>
        </div>
        <div className="h-10 w-1/12">
          <button
            className="h-full w-full a-center"
            onClick={
              () => addFriend(me, username, (data) => {
                setUser({
                  loggedIn: true,
                  loading: false,
                  data,
                })
              })
            }
          >
            {
              me === username || friends.includes(username) ||
              <AiOutlineUserAdd className="h-full text-slate-800 dark:text-slate-300" />
            }
          </button>
        </div>
      </div>
    </div>
  )
}

UserBox.propTypes = {
  me: PropTypes.string,
  username: PropTypes.string,
  user: PropTypes.any,
  setUser: PropTypes.any,
}

const getUsers = (query, callback) => {
  const body = { query: query.trim() }
  backend.post('/api/user/find', body)
    .then(({ data }) => {
      if (data.error) {
        callback([])
        return
      }
      console.log(data)
      callback(data.result)
    })
    .catch(error => {
      callback([])
      console.log(error)
    })
}

const addFriend = (username_1, username_2) => {
  if (username_1 === username_2) {
    return
  }
  const body = { username_1, username_2 }
  backend.post('/api/user/add-friend', body)
    .then(({ data }) => {
      console.log(data)
      if (data.error) {
        return
      }
      window.alert('Friend added')
    })
    .catch(error => {
      console.log(error)
    })
}

const Find = () => {
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])
  const [user, setUser] = useContext(Context)

  return (
    <MainLayout>
      <div className="h-screen w-screen">
        <div className="w-full a-center mt-5">
          <div className="p-5 pr-1 w-full md:w-8/12 lg:w-1/2">
            <input
              type="text"
              id="search"
              className="
            bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
            dark:focus:border-blue-500"
              placeholder="Search"
              onChange={(event) => {
                setQuery(event.target.value)
              }}
              required
            />
          </div>
          <div className="p-1 h-full">
            <button
              className="bg-slate-300 w-10 aspect-square a-center dark:bg-slate-700 rounded-md"
              onClick={() => {
                getUsers(query, (data) => {
                  setUsers(data)
                })
              }}
            >
              <RiSearchLine className="text-slate-800 dark:text-slate-200" />
            </button>
          </div>
        </div>
        <div className="w-full a-center mt-5 py-5">
          <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-5 w-full md:w-8/12 lg:w-1/2 h-[400px] overflow-y-scroll">
            {
              users?.map((x) => UserBox({
                me: user.data.username,
                username: x.username,
                user,
                setUser,
              }))
            }
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Find
