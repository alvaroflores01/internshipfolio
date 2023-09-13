import linkedLogo from "../assets/linkedin.png";
import Resume from "../assets/ch2musical.pdf";
import emailLogo from "../assets/email2.png";
import githubLogo from "../assets/github2.png";
import SqIcon from "../components/SqIcon";
import React from "react";

const ContactRow = () => {
  const icons = [
    {
      img: emailLogo,
      link: "#",
      alt: "Email Link",
      design: "sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] sm:drop-shadow-xl",
    },
    {
      img: githubLogo,
      link: "https://github.com/alvaroflores01",
      alt: "Github Link",
      design: "sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] sm:drop-shadow-xl",
    },
    {
      img: linkedLogo,
      link: "https://www.linkedin.com/in/alvaro-flores-23472b85",
      alt: "LinkedIn Link",
      design: " sm:h-[50px]  h-[40px] sm:drop-shadow-xl",
    },
  ];
  return (
    <ul className="flex justify-center sm:justify-between items-center  sm:w-[400px] md:w-[350px] md:mx-0 mx-auto pt-3">
      {icons.map((icon, index) => {
        return (
          <SqIcon
            key={index}
            link={icon.link}
            img={icon.img}
            alt={icon.alt}
            design={icon.design}
          />
        );
      })}
      <li className="border-2 border-orange-500 rounded-lg px-3 py-1 bg-orange-500 text-white hover:cursor-pointer sm:drop-shadow-2xl">
        <a href={Resume} download="resume">
          Download CV
        </a>
      </li>
    </ul>
  );
};

export default ContactRow;
