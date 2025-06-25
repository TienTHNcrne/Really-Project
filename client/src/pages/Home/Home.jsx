import styles from "./Home.module.scss";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h2>Chào mừng bạn đến với website chăm sóc tinh thần</h2>
      <p>
        Đây là nơi bạn có thể theo dõi cảm xúc hằng ngày, viết nhật ký cảm xúc,
        chia sẻ tâm sự một cách ẩn danh và nhận được sự đồng cảm từ cộng đồng.
      </p>
      <p>
        Mỗi ngày, bạn hãy chọn cảm xúc hiện tại của mình. Dựa vào đó, hệ thống
        sẽ gợi ý các hoạt động giúp bạn giải tỏa như: nghe nhạc thư giãn, nghỉ
        ngơi, viết nhật ký hoặc trò chuyện nhẹ nhàng.
      </p>
      <p>
        Chúng tôi mong muốn tạo nên một không gian an toàn, nơi bạn có thể lắng
        nghe chính mình và được người khác lắng nghe.
      </p>
    </div>
  );
}
