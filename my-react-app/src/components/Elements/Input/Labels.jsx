import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

const Label = (props) => {
  const { htmlFor, children } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <label
      htmlFor={htmlFor}
      className={`d-block text-black fw-bold mb-2 ${
        isDarkMode && "text-white"
      }`}
    >
      {children}
    </label>
  );
};

export default Label;
