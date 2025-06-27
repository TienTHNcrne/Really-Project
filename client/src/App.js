import { Outlet } from "react-router-dom";
import "./components/globalStyles/GlobalStyles.scss";

import { Defaultlayout } from "./components/layout";
import { useEffect } from "react";
import axios from "./util/axios.customize";

export default function App() {
    return (
        <>
            <Defaultlayout>
                <Outlet />
            </Defaultlayout>
        </>
    );
}
