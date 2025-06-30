import express from "express";
import { CreateD, UpdateD, GetAllD } from "../Controllers/DiaryController.js";
const route = express.Router();

route.post("/", CreateD);
route.put("/:id", UpdateD);
route.get("/all", GetAllD);
export default route;
