import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  localStorage.setItem("theme", theme);

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const changeMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return {
    changeMode,
    setTheme,
    theme,
  };
};
