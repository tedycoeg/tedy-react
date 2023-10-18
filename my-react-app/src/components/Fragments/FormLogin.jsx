import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/button";
import { useEffect, useRef, useState } from "react";
import { Login } from "../../service/auth";

const FormLogin = () => {
  // LoginFailed
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // console.log("Login");
    // localStorage.setItem("Email", event.target.email.value);
    // localStorage.setItem("Password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    Login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/products";
    }
  });

  //Emailref
  const usernameRef = useRef(null);

  // UseEffect dari EmailRef

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          tittle="Username"
          type="text"
          placeholder="Jhon Doe"
          name="username"
          ref={usernameRef}
        />
        <InputForm
          tittle="Password"
          type="password"
          placeholder="*****"
          name="password"
        />
        <Button
          variant="bg-primary text-white w-100 my-3 border-radius"
          type="submit"
        >
          Login
        </Button>
        {loginFailed && (
          <p className="text-danger text-center">{loginFailed}</p>
        )}
      </form>
    </>
  );
};

export default FormLogin;
