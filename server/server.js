import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from "./Routers/userRouter.js";
import DiaryRoute from "./Routers/DiaryRouter.js";
import connection from "./config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/v1/api/user", userRoute);
app.use("/v1/api/Diaries", DiaryRoute);

(async () => {
    try {
        await connection();
        app.listen(PORT, () => {
            console.log(`✅ Server is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to connect:", error);
    }
})();
