import React from "react";
import Navbar from "./Navbar";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div>
            <svg
              className="animate-spin h-12 w-12 text-gray-900 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.962 7.962 0 0120 12h4zm-2 5.291l3 2.647A7.962 7.962 0 0024 12h-4a7.96 7.96 0 01-2 5.291zM12 20c2.206 0 4-1.794 4-4h-8c0 2.206 1.794 4 4 4z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
