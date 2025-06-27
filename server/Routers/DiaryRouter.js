import express from "express";
import { CreateD, UpdateD } from "../Controllers/DiaryController.js";
const route = express.Router();

route.post("/", CreateD);
route.put("/:id", UpdateD);

export default route;
