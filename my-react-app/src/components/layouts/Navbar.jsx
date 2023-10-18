import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import { DarkMode } from "../../context/DarkMode";
import Button from "../Elements/Button/button";
import { useTotalPrice } from "../../context/TotalPrice";

const Navbar = () => {
  const username = useLogin();

  const [totalCart, setTotalCart] = useState(0);

  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  // DarkMode

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.qty, 0);
    setTotalCart(sum);
  }, [cart]);
  // Hanlde Logout
  const handleLogout = () => {
    // Event Handler
    localStorage.removeItem("token");
    localStorage.removeItem("Password");
    window.location.href = "/login";
  };
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`d-flex w-100 justify-content-end align-items-center  py-3 px-5 text-dark ${
        isDarkMode && "bg-dark text-white"
      }`}
    >
      {username}
      <Button
        variant="bg-primary text-white border-radius mx-3"
        // Event Handler
        onClick={handleLogout}
      >
        Logout
      </Button>
      <div
        className={` text-white py-2 px-4 border-radius fw-bold mx-2 ${
          isDarkMode && "bg-primary"
        } ${!isDarkMode && "bg-dark"} `}
      >
        {`${totalCart} items || $${total}`}
      </div>
      <div
        className={`text-white py-2 px-4 border-radius fw-bold mx-2 ${
          isDarkMode && "bg-primary"
        } ${!isDarkMode && "bg-dark"} `}
        onClick={() => {
          setIsDarkMode(!isDarkMode);
          console.log(isDarkMode);
        }}
      >
        {isDarkMode ? "Light" : "Dark"}
      </div>
    </div>
  );
};

export default Navbar;
