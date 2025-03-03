import { useContext } from "react";
import ThemeContext from "../../utils/ThemeContext";
import { dark, light, cardDark, cardLight } from "../../utils/themeColors";
import { motion } from "motion/react";

const Education = () => {
  const { Theme } = useContext(ThemeContext);
  const themeColor = Theme === "dark" ? dark : light;
  const cardColor = Theme === "dark" ? cardDark : cardLight;

  const educationDetails = [
    {
      level: "Graduation",
      degree: "B.Tech in CS",
      institution: "MMM University of Technology",
      year: "2022 - 2026",
      result: "GPA: 7.5",
    },
    {
      level: "Intermediate",
      degree: "Science Stream",
      institution: "Trident Public School",
      year: "2019 - 2021",
      result: "Percentage: 84%",
    },
    {
      level: "High School",
      degree: "CBSE Board",
      institution: "MS Memorial Public School",
      year: "20018 - 2019",
      result: "Percentage: 83%",
    },
  ];

  return (
    <div
      className="flex relative h-screen w-screen items-center"
      style={{
        backgroundColor: themeColor,
      }}
    >
      <div className="fixed top-32 sm:top-12 flex sm:flex-col w-screen gap-3 p-1 sm:p-4 sm:gap-6 rounded-lg justify-center items-center mt-28">
        {educationDetails.map((item, index) => (
          <motion.div
            initial={{ opacity: 0.1 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.1 + index / 10,
            }}
            key={index}
            className="p-4 sm:p-2 border rounded-lg shadow-lg w-[25%] min-w-[105px] h-60 sm:h-auto sm:w-[60%] sm:min-w-[500px] flex flex-col items-center text-center hover:scale-105 transition-transform"
            style={{
              backgroundColor: cardColor,
            }}
          >
            <h2 className="text-[15px] sm:text-xl font-bold text-white p-2">
              {item.level}
            </h2>
            <p className="text-[13px] sm:text-lg text-gray-300">
              {item.institution}
            </p>
            <p className="text-[9px] sm:text-lg text-gray-400">{item.year}</p>
            <p className="text-[9px] sm:text-lg text-gray-400">{item.result}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
