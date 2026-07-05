import { useState } from "react";

export default function useProfile() {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });

  function updateUser(user) {
    setUserName(user);
    localStorage.setItem("userName", user);
  }

  return { userName, updateUser };
 
}
