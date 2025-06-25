import styles from "./Header.module.scss";
import classNames from "classnames";
import { IoMenu } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
// Header.js
export default function Header({ show, setShow }) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <button
          className={`${styles.Menu} ${!show && styles.active}`}
          onClick={() => {
            setShow(!show);
          }}
        >
          <IoMenu />
        </button>
        <h1 className={styles.logo}>Mind Care</h1>
        <div className={styles.Right}>
          <button className={styles.signInBtn}>
            <MdAccountCircle />
          </button>
        </div>
      </div>
    </header>
  );
}
