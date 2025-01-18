// import { useUser } from "@auth0/nextjs-auth0/client";
// import Link from "next/link";

// const NavBar = () => {
//   const { user, isLoading } = useUser();

//   if (isLoading) return null;

//   return (
//     <nav className="navbar" data-testid="navbar">
//       <ul className="nav-list">
//         <li>
//           <Link href="/" data-testid="home-link">
//             HOME
//           </Link>
//         </li>
//         {!user ? (
//           <li>
//             <Link href="/api/auth/login" data-testid="login-link">
//               LOGIN
//             </Link>
//           </li>
//         ) : (
//           <>
//             <li>
//               <Link href="/profile" data-testid="profile-link">
//                 PROFILE
//               </Link>
//             </li>
//             <li>
//               <Link href="/api/auth/logout" data-testid="logout-link">
//                 LOGOUT
//               </Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;
