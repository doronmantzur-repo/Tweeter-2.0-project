import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../utils/supabaseClient";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = useState();
  const [isAuthReady, setIsAuthReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSession() {
      const { data, error } = await supabase.auth.getSession();

      if (data?.session?.user) {
        setActiveUser(data.session.user);
      }

      setIsAuthReady(true);
      console.log(data, isAuthReady);
    }

    fetchSession();
  }, []);

  async function handleLogin(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error);
      return error;
    }

    setActiveUser(data.user);
    navigate("/");
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setActiveUser(null);
    navigate("/pages/ProfilePage");
  }

  return (
    <AuthContext
      value={{ activeUser, onLogin: handleLogin, onLogout: handleLogout }}
    >
      {isAuthReady && children}
    </AuthContext>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
