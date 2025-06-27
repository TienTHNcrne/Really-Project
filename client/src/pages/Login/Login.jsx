import React, { useState } from "react";
import styles from "./Login.module.scss";
import Register from "../Register/Register";
import { Link, useNavigate } from "react-router-dom";
import { FindUserApi } from "../../util/api";
import { message, notification } from "antd";
export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const nextPage = useNavigate();
    const onFinish = async (e) => {
        e.preventDefault();
        const res = await FindUserApi(email, pass);
        const EC = res?.data?.result?.EC;
        console.log(EC);
        if (EC === 1)
            return notification.error({
                message: "MAT KHAU HOAC EMAIL SAI",
                description: "XIN VUI LONG NHAP LAI",
            });
        nextPage("/");
    };

    return (
        <div className={styles.Login}>
            <form className={styles.Login_form}>
                <div className={styles.intro}>
                    <p>Please enter your details </p>
                    <h2>Welcome back</h2>
                    <hr></hr>
                </div>
                <div className={styles.content}>
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
                    <div className={styles.inform}>
                        <div className={styles.rem}>
                            <input
                                type="checkbox"
                                value="remember"
                                id="remember"
                            />
                            <label htmlFor="remember">
                                Remember for 30 days
                            </label>
                        </div>
                        <a href="/" className={styles.forgot}>
                            Forgot password
                        </a>
                    </div>
                </div>
                <div className={styles.end}>
                    <button onClick={onFinish}>Sign in</button>
                    <div className={styles.add}>
                        <p>Don't have an account? </p>
                        <Link to="/Register">Sign up</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
