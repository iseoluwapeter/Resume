// import React from "react";

const Skills = () => {
  return (
    <div className="container py-5">
      <div>
        {/* header  */}
        <div className="text-4xl font-bold py-5 text-center md:text-start">
          <p>
            Skills<span className="text-purple-700">.</span>
          </p>
        </div>
      </div>

      {/* skills card  */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-5 ">
          <div className="border border-gray-600 rounded-lg p-5  hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer flex flex-col justify-center items-center">
            <p className="font-semibold text-xl">Graphics</p>
            <p>
              Adobe Photoshop <br />
              Adobe Illustrator <br />
              Adobe Lightroom <br />
            </p>
          </div>

          <div className="border border-gray-600 rounded-lg p-5  hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer flex flex-col justify-center items-center">
            <p className="font-semibold text-xl">Frontend</p>
            <p>
              React <br />
              Javacript
              <br />
              CSS <br />
            </p>
          </div>

          <div className="border border-gray-600 rounded-lg p-5  hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer flex flex-col justify-center items-center">
            <p className="font-semibold text-xl">Soft Skills</p>
            <p>
              Effective communication <br />
              Team work <br />
              Commitment <br />
              Leadership <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
