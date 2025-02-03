import { useContext } from "react";
import ThemeContext from "../../utils/ThemeContext";
import { dark, light, cardDark, cardLight } from "../../utils/themeColors";
import { motion } from "motion/react";
const Contact = () => {
  const { Theme } = useContext(ThemeContext);
  const themeColor = Theme === "dark" ? dark : light;
  const cardColor = Theme === "dark" ? cardDark : cardLight;

  const contacts = [
    {
      logo: "logo/Gmail_icon_(2020).svg.png",
      name: "Gmail",
      link: "mailto:raunakkumar7245@gmail.com",
    },
    {
      logo: "logo/LinkedIn_icon.svg.png",
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/raunak-kumar-065289266/",
    },
  ];

  return (
    <div
      className="flex relative h-screen w-screen items-center"
      style={{ backgroundColor: themeColor }}
    >
      <div className="fixed top-36 sm:top-24 flex sm:flex-col w-screen gap-3 p-1 sm:p-4 sm:gap-6 rounded-lg justify-center items-center mt-24">
        {contacts.map((contact, index) => (
          <motion.div
            initial={{ opacity: 0.1, scale: 0.9 }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            key={index}
            className="pt-14 p-2 sm:p-4 border rounded-lg shadow-lg w-[30%] min-w-[105px] h-56 sm:h-auto sm:w-[60%] sm:min-w-[500px] flex flex-col items-center text-center hover:scale-105 transition-transform"
            style={{
              backgroundColor: cardColor,
            }}
          >
            <img
              src={contact.logo}
              alt={contact.name}
              className="w-12 h-12 sm:mt-4 sm:w-16 sm:h-16 mb-2 sm:mb-4"
            />
            <a
              className="btn btn-ghost p-2 w-[40%] min-w-[100px] sm:min-w-[200px] h-6 sm:h-10 text-[9px] sm:text-md text-white font-semibold rounded-md flex items-center justify-center hover:scale-95"
              href={contact.link}
            >
              Visit {contact.name}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
