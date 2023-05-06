'use client';
import React, { useState, useEffect } from "react";
import { useDarkMode } from "../contexts/darkMode";
import InternalApiService from "../services/internalApiService";
import { toast } from "react-toastify";
import CodeBlock from "./CodeBlock";
import CodeReviewResponse from "./CodeReviewResponse";
import CodeRefactorResponse from "./CodeRefactorResponse";
import CodeReviewHeader from "./CodeReviewHeader";
import classNames from "classnames";

const CodeReview = () => {
  const { darkMode } = useDarkMode();

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("jsx");
  const [review, setReview] = useState("");
  const [refactor, setRefactor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleReview = () => {
    if (!code) return toast.error("Please enter some code to review");
    setRefactor("");
    setReview("");
    setIsLoading(true);
    new InternalApiService()
      .post("/review", {
        codeToReview: code,
        language,
      })
      .then((response) => {
        setIsLoading(false);
        setReview(response?.result);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        toast.error(`An error happened: ${error.message}`);
      });
  };

  const handleRefactor = () => {
    if (!code) return toast.error("Please enter some code to refactor");
    setRefactor("loading");
    setReview("");
    setIsLoading(true);
    new InternalApiService()
      .post("/refactor", {
        codeToReview: code,
        language,
      })
      .then((response) => {
        setIsLoading(false);
        setRefactor(response?.result);
      })
      .catch((error) => {
        setRefactor("");
        setIsLoading(false);
        console.error(error);
        toast.error(`An error happened: ${error.message}`);
      });
  };

  const containerClasses = classNames(
    "container",
    "mx-auto",
    "text-black",
    "dark:text-white",
    "h-full",
    "drop-shadow-xl",
    { dark: darkMode }
  );

  const containerStyle = {
    backgroundImage: darkMode
      ? "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"
      : "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
  };

  return (
    <div
      className={containerClasses}
      style={{ ...containerStyle, minHeight: "70vh" }}
    >
      <CodeReviewHeader
        language={language}
        handleLanguageChange={handleLanguageChange}
        handleReview={handleReview}
        handleRefactor={handleRefactor}
        isLoading={isLoading}
      />
      <div className="flex justify-between h-full">
        <CodeBlock
          code={code}
          handleCodeChange={handleCodeChange}
          language={language}
          style={{
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 14,
            width: "50%",
            height: "70vh",
            overflowY: "auto",
            border: "none",
          }}
        />
        <div style={{ width: "50%" }}>
          {refactor ? (
            <CodeRefactorResponse
              refactor={refactor}
              language={language}
              isLoading={isLoading}
            />
          ) : (
            <CodeReviewResponse review={review} isLoading={isLoading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeReview;
