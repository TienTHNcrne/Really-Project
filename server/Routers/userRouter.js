import express from "express";
import { Register } from "../Controllers/userController.js";
const route = express.Router();
route.get("/", (req, res) => {
    res.status(200).json(" heelo");
});
export default route;
