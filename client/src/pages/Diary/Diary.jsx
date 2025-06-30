import React, { useEffect, useState } from "react";
import { Diary_every } from "../../util/api";
import styles from "./Diary.module.scss";
import { IoIosAddCircleOutline } from "react-icons/io";
export default function Diary() {
    const [content, setContent] = useState([]);
    const ID = localStorage.getItem("userId");
    useEffect(() => {
        Diary_every(ID)
            .then((res) => setContent(res.data))
            .catch((err) => console.error("Lỗi API:", err));
    }, []);
    return (
        <div className={styles.box}>
            {console.log(content)}
            <div className={styles.top}>
                <div className={styles.description}>
                    <h2>{`${localStorage.getItem("nameUser")}'s Journal`}</h2>

                    <p>
                        {` ${content.length} total entries | Created on ${
                            content.length > 0
                                ? new Date(content[0].createdAt).toLocaleString(
                                      "en-GB",
                                      {
                                          weekday: "long",
                                          day: "numeric",
                                          month: "numeric",
                                          year: "numeric",
                                      }
                                  )
                                : "No entries yet"
                        }`}
                    </p>
                </div>
                <button className={styles.icon}>
                    <IoIosAddCircleOutline />
                </button>
            </div>
            <div className={styles.data}>
                <div className={styles.head}>
                    <div className={styles.Entry}>Entry</div>
                    <div className={styles.create}>Create At</div>
                    <div className={styles.update}>Update At</div>{" "}
                </div>

                {content.map((value, id) => (
                    <div className={styles.content} key={value._id}>
                        <div className={styles.Entry}>
                            <h3>{value.title}</h3>
                            <p>{value.content}</p>
                        </div>
                        <div className={styles.create}>
                            {new Date(value.createdAt)
                                .toLocaleDateString("en-GB", {
                                    weekday: "short",
                                    day: "numeric",
                                    month: "numeric",
                                    year: "numeric",
                                })
                                .replace(",", ".") +
                                " at " +
                                new Date(value.updatedAt).toLocaleTimeString(
                                    "en-GB",
                                    {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    }
                                )}
                        </div>
                        <div className={styles.update}>
                            {new Date(value.updatedAt)
                                .toLocaleDateString("en-GB", {
                                    weekday: "short",
                                    day: "numeric",
                                    month: "numeric",
                                    year: "numeric",
                                })
                                .replace(",", ".") +
                                " at " +
                                new Date(value.updatedAt).toLocaleTimeString(
                                    "en-GB",
                                    {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    }
                                )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
