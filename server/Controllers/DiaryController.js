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

export const GetAllD = async (req, res) => {
    try {
        console.log(req.query);
        const id = req.query.Id;
        const result = await GetAllDiary(id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json("error");
    }
};
