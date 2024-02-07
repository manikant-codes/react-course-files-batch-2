import React from "react";
import ComponentB from "./ComponentB";
import UserProvider from "./UserProvider";
import { useTheme } from "./ThemeProvider";

function ComponentA() {
  const { theme, setTheme } = useTheme();
  console.log("theme", theme);

  const divStyles = {
    backgroundColor: theme === "dark" ? "#212121" : "#fafafa",
    color: theme === "dark" ? "#fafafa" : "#212121",
  };

  return (
    <UserProvider>
      <div style={divStyles}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          dolorum? Repellendus itaque officia provident tempore distinctio. Iure
          eveniet, modi commodi illum aspernatur architecto atque, quos
          perferendis velit harum fugit voluptatum?
        </p>
        <ComponentB />
        <button
          onClick={() => {
            if (theme === "light") {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        >
          Toggle Theme
        </button>
      </div>
    </UserProvider>
  );
}

export default ComponentA;
