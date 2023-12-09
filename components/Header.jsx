import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const { scrollDirection, isTop } = useScrollDirection();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (scrollDirection === "down" && !isTop) {
      setHideHeader(true);
    } else if (scrollDirection === "up" || isTop) {
      setHideHeader(false);
    }
  }, [scrollDirection]);

  return (
    <header className={`header ${hideHeader ? "hide" : ""}`}>
      <NavBar />
    </header>
  );
};

export default Header;
