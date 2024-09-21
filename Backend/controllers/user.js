import IGUser from '../models/user.js'
import mongoose from 'mongoose'

export default function UserController() {
    return {
        authenticate: async function ({ usermail, password }) {
            const user = await IGUser.findOne({ usermail, password })
            if (!user) {
                return { status: 404, result: null }
            }
            const last_login = user.last_login
            user.last_login = Date().toString()
            await user.save()
            return { status: 200, result: {...user, last_login} }
        },
        createUser: async function ({ username, usermail, password }) {
            let user = new IGUser({
                username,
                usermail,
                password,
                last_login: Date().toString(),
            })
            let errors = {
                11000: 'User already exists!'
            }
            try {
                var result = await user.save()
                return { status: 201, result }
            } catch (e) {
                console.log(e)
                return { status: 400, result: (errors[e.code] || 'User Creation failed!') }
            }
        },
        find: async function ({ query }) {
            const users = await IGUser.find({
                username: { $regex: `^${query}`, $options: 'i' },
            }, { username: 1 }).limit(10)
            if (!users) {
                return { status: 404, result: null }
            }
            return { status: 200, result: users }
        },
        addFriend: async function ({ username_1, username_2 }) {
            if (username_1 === username_2) {
                return { status: 400, error: 'Can\'t become friends', result: null }
            }
            const user_1 = await IGUser.findOne({ username: username_1 })
            const user_2 = await IGUser.findOne({ username: username_2 })
            if (!user_1 || !user_2 || user_1.friends.length >= 100 || user_2.friends.length >= 100) {
                return { status: 400, error: 'Can\'t become friends', result: null }
            }
            try {
                user_1.friends.addToSet(username_2)
                user_2.friends.addToSet(username_1)
                await user_1.save()
                await user_2.save()
                return { status: 200, result: user_1 }
            } catch (error) {
                return { status: 500, error: error.message, result: null }
            }
        },
    }
}
