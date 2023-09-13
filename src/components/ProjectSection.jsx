import smartTaskImg from "../assets/imgs/smarttask3.png";
import grocerylistImg from "../assets/imgs/grocery2.png";
import weatherwiseImg from "../assets/imgs/weatherwise1.png";
import sudokuImg from "../assets/imgs/sudoku2.png";

import Project from "../components/Project";
const ProjectSection = () => {
  const projects = [
    {
      title: "smartTask",
      description:
        "smartTask is an AI-powered daily planner is a sophisticated web application that seamlessly integrates front-end and back-end technologies. The front-end is built using React, incorporating user-friendly interfaces through React components, JSX, and state management for efficient task organization. The application also harnesses third-party APIs, including the OpenAI API, for real-time data synchronization and secure user authentication, employing JWT tokens sent via cookies.",
      liveUrl: "https://smart-task-ai-front.vercel.app/",
      sourceUrl:
        "https://github.com/alvaroflores01/SmartTask--AI-Daily-Planner",
      imgSrc: smartTaskImg,
    },
    {
      title: "weatherWise",
      description:
        "web application to display the weekly weather forecast of the user's location, utilizing a weather API for data retrieval, dynamic rendering of weather data using React components, and integrated geolocation functionality for personalized weather information.",
      liveUrl: "https://weatherwise-mu.vercel.app/",
      sourceUrl: "https://github.com/alvaroflores01/weatherwise",
      imgSrc: weatherwiseImg,
    },
    {
      title: "Sudoku Pygame",
      description:
        "As a collaborative effort, our team successfully developed a Sudoku game using Python and the Pygame library. The project showcased our proficiency in object-oriented programming (OOP) by structuring the game logic, user interfaces, and input handling with a modular approach. This interactive Sudoku game allowed players to solve puzzles and enjoy a classic gaming experience.",
      liveUrl: "https://www.youtube.com/watch?v=yOcjwtczAmE",
      sourceUrl: "https://github.com/esize/sudoku",
      imgSrc: sudokuImg,
    },
    {
      title: "Grocery List",
      description:
        "Developed a web-based grocery list manager using HTML, CSS, and vanilla JavaScript. The application allows users to add, clear, mark items as completed, and remove them from the list. This application introduced me to the world of DOM manipulation and dynamic rendering.",
      liveUrl: "https://grocery-list-vanillajs.vercel.app/",
      sourceUrl: "https://github.com/alvaroflores01/grocery_list_vanillaJS",
      imgSrc: grocerylistImg,
    },
  ];
  return (
    <div className="-mt-[150px]  bg-white flex flex-col items-center">
      <div className="  z-10 mt-24 w-full px-3 ">
        {" "}
        <h1 className=" italic text-black-300 z-10 lg:text-7xl text-3xl sm:mt-[1/6] text-center mt-24 text-orange-500 py-5 ">
          Projects
        </h1>
        {projects.map((project, idx) => {
          return (
            <Project
              key={idx}
              title={project.title}
              description={project.description}
              liveUrl={project.liveUrl}
              sourceUrl={project.sourceUrl}
              imgSrc={project.imgSrc}
            />
          );
        })}
        {/* <Project
          title="SmartTask"
          description="          A Modern Portfolio Template for Developers. It's a fully responsive
          Portfolio template with thoroughly documented setup to get you up and
          running with your own Portfolio Website."
          liveUrl="#"
          sourceUrl="#"
        /> */}
      </div>
    </div>
  );
};

export default ProjectSection;
