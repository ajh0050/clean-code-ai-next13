'use client';
import React from "react";
import { useDarkMode } from "../contexts/darkMode";
import { FiSun, FiMoon } from "react-icons/fi";
import Switch from "react-switch";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
  };

  const handleToggleChange = () => {
    toggleDarkMode();
  };

  return (
    <div className="navbar bg-base-100" style={containerStyle}>
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl text-black dark:text-white">
          Clean Code AI
        </a>
      </div>
      <div className="navbar-end">
        <Switch
          checked={darkMode}
          onChange={handleToggleChange}
          offColor="#f3e7e9"
          onColor="#2b5876"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
                paddingLeft: 2,
                color: "black",
              }}
            >
              <FiSun />
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
                paddingRight: 2,
                color: "white",
              }}
            >
              <FiMoon />
            </div>
          }
          height={24}
          width={48}
          handleDiameter={26}
          aria-label="Dark mode toggle"
        />
      </div>
    </div>
  );
};

export default Header;
