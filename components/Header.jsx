import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const { scrollDirection, isTop } = useScrollDirection();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (scrollDirection === "down" && !isTop) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  }, [scrollDirection, isTop]);

  return (
    <header className={`header ${hideHeader ? "hide" : ""}`}>
      <NavBar />
    </header>
  );
};

export default Header;
