import React, { useState, useEffect, useMemo, } from "react";
import { ThemeContext } from "./context";
import Frame from "./components/Frame";

function App() {

  const [isLight, setIsLight] = useState(true);
  const theme = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight])

  return (
    <ThemeContext.Provider value={theme}>
      <div className="flex justify-center my-5 ">
        <Frame />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
