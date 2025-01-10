import useLocalStorage from "@/hook/use-local-storage";
import React, { createContext, useContext } from "react";

type AuthContextType = {
  setToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  logout: () => Promise<void>;
  token?: string | null;
  refreshToken?: string | null;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must use inside AuthProvider.");
  }

  return context;
};

// Create a mock authentication context
const AuthContext = createContext<AuthContextType>({
  setToken: () => {},
  setRefreshToken: () => {},
  logout: async () => {},
  refreshToken: "",
  token: "",
});

// Provide the AuthContext
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useLocalStorage("at", "");
  const [refreshToken, setRefreshToken] = useLocalStorage("rt", "");
  const [user, setUser] = useLocalStorage("user", "");

  const logout = async () => {
    try {
      setToken("");
      setRefreshToken("");
      // refresh page and clear data
      window.location.replace("/");
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{ setToken, setRefreshToken, token, refreshToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
