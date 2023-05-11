'use client';
import React, { useState } from "react";
import { useDarkMode } from "../contexts/darkMode";
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

  const handleReview = async () => {
    let prompt = `Assuming the role of a seasoned software engineer, you are tasked with conducting a peer review of a given ${language} file. Your primary focus lies in ensuring adherence to the principles of clean code, which include but are not limited to: self-documenting code without reliance on comments, appropriate and meaningful naming conventions for variables and functions, check for unused imports and unused functions (that aren’t exported), and the construction of fitting abstractions. These principles are inspired by industry leaders such as Kent Beck, Martin Fowler, and Robert C. Martin.
    Please remember that this task does not necessarily require the refactoring of any code. Only provide refactored code when it is instrumental to clarify a minor suggestion. It is not expected of you to overhaul the entire file.
    Your feedback should be presented in a markdown format, with each suggestion itemized on a separate line to facilitate easy navigation and each suggestion should include a specific example from the provided code.
    Now commence the code review of the following ${language} file:
    ${code}`
    if (!code) return toast.error("Please enter some code to review");
    setRefactor("");
    setReview("");
    setIsLoading(true);


    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    console.log("Initial response:", response);


    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    console.log("ReadableStream data:", data);

    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setReview((prev) => prev + chunkValue);
    }
    setIsLoading(false);
  };


  const handleRefactor = async () => {
    let prompt = `You're an expert level software engineer and have a single ${language} file to refactor. You're a stickler for clean code, meaning no comments in the code, code should be self documenting, using correct naming for variables and functions, creating the right abstractions and many more ideas that you pull from Kent Beck, Martin Fowler, Bob Martin and other engineering thought leaders. Please write inline comments about your design decisions and talking about the choices you made in your refactor (only for things you changed) and reply back the code that you refactored(only put things you actually changed). Do not include anything in the response that is not refactored code, if the code is fine you do not need to include it in the response. Please now refactor the following code:
    ${code}`
    if (!code) return toast.error("Please enter some code to refactor");
    setRefactor(" ");
    setReview("");
    setIsLoading(true);

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setRefactor((prev) => prev + chunkValue);
    }
    setIsLoading(false);
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
