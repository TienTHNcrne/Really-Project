import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import Login from "../Login/Login";
export default function Register() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [name, setName] = useState("");
    const nextPage = useNavigate();
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
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            if (!name.trim()) return alert("Vui lòng nhập tên");
                            if (!email.trim())
                                return alert("Vui lòng nhập email");
                            if (pass !== pass2)
                                return alert("Mật khẩu nhập lại chưa khớp");
                            // Checking an email used to be signed in. call API and DB

                            alert("thanks");
                            nextPage("/");
                        }}
                    >
                        Create
                    </button>
                    <div className={styles.add}>
                        <p>Do you have an account? </p>
                        <Link to="/Login">Sign in</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
