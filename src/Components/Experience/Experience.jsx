import React from "react";

const Experience = () => {
  return (
    <div className="container py-5">
      {/* header  */}
      <div className="text-4xl font-bold py-5 text-center md:text-start">
        <p>
          Experience<span className="text-purple-700">.</span>
        </p>
      </div>

      {/* Experience slide */}
      <div className="space-y-5">
        <div className="flex justify-start gap-16 items-center px-5 md:px-0">
          <div className="border-l-4 border-purple-700 px-2 font-semibold text-lg text-gray-600 md:text-2xl">
            Treesoft
            <p className="text-sm font-medium md:text-lg">Nigeria</p>
          </div>

          <div className="text-gray-600 md:text-2xl ">
            Engineer
            <span className="text-purple-600 font-semibold">
              @ Treesoft developer
            </span>
          </div>
        </div>

        <div className="flex justify-start gap-[85px] items-center px-5 md:px-0 md:gap-[110px]">
          <div className="border-l-4 border-gray-600 text-gray-600 px-2 font-semibold text-lg md:text-2xl">
            SQI
            <p className="text-sm font-medium">Nigeria</p>
          </div>

          <div className="text-gray-600 md:text-2xl ">
            Built and developed highly interactive web applications
          </div>
        </div>

        <div className="flex justify-start gap-[72px] items-center px-5 md:px-0 md:gap-[73px]">
          <div className="border-l-4 border-gray-600 text-gray-600 px-1 font-semibold text-lg md:text-2xl">
            Phoneix
            <p className="text-sm font-medium">Nigeria</p>
          </div>

          <div className="text-gray-600 md:text-2xl">
            Built and developed highly interactive web applications using
            react.js
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
