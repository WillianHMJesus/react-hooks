import { createContext, useReducer } from "react";
import { InitialState } from "../AppContext/data";
import propType from 'prop-types';
import { reducer } from "../../Reducer";

export const GlobalContext = createContext(null);

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.prototype = {
  children: propType.node,
}