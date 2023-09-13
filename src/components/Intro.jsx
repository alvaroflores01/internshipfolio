import React from "react";
import Resume from "../assets/ch2musical.pdf";
import ContactRow from "../components/ContactRow";

const Intro = () => {
  return (
    <div className="h-screen flex flex-col justify-center static mx-auto max-w-8xl">
      <div className="lg:text-7xl md:text-5xl sm:text-4xl text-2xl px-4 md:ml-[10%] text-center md:text-left text-black">
        <h1 className="italic font-light">
          Hi, my name is{" "}
          <span className="text-orange-500 font-bold ">Alvaro Flores</span>
        </h1>
        <h2 className="font-light">
          I'm a{" "}
          <span className="font-bold decoration-4 ">Fullstack Developer</span>
        </h2>
        <h3 className="text-gray-400 italic md:text-2xl sm:text-xl text-sm">
          Coding with Passion, Creating with Precision
        </h3>
        <div className="text-xl text-black">
          <ContactRow />
        </div>
      </div>
      <div className="absolute self-center bottom-0">
        <p className="italic text-center mb-2 text-black">View Projects</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4.5}
          stroke="currentColor"
          className="sm:w-40 sm:h-20 h-[10%] w-[20%] mx-auto text-orange-500 p-4 mb-5 animate-bounce transition delay-200 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Intro;
