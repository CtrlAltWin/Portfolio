import { useState, useEffect } from "react";
import { useContext } from "react";
import ThemeContext from "../../utils/ThemeContext";
import { dark, light } from "../../utils/themeColors";
import { useNavigate } from "react-router-dom";

const s = "hello! user, great to have you here.";
const arr = [];
let ss = "";
for (let i = 0; i < s.length; i++) {
  ss += s[i];
  arr.push(ss);
}
let index = 0;

const Home = () => {
  const [Message, setMessage] = useState(s);
  const { Theme } = useContext(ThemeContext);
  const themeColor = Theme === "dark" ? dark : light;
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      index = index + 1;
      if (index < arr.length) setMessage(arr[index]);
    }, 50);
  });

  return (
    <div
      className="Home relative flex-col h-screen w-screen"
      style={{ backgroundColor: themeColor }}
    >
      {/* Profile Section */}
      <div className="mt-32 profile-container text-center absolute top-10 w-full flex flex-col items-center">
        {/* Profile Picture */}
        <div className="profile-img w-32 h-32 rounded-full border-4 border-white mb-4">
          <img
            src="logo/WhatsApp Image 2025-01-29 at 19.59.00_9c8bb7f0.jpg"
            alt="Raunak"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="text-white text-2xl font-semibold ">
          <p>Raunak</p>
          <p className="text-xl text-gray-400">Full Stack Developer</p>
        </div>
      </div>

      {/* Message Animation */}
      <div className="px-10 absolute text-gray-300 flex h-5/6 w-full items-center justify-center mt-28">
        <div className="hidden md:block  text-4xl font-semibold font-poppins text-center tracking-wider">
          {Message + (Message.length < s.length ? "|" : "")}
        </div>
        <div className="md:hidden text-4xl font-semibold font-poppins text-center tracking-wider">
          {"hello! user,"}
        </div>
      </div>

      {/* Buttons Section */}
      <div className="absolute flex flex-col gap-4 h-full w-full justify-center items-center mt-40">
        {true ? (
          <div className="few-Btns mt-10">
            <div className="flex gap-4 justify-center">
              <button
                className="bg-blue-400 text-white text-xl py-3 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-blue-500 w-48"
                onClick={() => {
                  navigate("/Contact");
                }}
              >
                Let's Connect!
              </button>
              <button
                className="bg-indigo-300 text-white text-xl py-3 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-indigo-400 w-48"
                onClick={() => {
                  navigate("/Projects");
                }}
              >
                See Projects
              </button>
            </div>
            <div className="flex gap-4 justify-center mt-5">
              <button
                className="bg-blue-400 text-white text-xl py-3 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-blue-500 w-48"
                onClick={() => {
                  window.open("https://leetcode.com/raunak_1611/", "_blank");
                }}
              >
                My Leetcode
              </button>
              <button
                className="bg-indigo-300 text-white text-xl py-3 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-indigo-400 w-48"
                onClick={() => {
                  window.open("https://github.com/CtrlAltWin", "_blank");
                }}
              >
                My Github
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Home;
