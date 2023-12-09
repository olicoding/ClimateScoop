import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const { scrollDirection, isTop } = useScrollDirection();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (isTop) {
      setHideHeader(false);
    } else if (scrollDirection === "down") {
      setHideHeader(true);
    } else if (scrollDirection === "up") {
      setHideHeader(false);
    }
  }, [scrollDirection, isTop]);

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
