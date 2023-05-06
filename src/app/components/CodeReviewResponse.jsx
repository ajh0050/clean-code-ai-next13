import React from "react";
import ReactMarkdown from "react-markdown";
import { ThreeDots } from "react-loader-spinner";
import { useDarkMode } from "../contexts/darkMode";

const CodeReviewResponse = ({ review, isLoading }) => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <p className="text-lg font-medium text-black mt-4 leading-6 uppercase tracking-wider text-center underline dark:text-white">
        Review
      </p>
      <br />
      <div className="px-5">
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
          <ReactMarkdown className="overflow-hidden rounded-md p-5 [&>ol]:list-disc [&>ul]:list-disc">
            {review}
          </ReactMarkdown>
        )}
      </div>
    </>
  );
};

export default CodeReviewResponse;