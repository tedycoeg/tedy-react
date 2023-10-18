import { createContext, useState } from "react";

const DarkModeContext2 = createContext();

const DarkModeContextProvider2 = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DarkModeContext2.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext2.Provider>
  );
};

export const DarkMode2 = DarkModeContext2;

export default DarkModeContextProvider2;
