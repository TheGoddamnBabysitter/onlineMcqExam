import React from "react";

function PastExam({ index, data }) {
  return (
    <>
      <div
        key={index}
        className="bg-white rounded-lg shadow-md p-4 max-w-2xl mx-auto"
      >
        <figure>
          <img
            src={`
                /assets/past-exam-image/${data.subject}.png
              `}
            alt="Subject Image"
            className="w-full h-48 object-cover rounded-md"
          />
        </figure>
        <div className="mt-4">
          <h2 className="text-[17px] font-bold mb-2">
            {" "}
            {data.subject
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
            Paper
          </h2>
          <p className="text-gray-600">
            Chapter:{" "}
            {data.chapter.length > 1
              ? data.chapter.map((word) => word + ", ")
              : data.chapter}
          </p>
          <div className="flex flex-col justify-between">
            <span className="text-gray-500">
              Date:{" "}
              {
                new Date(data.timeStamp)
                  .toLocaleString("en-US", { timeZone: "Asia/Dhaka" }) // Adjust timezone
                  .split(", ")[0] // Extract date part
                  .split("/") // Split into mm, dd, yyyy
                  .join("/", [1, 0, 2]) // Rearrange to dd-mm-yyyy
                  .slice(0, 10) // Isolate dd-mm-yyyy
              }
            </span>
            <span className="text-gray-500">
              Marks:{" "}
              {data.obtainedMarks
                ? `${data.obtainedMarks}/${data.totalMarks}`
                : `N/A`}
            </span>
            <span className="text-gray-500">
              Exam code: {data._id.slice(-9, -1)}
            </span>
          </div>
          <div className="mt-4">
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
              Sollution
            </button>{" "}
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
              Retake
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PastExam;
