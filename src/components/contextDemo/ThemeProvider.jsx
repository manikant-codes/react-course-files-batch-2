import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}

function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
