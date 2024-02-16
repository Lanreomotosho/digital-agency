import React, { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, seTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem
    ("theme") : "Light"
  );

  const element = document.documentElement;

  useEffect(() => {
      localStorage.setItem("theme", "theme");
      if (theme === "dark") {
        element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return  <>{theme === "dark" ? ( <BiSolidSun  onClick={() => seTheme("light")}
   className="text-2xl"/> 
  ): (<BiSolidMoon onClick={() => seTheme("dark")}
  className="text-2xl"/> )}
    </>;
};
export default DarkMode;