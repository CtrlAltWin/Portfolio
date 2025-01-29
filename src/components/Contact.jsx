import { useContext } from "react";
import ThemeContext from "../../utils/ThemeContext";
import { dark, light, cardDark, cardLight } from "../../utils/themeColors";

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
      className="flex relative h-screen items-center justify-center"
      style={{ backgroundColor: themeColor }}
    >
      <div className="flex flex-col gap-6 w-[60%] min-w-[500px] mt-16 h-auto p-6 rounded-lg">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg flex flex-col items-center text-center p-6  transition-transform"
            style={{
              backgroundColor: cardColor,
            }}
          >
            <img
              src={contact.logo}
              alt={contact.name}
              className="w-16 h-16 mb-4"
            />

            <a
              className="btn btn-ghost w-[30%] min-w-[200px] h-8 text-white rounded-md font-semibold  hover:scale-95 "
              href={contact.link}
            >
              Visit {contact.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
