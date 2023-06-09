import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";
import { useDarkMode } from "../contexts/darkMode";

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

const CodeBlock = ({ code, handleCodeChange, style, language }) => {
  const { darkMode } = useDarkMode();

  return (
    <CodeEditor
      value={code}
      placeholder="Enter code here"
      onChange={handleCodeChange}
      data-color-mode={darkMode ? "dark" : "light"}
      language={language}
      padding={10}
      className="bg-white dark:bg-gray-800 dark:text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg"
      style={style}
    />
  );
};

export default CodeBlock;