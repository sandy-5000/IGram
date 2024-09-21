import IGUser from '../models/user.js'

export default function UserController() {
    return {
        authenticate: async function ({ usermail, password }) {
            const user = await IGUser.findOne({ usermail, password })
            if (!user) {
                return { status: 404, result: null }
            }
            return { status: 200, result: user }
        },
        createUser: async function ({ username, usermail, password }) {
            let user = new IGUser({
                username,
                usermail,
                password,
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
    }
}