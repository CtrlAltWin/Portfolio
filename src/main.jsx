import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Projects", element: <Projects /> },
      { path: "/Education", element: <Education /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
