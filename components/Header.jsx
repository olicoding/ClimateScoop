import { useContext, useEffect, useState } from "react";
import { Context } from "../context/ContextProvider";
import NavBar from "./NavBar";

const Header = () => {
  const { currentScrollDirection, isAtPageTop } = useContext(Context);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (isAtPageTop) {
      setHideHeader(false);
    } else if (currentScrollDirection === "down") {
      setHideHeader(true);
    } else if (currentScrollDirection === "up") {
      setHideHeader(false);
    }
  }, [currentScrollDirection, isAtPageTop]);

  return (
    <header
      className={`header ${hideHeader ? "hide" : ""}`}
      data-testid="header"
    >
      <NavBar />
    </header>
  );
};

export default Header;
