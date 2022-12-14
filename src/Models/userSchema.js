import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: false
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    })

const users = mongoose.model('user', userSchema)

export default users
