import React, { createContext, useReducer } from "react";
import StateReducer from "./StateReducer";

const initialState = {
  transactions: [
    { description: "Income 1", amount: 1000 },
    { description: "Income 2", amount: 2000 },
  ],
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StateReducer, initialState);
  console.log(state);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
