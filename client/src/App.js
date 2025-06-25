import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/globalStyles/GlobalStyles.scss";
import Feeling from "./pages/Feeling/Feeling";
import Share from "./pages/Share/Share";
import Home from "./pages/Home/Home";
import Dairy from "./pages/Dairy/Dairy";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
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
    return <div>oke</div>;
    // <BrowserRouter>
    //     <div className="app">
    //         <Routes>
    //             <Route path="/Register" element={<Register />} />
    //             <Route path="/Login" element={<Login />} />
    //             <Route
    //                 path="/"
    //                 element={
    //                     <Defaultlayout>
    //                         <Home />
    //                     </Defaultlayout>
    //                 }
    //             />
    //             <Route
    //                 path="/Feeling"
    //                 element={
    //                     <Defaultlayout>
    //                         <Feeling />
    //                     </Defaultlayout>
    //                 }
    //             />
    //             <Route
    //                 path="/Share"
    //                 element={
    //                     <Defaultlayout>
    //                         <Share />
    //                     </Defaultlayout>
    //                 }
    //             />
    //             <Route
    //                 path="/Dairy"
    //                 element={
    //                     <Defaultlayout>
    //                         <Dairy />
    //                     </Defaultlayout>
    //                 }
    //             />
    //             <Route
    //                 path="/About"
    //                 element={
    //                     <Defaultlayout>
    //                         <About />
    //                     </Defaultlayout>
    //                 }
    //             />
    //         </Routes>
    //     </div>
    // </BrowserRouter>
}
