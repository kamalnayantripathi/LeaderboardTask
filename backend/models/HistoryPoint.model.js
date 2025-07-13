import mongoose,{ Schema } from "mongoose"

const historyPointSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,    
        ref: "User",
        required: true
    },
    pointsAwarded: {
        type: Number,
        required: true
    },
    claimedAt: {
        type: Date,
        default: Date.now,
    }
},{
    timestamps: true
})

const HistoryPoint = mongoose.model("HistoryPoint",historyPointSchema)

export default HistoryPoint;