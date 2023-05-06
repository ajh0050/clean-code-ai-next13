'use client';
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import useScreenWidthCheck from "../hooks/screenWidth";

export default function DonateBanner() {
  const [hideBanner, setHideBanner] = useState(false);
  const isScreenWidthSmallerThan647 = useScreenWidthCheck(647);

  if (hideBanner) {
    return null;
  }

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <span className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 w-full sm:w-auto">
        <p className="text-sm leading-6 text-gray-900">
          {isScreenWidthSmallerThan647
            ? ""
            : "If you are enjoying this, consider donating to keep it up."}
        </p>
        <a
          href="https://www.paypal.com/donate/?business=E52YQZS3ZTTK2&no_recurring=0&item_name=To+help+pay+for+the+OpenAI+bills+if+you+find+this+helpful.&currency_code=USD"
          target="_blank"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          {isScreenWidthSmallerThan647
            ? "Enjoying? Consider Donating here"
            : "Donate here"}{" "}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </span>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setHideBanner(true)}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
