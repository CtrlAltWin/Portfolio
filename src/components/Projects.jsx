import { useContext } from "react";
import ThemeContext from "../../utils/ThemeContext";
import { dark, light, cardDark, cardLight } from "../../utils/themeColors";

const Projects = () => {
  const { Theme } = useContext(ThemeContext);
  const themeColor = Theme === "dark" ? dark : light;
  const cardColor = Theme === "dark" ? cardDark : cardLight;

  const projectDetails = [
    {
      name: "Foodie",
      description: "A food ordering app using Swiggy's API, built with React.",
      techStack: ["React", "Tailwind CSS", "Swiggy API"],
      link: "https://github.com/CtrlAltWin/Foodie",
    },
    {
      name: "CodersMedia",
      description:
        "An application designed for connecting developers and fostering collaboration.",
      techStack: ["MERN Stack", "Redux", "MongoDB"],
      link: "https://github.com/CtrlAltWin/CodersMedia",
    },
    {
      name: "Portfolio",
      description: "Personal portfolio showcasing projects and skills.",
      techStack: ["React", "Tailwind CSS"],
      link: "https://github.com/CtrlAltWin/Portfolio",
    },
  ];

  return (
    <div
      className="flex relative h-screen w-screen items-center"
      style={{
        backgroundColor: themeColor,
      }}
    >
      <div className="fixed top-20 flex sm:flex-col w-screen gap-2 sm:gap-6  p-2 rounded-lg justify-center items-center mt-24">
        {projectDetails.map((project, index) => (
          <div
            key={index}
            className="p-1 border rounded-lg shadow-lg w-[25%] min-w-[105px] h-80 sm:h-auto sm:w-[60%] sm:min-w-[500px] flex flex-col items-center text-center hover:scale-105 transition-transform"
            style={{
              backgroundColor: cardColor,
            }}
          >
            <h2 className="text-[15px] sm:text-xl font-bold text-white p-2">{project.name}</h2>
            <p className="text-[13px] sm:text-lg text-gray-300">{project.description}</p>
            <p className="text-[9px] sm:text-lg  text-gray-400">
              Tech Stack: {project.techStack.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[8px] sm:text-lg mt-2 text-blue-300 underline hover:text-black"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
