import React from "react";
import pyLogo from "../assets/python2.png";
import jsLogo from "../assets/js.png";
import tsLogo from "../assets/tsLogo.png";
import cPPlogo from "../assets/c++.png";
import cssLogo from "../assets/css.png";
import htmlLogo from "../assets/html.png";

import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import reduxLogo from "../assets/redux.png";
import mongoLogo from "../assets/mongo2.png";
import mysqlLogo from "../assets/mysql.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import bootstrapLogo from "../assets/bootstrap2.png";
import tailwindLogo from "../assets/tailwind.png";
const About = () => {
  return (
    <div className=" ">
      <div className=" bg-orange-500 h-5/6 -skew-y-6 py-12 ">
        {/* Div Contains, ICON and PERSONAL NOTE */}
        <div className="skew-y-6 sm:pt-12 lg:text-7xl text-3xl text-white container mx-auto ">
          {/* <h1 className="italic text-center text-gray-50">About</h1> */}
          <div className="flex lg:flex-row-reverse  flex-col-reverse justify-center ">
            {/* ICON COLUMN */}
            <div className="flex flex-wrap lg:w-[600px] justify-center items-center p-8 xl:-mt-[140px] lg:-mt-[110px] md:-mt-[50px] ">
              {/* <h1 className="text-2xl">Languages & Technologies</h1> */}
              <img
                src={pyLogo}
                alt="python"
                className="object-contain w-[100px] h-[100px] p-4"
              />
              <img
                src={cPPlogo}
                alt="C++"
                className="w-[100px] h-[100px] p-3 object-contain"
              />
              <img
                src={tsLogo}
                alt="TypeScript"
                className="h-[100px] w-[100px] object-contain p-1"
              />
              <img
                src={jsLogo}
                alt="javascript"
                className="w-[100px] h-[100px] object-contain"
              />

              <img
                src={cssLogo}
                alt="CSS"
                className="w-[100px] h-[100px] object-contain p-2"
              />
              <img
                src={htmlLogo}
                alt="HTML"
                className="w-[100px] h-[100px] object-contain p-2"
              />

              <img
                src={reactLogo}
                alt="react"
                className="w-[100px] h-[100px] object-contain p-2"
              />
              <img
                src={nodeLogo}
                alt="node"
                className="w-[100px] h-[100px] object-contain p-2"
              />
              <img
                src={reduxLogo}
                alt="redux"
                className="w-[100px] h-[100px] object-contain p-2"
              />
              <img
                src={mongoLogo}
                alt="mongodb"
                className="w-[100px] h-[100px] object-contain p-2"
              />
              <img
                src={mysqlLogo}
                alt="mysql"
                className="w-[100px] h-[100px] object-contain p-2"
              />
              <img
                src={bootstrapLogo}
                alt="bootstrap"
                className="w-[100px] h-[100px] object-contain p-2"
              />
              <img
                src={tailwindLogo}
                alt="tailwindcss"
                className="w-[100px] h-[100px] object-contain p-2"
              />
            </div>
            {/* Personal note column */}
            <div className="sm:text-2xl text-lg lg:w-1/2 flex-col sm:p-12  container px-5 text-center self-center">
              <p className="italic ">
                Hello, I'm a Computer Science student at the University of
                Florida, set to graduate in Fall 2025. My journey in technology
                is driven by a passion for learning and creating. I've dabbled
                in freelancing, gaining valuable experience, but now, I'm eager
                to transition to the corporate world to refine my skills and
                grow as a developer. I'm actively seeking an internship
                opportunity to contribute my knowledge, creativity, and
                determination to meaningful projects while learning from
                experienced professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
