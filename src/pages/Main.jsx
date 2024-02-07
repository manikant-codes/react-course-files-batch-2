import React from "react";
import ComponentA from "../components/contextDemo/ComponentA";
import ThemeProvider, {
  useTheme,
} from "../components/contextDemo/ThemeProvider";

function Main() {
  return (
    <ThemeProvider>
      <ComponentA />
    </ThemeProvider>
  );
}

export default Main;
