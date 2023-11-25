import { useUser } from "@auth0/nextjs-auth0/client";
import { createContext, useRef, useMemo } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const { user, isLoading } = useUser();
  const chartsRef = useRef(null);

  const username = useMemo(() => {
    if (isLoading) return null;
    if (!user) return "Guest";

    return user["https://climatescoop/username"]
      ? user["https://climatescoop/username"]
      : user.name || user.nickname || "Guest";
  }, [user, isLoading]);

  const contextValue = useMemo(
    () => ({
      chartsRef,
      user,
      username,
      isLoading,
    }),
    [chartsRef, user, username, isLoading]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
