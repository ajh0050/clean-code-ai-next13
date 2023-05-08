import React from "react";
import ReactMarkdown from "react-markdown";
import { ThreeDots } from "react-loader-spinner";
import { useDarkMode } from "../contexts/darkMode";

const CodeReviewResponse = ({ review, isLoading }) => {
  const { darkMode } = useDarkMode();
  return (
    <div>
      <p className="text-lg font-medium text-black mt-2 leading-6 uppercase tracking-wider text-center underline dark:text-white">
        Review
      </p>
      <br />
      <div className="px-5 overflow-y-auto max-h-[65vh] text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
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
          <ReactMarkdown className="overflow-hidden rounded-md px-5 [&>ol]:list-disc [&>ul]:list-disc">
            {review}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default CodeReviewResponse;