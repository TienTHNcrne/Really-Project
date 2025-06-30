import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import Login from "../Login/Login";
import { notification } from "antd";
import { createUserApi } from "../../util/api.js";
export default function Register() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [name, setName] = useState("");
    const nextPage = useNavigate();
    const onFinish = async (e) => {
        e.preventDefault();
        if (!name.trim()) return alert("Vui lòng nhập tên");
        if (!email.trim()) return alert("Vui lòng nhập email");
        if (pass !== pass2) return alert("Mật khẩu nhập lại chưa khớp");

        try {
            const res = await createUserApi(name, email, pass);
            console.log(res);
            if (res?.status === 200) {
                notification.success({ message: "create", description: "oke" });
                localStorage.setItem("userId", res?.data?._id);
                localStorage.setItem("nameUser", res?.data?.name);
            } else {
                notification.success({ message: "error", description: "oke" });
            }
        } catch (error) {}
    };
    return (
        <div className={styles.Login}>
            <form className={styles.Login_form}>
                <div className={styles.intro}>
                    <p>Please enter your details </p>
                    <h2>Create an account</h2>
                    <hr></hr>
                </div>
                <div className={styles.content}>
                    <input
                        placeholder="Username"
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Email"
                        type="email"
                        value={email}
                        className={styles.email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        placeholder="password"
                        type="password"
                        className={styles.password}
                        value={pass}
                        onChange={(e) => {
                            setPass(e.target.value);
                        }}
                    />
                    <input
                        placeholder=" Repeat password"
                        type="password"
                        className={styles.password}
                        value={pass2}
                        onChange={(e) => {
                            setPass2(e.target.value);
                        }}
                    />
                </div>
                <div className={styles.end}>
                    <button onClick={onFinish}>Create</button>
                    <div className={styles.add}>
                        <p>Do you have an account? </p>
                        <Link to="/Login">Sign in</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
