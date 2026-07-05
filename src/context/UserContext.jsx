import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  function updateUser(name) {
    setUserName(name);
    localStorage.setItem("userName", name);
  }

  return (
    <UserContext.Provider value={{ userName, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
