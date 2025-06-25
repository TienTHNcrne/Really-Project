import styles from "./Feeling.module.scss";
import { PiSmileySadFill } from "react-icons/pi";
import { FaSadCry } from "react-icons/fa";
import { RiEmotionNormalFill } from "react-icons/ri";
import { HiEmojiHappy } from "react-icons/hi";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { useState } from "react";

export default function Feeling() {
    const feel = [
        { icon: <PiSmileySadFill />, label: "Very Sad", color: "#34495e" },
        { icon: <FaSadCry />, label: "Sad", color: "#3498db" },
        { icon: <RiEmotionNormalFill />, label: "Normal", color: "#f1c40f" },
        { icon: <HiEmojiHappy />, label: "Happy", color: "#e67e22" },
        {
            icon: <BiSolidHappyHeartEyes />,
            label: "Very Happy",
            color: "rgb(255, 74, 74)",
        },
    ];

    const [currindex, setCurrindex] = useState(null);
    const [fel, setFel] = useState(null);
    const [think, setThink] = useState("");

    const advice = {
        "Very Sad": [
            "Hãy thử viết nhật ký hoặc nghe nhạc nhẹ nhàng để giải tỏa.",
            "Nếu có thể, hãy nói chuyện với người bạn tin tưởng.",
            "Cho bản thân thời gian, nghỉ ngơi một chút – bạn không đơn độc.",
        ],
        Sad: [
            "Nghe một bài nhạc yêu thích, hoặc xem một video nhẹ nhàng.",
            "Bạn có thể viết điều khiến bạn buồn để cảm thấy nhẹ lòng hơn.",
            "Nghỉ ngơi 5–10 phút, hít thở sâu, rồi bắt đầu lại nhẹ nhàng.",
        ],
        Normal: [
            "Bạn có thể ghi lại điều tốt đẹp nhỏ trong ngày để duy trì tích cực.",
            "Dành 10 phút để thư giãn và lắng nghe bản thân.",
            "Giữ thói quen đều đặn sẽ giúp bạn ổn định lâu dài.",
        ],
        Happy: [
            "Hãy tận dụng năng lượng này để hoàn thành một việc nhỏ bạn trì hoãn.",
            "Bạn có thể chia sẻ niềm vui với bạn bè hoặc gia đình.",
            "Viết lại điều khiến bạn vui – để làm động lực cho những ngày sau.",
        ],
        "Very Happy": [
            "Bạn đang rất tích cực! Thử  học nhẹ hoặc hỗ trợ bạn khác hôm nay nhé.",
            "Ghi lại cảm xúc này – bạn có thể lan tỏa nó cho người xung quanh.",
            "Tận dụng năng lượng cao để tạo ra điều có ích, như hoàn thành bài tập sớm.",
        ],
    };

    const randomAdvice =
        fel && advice[fel]
            ? advice[fel][Math.floor(Math.random() * advice[fel].length)]
            : "";

    return (
        <div className={styles.main}>
            <h1>Hôm nay bạn cảm thấy thế nào?</h1>
            <div className={styles.Feel}>
                {feel.map((value, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (index !== currindex) {
                                setCurrindex(index);
                                setFel(value.label);
                            } else {
                                setCurrindex(null);
                                setFel(null);
                            }
                        }}
                        className={index === currindex ? styles.active : ""}
                        style={{ color: value.color }}
                    >
                        {value.icon}
                    </button>
                ))}
            </div>

            {fel && (
                <div className={styles.advice}>
                    <p>
                        <strong>Lời khuyên hôm nay:</strong>
                    </p>
                    <p>{randomAdvice}</p>
                </div>
            )}

            <textarea
                placeholder="Bạn đang nghĩ gì..."
                value={think}
                onChange={(e) => setThink(e.target.value)}
            ></textarea>

            <button
                type="submit"
                className={styles.Submit}
                onClick={() => {
                    if (fel !== null || think.trim() !== "")
                        alert("Cảm ơn bạn đã chia sẻ 💚");
                    localStorage.setItem("feel", fel);
                    localStorage.setItem("think", think);
                    setCurrindex(null);
                    setFel(null);
                    setThink("");
                }}
            >
                SUBMIT
            </button>
        </div>
    );
}
