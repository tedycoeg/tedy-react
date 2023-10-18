import { getUsername } from "../service/auth";
import { useState, useEffect } from "react";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  // GetUSERNAME Dan LoginUser
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);
  return username;
};
