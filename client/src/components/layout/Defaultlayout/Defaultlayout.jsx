import Sidebar from "./Sidebars/Sidebar";
import Header from "./Header/Header";
import styles from "./Defaultlayout.module.scss";
import { useState } from "react";
export default function Defaultlayout({ children }) {
    const [showsidebar, setShowsidebar] = useState(true);

    return (
        <div className={styles.wrapper}>
            <Header show={showsidebar} setShow={setShowsidebar} />

            <div className={styles.contain}>
                <Sidebar show={showsidebar} />
                <div
                    className={`${styles.content} ${!showsidebar && styles.content_full}`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
