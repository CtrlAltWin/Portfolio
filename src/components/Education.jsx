import { useContext } from "react";
import ThemeContext from "../../utils/ThemeContext";
import { dark, light, cardDark, cardLight } from "../../utils/themeColors";

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
      year: "2020 - 2022",
      result: "Percentage: 84%",
    },
    {
      level: "High School",
      degree: "CBSE Board",
      institution: "MS Memorial Public School",
      year: "2009 - 2019",
      result: "Percentage: 83%",
    },
  ];

  return (
    <div
      className="flex relative h-screen items-center justify-center"
      style={{
        backgroundColor: themeColor,
      }}
    >
      <div className=" flex flex-col gap-6 w-[60%] min-w-[500px] mt-16 h-auto p-6 rounded-lg">
        {educationDetails.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg flex flex-col items-center text-center p-6 hover:scale-105 transition-transform"
            style={{
              backgroundColor: cardColor,
            }}
          >
            <h2 className="text-2xl font-bold text-white">{item.level}</h2>
            <p className="text-md font-semibold text-gray-300">
              {item.institution}
            </p>
            <p className="text-sm font-medium text-gray-300">{item.year}</p>
            <p className="text-sm font-medium text-gray-300">{item.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
