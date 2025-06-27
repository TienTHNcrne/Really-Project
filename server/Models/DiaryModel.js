import mongoose from "mongoose";
const Diary = new mongoose.Schema(
    {
        UserId: {
            type: mongoose.Schema.ObjectId,
            ref: "users",
            required: true,
        },
        mood: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
export default mongoose.model("Diary", Diary);
