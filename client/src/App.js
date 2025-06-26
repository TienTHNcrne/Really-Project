import { Outlet } from "react-router-dom";
import "./components/globalStyles/GlobalStyles.scss";

import { Defaultlayout } from "./components/layout";
import { useEffect } from "react";
import axios from "./util/axios.customize";

export default function App() {
    useEffect(() => {
        const fetchhello = async () => {
            const res = await axios.get(`/v1/api`);
            console.log(">> check", res);
        };
        fetchhello();
    }, []);
    return (
        <>
            <Defaultlayout>
                <Outlet />
            </Defaultlayout>
        </>
    );
}
