import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import {
  IoHome,
  IoShareSocial,
  IoHappy,
  IoBook,
  IoInformationCircle,
  IoMenu,
} from "react-icons/io5";

export default function Sidebar({ show }) {
  return (
    <>
      <aside
        className={`${styles.Sidebar} ${show ? styles.open : styles.hidden}`}
      >
        <ul>
          <li>
            <Link to="/">
              <IoHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/Share">
              <IoShareSocial /> <span>Share</span>
            </Link>
          </li>
          <li>
            <Link to="/Feeling">
              <IoHappy /> <span>Feeling</span>
            </Link>
          </li>
          <li>
            <Link to="/Dairy">
              <IoBook /> <span>Dairy</span>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <IoInformationCircle /> <span>About</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
