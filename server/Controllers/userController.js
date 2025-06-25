import user from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// REGISTER
export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExist = await user.findOne({
            $or: [{ email }, { name }],
        });
        if (userExist) return res.json({ message: "again" });
        const pass = await bcrypt.hash(password, 10);
        const newUser = new user({ name, email, password: pass });
        await newUser.save();
        res.status(201).json({ message: "Register successful" });
    } catch (err) {
        res.status(500).json({ error: "error" });
    }
};
