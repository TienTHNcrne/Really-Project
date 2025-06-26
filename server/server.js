import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import route from "./Routers/userRouter.js";
import connection from "./config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/v1/api", route);

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
