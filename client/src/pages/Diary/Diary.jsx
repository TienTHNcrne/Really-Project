import { useEffect, useState } from "react";
import styles from "./Diary.module.scss";

export default function Dairy() {
    const [title, setTilte] = useState(localStorage.getItem("title_diary"));
    const [content, setContent] = useState(
        localStorage.getItem("content_diary")
    );

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h2>YOUR DIARY</h2>
                <hr></hr>
                {/*TITLE*/}
                <div className={styles.box}>
                    <label htmlFor="title-diary">Nhập tiêu đề</label>
                    <input
                        id="title-diary"
                        type="text"
                        placeholder="Tiêu đề của nhật ký"
                        value={title}
                        onChange={(e) => {
                            setTilte(e.target.value);
                            localStorage.setItem("title_diary", title);
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            if (title.trim() !== "") {
                                alert("cảm ơn bạn đã tin tưởng");
                            }
                        }}
                    >
                        ENTER NEW TITLE
                    </button>

                    {/*content */}
                </div>
            </div>
            <textarea
                placeholder="Viết nội dung nhật ký..."
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                    localStorage.setItem("content_diary", content);
                }}
            ></textarea>

            {/*SUBMIT */}
            <button
                type="submit"
                className={styles.submit}
                onClick={() => {
                    if (content.trim() !== "") {
                        alert("cảm ơn bạn đã tin tưởng");
                    }
                }}
            >
                SUBMIT
            </button>
        </div>
    );
}
