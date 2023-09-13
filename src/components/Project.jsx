import React from "react";

export const Project = ({ title, description, liveUrl, sourceUrl, imgSrc }) => {
  return (
    <div className="sm:container mx-auto lg:flex sm:justify-center lg:my-10 gap-10 sm:items-center my-14">
      {/* Title Desc */}
      <div className="lg:max-w-[30%] ">
        {/* Title */}
        <h1 className="font-bold text-2xl my-4">{title}</h1>
        {/* Project Description */}
        <p className="italic">{description}</p>
        <div className="flex gap-3 my-4 ">
          {/* Contains Both Buttons (remember to open in new tab) */}
          <button
            className="text-white italic border-4 px-2 py-1 bg-orange-500 rounded-lg"
            onClick={() => window.open(liveUrl, "_blank")}
          >
            See Live
          </button>
          <button
            className="italic border-4 px-2 py-1 border-orange-500 rounded-lg"
            onClick={() => window.open(sourceUrl, "_blank")}
          >
            Source Code
          </button>
        </div>
      </div>
      {/* Project Image 1366x767 */}
      <div className="p-4">
        <img
          src={imgSrc}
          alt={title}
          className="w-[550px] h-auto  drop-shadow-xl rounded-2xl"
        />
        {/* <div className="bg-gray-900 w-full h-[30vh] rounded-3xl md:h-[300px] md:w-[600px]"></div> */}
      </div>
    </div>
  );
};

export default Project;
