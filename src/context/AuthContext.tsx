import { createContext, useContext, useState } from 'react';

// Create a mock authentication context
const AuthContext = createContext({
  user: null,
  logout: () => {},
  login: () => {},
});

// Provide the AuthContext
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      userName: 'John Doe',
      email: 'john.doe@example.com',
      shopLogo: 'https://github.com/shadcn.png',
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
