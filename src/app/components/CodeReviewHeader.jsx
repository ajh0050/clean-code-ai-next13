import React from "react";
import LanguageSelect from "./LanguageSelect";
import classNames from "classnames";

const CodeReviewHeader = ({
  language,
  handleLanguageChange,
  isLoading,
  handleReview,
  handleRefactor,
}) => {
  const buttonClasses = classNames(
    "rounded",
    "bg-green-500",
    "px-2",
    "py-1",
    "font-semibold",
    "shadow-sm",
    "hover:bg-green-500/70",
    "text-white",
    "dark:text-white",
    "dark:hover:bg-green-500/70",
    "dark:shadow-md",
    "transition",
    "duration-300",
    "ease-in-out"
  );

  return (
    <div className="flex place-content-end items-center gap-2 bg-gray-500 p-3">
      <LanguageSelect
        handleLanguageChange={handleLanguageChange}
        language={language}
      />
      <div>
        <button
          className={buttonClasses}
          onClick={handleReview}
          disabled={isLoading}
        >
          Review
        </button>
      </div>
      <div>
        <button
          className={buttonClasses}
          onClick={handleRefactor}
          disabled={isLoading}
        >
          Refactor
        </button>
      </div>
    </div>
  );
};

export default CodeReviewHeader;
