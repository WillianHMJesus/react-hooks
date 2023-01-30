import { createContext } from "react";
import { globalState } from "./data";

export const GlobalContext = createContext(null);

export const AppContext = ({ children }) => {
  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};