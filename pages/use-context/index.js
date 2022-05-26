import React, { useState, createContext } from "react";
import Login from "../../components/useContext/Login";
import Profile from "../../components/useContext/Profile";

export const AppContext = createContext(null);

const Index = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <Profile />
      </AppContext.Provider>
    </div>
  );
};

export default Index;
