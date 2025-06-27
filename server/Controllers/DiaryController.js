import {
    GetAllDiary,
    UpdateDiary,
    CreateDairy,
} from "../services/DiaryService.js";

export const CreateD = async (req, res) => {
    const result = req.body;
    const data = await CreateDairy(result);
    console.log(result);
    return res.status(200).json(data);
};

export const UpdateD = async (req, res) => {
    const result = req.body;
    const data = await UpdateDiary(result.UserId, result.content);
    console.log(result);
    return res.status(200).json(data);
};
