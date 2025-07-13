import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalPoints: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        default: "/user_image.jpeg"
    }
},{
    timestamps: true
})

const User = mongoose.model("User", userSchema)

export default User;
