import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./components/globalStyles/global";
import { createBrowserRouter, RouterProvider } from "react-router";
import Feeling from "./pages/Feeling/Feeling";
import Share from "./pages/Share/Share";
import Home from "./pages/Home/Home";
import Diary from "./pages/Diary/Diary";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/Share", element: <Share /> },
            { path: "/About", element: <About /> },
            { path: "/Diary", element: <Diary /> },
            { path: "/Feeling", element: <Feeling /> },
        ],
    },
    {
        path: "/Register",
        element: (
            <ConfigProvider>
                <Register />{" "}
            </ConfigProvider>
        ),
    },
    {
        path: "/Login",
        element: (
            <ConfigProvider>
                <Login />{" "}
            </ConfigProvider>
        ),
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
