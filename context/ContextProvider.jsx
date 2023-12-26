import { useUser } from "@auth0/nextjs-auth0/client";
import { createContext, useRef, useMemo } from "react";
import useScrollDirection from "../hooks/useScrollDirection";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const { user, isLoading } = useUser();
  const chartsRef = useRef(null);
  const { currentScrollDirection, isAtPageTop } = useScrollDirection();

  const username = useMemo(() => {
    if (isLoading) return null;
    if (!user) return "Guest";

    return user["https://climatescoop/username"]
      ? user["https://climatescoop/username"]
      : user.name || user.nickname || "Guest";
  }, [user, isLoading]);

  const contextValue = useMemo(
    () => ({
      currentScrollDirection,
      isAtPageTop,
      isLoading,
      chartsRef,
      username,
    }),
    [currentScrollDirection, isAtPageTop, isLoading, chartsRef, username]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
