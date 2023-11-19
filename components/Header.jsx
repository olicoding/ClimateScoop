//
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    setHideHeader(scrollDirection === "down");
  }, [scrollDirection]);

  return (
    <header className={`header ${hideHeader ? "hide" : ""}`}>
      <NavBar />
    </header>
  );
};

export default Header;
