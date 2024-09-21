import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._]{5,24}$/.test(v)
            }
        }
    },
    usermail: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
            }
        },
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return v.length >= 8
            }
        }
    },
    created_on: {
        type: Date,
        default: new Date()
    },
    friends: {
        type: [{
            username: {
                type: String,
                required: true,
            },
        }],
        default: [],
    },
})

userSchema.index({ usermail: 1 }, { unique: true })
userSchema.index({ username: 1 }, { unique: true })

export default mongoose.model("IGUser", userSchema)
