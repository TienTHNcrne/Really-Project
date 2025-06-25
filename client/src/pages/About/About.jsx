import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Về Dự Án</h1>
      <p>
        Website này được xây dựng nhằm hỗ trợ học sinh, sinh viên theo dõi và
        chăm sóc sức khỏe tinh thần mỗi ngày. Người dùng có thể ghi lại cảm xúc,
        viết nhật ký, và chia sẻ tâm sự một cách ẩn danh – từ đó tìm được sự
        đồng cảm và giảm bớt căng thẳng trong cuộc sống.
      </p>

      <p>
        Chúng tôi tin rằng sức khỏe tinh thần là điều quan trọng, và ai cũng
        xứng đáng được lắng nghe. Đây là một không gian an toàn, nhẹ nhàng và
        thân thiện để bạn có thể là chính mình.
      </p>

      <div className={styles.feedbackBox}>
        <h3>Bạn cảm thấy dự án này thế nào?</h3>
        <p>
          Nếu bạn muốn gửi đánh giá hoặc góp ý để dự án tốt hơn, bạn có thể điền
          vào biểu mẫu bên dưới:
        </p>
        <a
          href="https://forms.gle/3vfeeM48rrAv4FEf7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.feedbackButton}
        >
          Gửi đánh giá / góp ý
        </a>
      </div>
    </div>
  );
}
