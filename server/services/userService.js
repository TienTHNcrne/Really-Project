import users from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
export const CreateUserService = async (name, email, password) => {
    //create an Object
    try {
        //hash password
        const saltRounds = 10;
        const hashPass = await bcrypt.hash(password, saltRounds);
        //save account
        return await users.create({
            name: name,
            password: hashPass,
            email: email,
        });
    } catch (error) {
        console.log("Can't create an account, ", error);
        return null;
    }
};
export const FindUserService = async (email, password) => {
    try {
        const user = await users.findOne({ email: email });
        if (!user) return { status: 404, message: "Don't find an account" };
        const matchPass = await bcrypt.compare(password, user.password);
        if (!matchPass)
            return { status: 404, message: "Don't find a password" };
        const payload = {
            name: user.name,
            email: user.email,
        };
        const accessToken = jwt.sign(payload, process.env.JWT_SCRET, {
            expiresIn: process.env.JWT_DAY,
        });
        return {
            status: 200,
            message: "oke",
            user: { email: user.email, name: user.name },
            accessToken,
        };
    } catch (error) {
        console.log(error);
        return null;
    }
};
