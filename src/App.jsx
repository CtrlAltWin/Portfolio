import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Logo from "./components/Logo";
import ThemeBtn from "./components/ThemeBtn";
import ThemeContext from "../utils/ThemeContext";
import { useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [Theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ Theme, setTheme }}>
      <div className="App">
        <Logo />
        <ThemeBtn />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
