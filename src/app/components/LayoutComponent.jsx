'use client';
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useDarkMode } from "../contexts/darkMode";
import DonateBanner from "./DonateBanner";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const LayoutComponent = ({ children }) => {
    const { darkMode } = useDarkMode();
    const containerClassName = darkMode ? "dark" : "";
    const containerStyle = {
        backgroundImage: darkMode
            ? "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"
            : "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
        minHeight: "100vh",
    };
    return (
        <div className={`${containerClassName}`} style={containerStyle}>
            <DonateBanner />
            <Header />
                {children}
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default LayoutComponent;