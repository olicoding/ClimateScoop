import { createContext, useRef } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const chartsRef = useRef(null);

  return <Context.Provider value={chartsRef}>{children}</Context.Provider>;
};
