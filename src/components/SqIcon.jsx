import React from "react";

const SqIcon = ({ img, alt, design, link }) => {
  if (alt == "Email Link") {
    return (
      <li className="">
        <img
          src={img}
          alt={alt}
          className={`${design} hover:cursor-pointer`}
          onClick={() => (window.location.href = "mailto:aflores39@ufl.edu")}
        />
      </li>
    );
  }
  return (
    <li className="">
      <img
        src={img}
        alt={alt}
        className={`${design} hover:cursor-pointer`}
        onClick={() => window.open(link, "_blank")}
      />
    </li>
  );
};

export default SqIcon;
