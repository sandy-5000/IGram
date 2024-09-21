import mongoose from "mongoose"

const chatSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._]{5,24}$/.test(v)
            }
        }
    },
    to: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._]{5,24}$/.test(v)
            }
        }
    },
    created_on: {
        type: Date,
        default: new Date(),
    },
    message: {
        type: String,
        required: true,
    },
})

userSchema.index({ tag: 1, created_on: 1 }, { unique: true })

export default mongoose.model("IGUser", userSchema)
