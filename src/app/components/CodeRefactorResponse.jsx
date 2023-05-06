import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDarkMode } from "../contexts/darkMode";
import CodeBlock from "./CodeBlock";

const CodeRefactorResponse = ({ refactor, isLoading, language }) => {
  const { darkMode } = useDarkMode();
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color={darkMode ? "#FFF" : "#000"}
            ariaLabel="three-dots-loading"
            visible
          />
        </div>
      ) : (
        <CodeBlock
          code={refactor}
          language={language}
          style={{
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 14,
            width: "100%",
            height: "70vh",
            overflowY: "auto",
            border: "none",
          }}
        />
      )}
    </>
  );
};

export default CodeRefactorResponse;
