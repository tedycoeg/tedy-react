import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
const AuthLayout = (props) => {
  const { children, tittle, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  {
    console.log(isDarkMode);
  }
  return (
    <div
      className={`d-flex justify-content-center align-items-center w-100 tinggi ${
        isDarkMode && "bg-dark"
      }`}
    >
      <div className="container  w-auto py-3 px-4 border-color">
        <div className="d-flex justify-content-center ">
          <div
            className="w-50 bg-primary border-radius py-2 text-center fw-bold- text-white"
            onClick={() => {
              setIsDarkMode(!isDarkMode);
            }}
          >
            {isDarkMode ? "Light" : "Dark"}
          </div>
        </div>
        <h2
          className={`text-black my-3 text-center ${
            isDarkMode && "text-white"
          }`}
        >
          {tittle}
        </h2>
        <p className={`text-black fs-5 my-3 ${isDarkMode && "text-white"}`}>
          Welcome, Please enter your details
        </p>
        {children}
        <p className={`text-center ${isDarkMode && "text-white"}`}>
          {/* Condition */}
          {type === "login"
            ? "Don'n have an account "
            : "Already have an account "}
          {type === "login" && (
            <Link to="/register" className="fw-bold text-decoration-none">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="fw-bold text-decoration-none">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
