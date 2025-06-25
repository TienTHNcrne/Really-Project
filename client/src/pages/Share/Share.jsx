import { use, useEffect, useState } from "react";
import styles from "./Share.module.scss";
export default function Share() {
    const [aser, setAser] = useState(null);
    const [blog, setBlog] = useState(() => {
        const saved = localStorage.getItem("blog");
        return saved ? JSON.parse(saved) : [];
    });

    const [content, setContent] = useState("");
    const [feel, setFeel] = useState(null);

    useEffect(() => {
        if (aser !== null) setFeel(aser);
    });
    useEffect(() => {
        localStorage.setItem("blog", JSON.stringify(blog));
    }, [blog]);
    // return
    return (
        <div className={styles.main}>
            <h2>Chia sẻ cảm xúc của bạn</h2>
            <hr></hr>
            <div className={styles.option}>
                <h3>bạn có muốn chia sẻ lun cảm xúc hiện tại không</h3>
                <button
                    onClick={() => {
                        setAser(localStorage.getItem("feel"));
                    }}
                >
                    Yes
                </button>
                <button
                    onClick={() => {
                        setAser(null);
                    }}
                >
                    No
                </button>
            </div>
            {aser !== null && <h4>{aser}</h4>}
            <textarea
                placeholder="cảm xúc của bạn....."
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                }}
            />
            <button
                type="submit"
                onClick={(e) => {
                    if (content.trim() == "") return;
                    setBlog((prev) => [{ content, feel }, ...blog]);
                    setContent("");
                    setFeel(null);
                }}
            >
                SUBMIT
            </button>
            {/*Container of post */}
            <div className={styles.box}>
                {blog.map((value, index) => (
                    <li key={index}>
                        {value.content}
                        {value.feel !== null && (
                            <div className={styles.comment_of_post}>
                                <span> cảm xúc của bạn: {value.feel}</span>
                            </div>
                        )}
                    </li>
                ))}
            </div>
        </div>
    );
}
