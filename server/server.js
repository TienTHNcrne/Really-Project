//import
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./Routers/userRouter.js";
//
dotenv.config();
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("MongoDB is connected");
        app.listen(PORT, () => {
            `server is running http://localhost:${PORT}`;
        });
    })
    .catch((error) => {
        console.log("MongoDB isn't connected");
    });
app.use("/v1/api", route);
app.listen(5000, () =>
    console.log(`server is running http://localhost:${PORT}`)
);
