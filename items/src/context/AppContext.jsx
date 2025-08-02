import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [list, setList] = useState([]);

  return (
    <AppContext.Provider value={{ list, setList }}>
      {children}
    </AppContext.Provider>
  );
};
