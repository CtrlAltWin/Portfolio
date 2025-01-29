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
      className="flex relative h-screen items-center justify-center"
      style={{
        backgroundColor: themeColor,
      }}
    >
      <div className=" flex flex-col gap-6 w-[60%] min-w-[500px] mt-24 h-auto p-6 rounded-lg">
        {projectDetails.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg flex flex-col items-center text-center p-6 hover:scale-105 transition-transform"
            style={{
              backgroundColor: cardColor,
            }}
          >
            <h2 className="text-2xl font-bold text-white">{project.name}</h2>
            <p className="text-md text-gray-300">{project.description}</p>
            <p className="text-sm font-medium text-gray-400">
              Tech Stack: {project.techStack.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-300 underline hover:text-black"
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
