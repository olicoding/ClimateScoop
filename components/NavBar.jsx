import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const NavBar = () => {
  const { user, isLoading } = useUser();

  if (isLoading) return null;

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link href="/">HOME</Link>
        </li>
        {!user ? (
          <li>
            <Link href="/api/auth/login">LOGIN</Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/profile">PROFILE</Link>
            </li>
            <li>
              <Link href="/api/auth/logout">LOGOUT</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
