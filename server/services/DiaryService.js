import Diary from "../Models/DiaryModel.js";
import dotenv from "dotenv";

export const CreateDairy = async (data) => {
    /*Data = {
        userid,
        content
        mood,
        CreateAt
    } */
    const res = new Diary(data);
    return await res.save();
};

export const UpdateDiary = async (UserId, content) => {
    const res = await Diary.findOne({ UserId, content });
    res.content = content;
    res.updatedAt = new Date();
    return await res.save();
};
export const GetDiaryByDate = async (UserId, date) => {
    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 1);
    return await Diary.find({
        UserId,
        createdAt: { $gte: start, $lt: end },
    });
};

export const GetAllDiary = async (UserId) => {
    console.log(UserId);
    return await Diary.find({ UserId }).sort({ createdAt: -1 });
};
