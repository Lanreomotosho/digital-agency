import React, { useState, useEffect } from 'react';
import { BiSolidSun, BiiSolidMoon } from "react-icons/bi";

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
      element.classList.add("light");
      element.classList.add("dark");
    }
  });
  return  <>{theme === "dark" ? <BiSolidSun /> : <BiSolidSun />}
    </>;
};
export default DarkMode;