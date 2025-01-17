// import Image from "next/image";
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { useContext } from "react";
// import { Context } from "../context/ContextProvider";
// import userImage from "../public/media/user.png";
// import Loading from "./Loading";

// const PageProfile = () => {
//   const { user, isLoading } = useUser();
//   const { username } = useContext(Context);

//   if (isLoading) return <Loading />;
//   if (!user) return <div>No user data available.</div>;

//   return (
//     <section className="user-profile-section">
//       <div className="profile-card">
//         <div className="profile-picture">
//           <Image
//             src={userImage}
//             alt={`${username}'s profile picture`}
//             priority
//           />
//         </div>
//         <h2 className="profile-name">{username}</h2>
//         <div className="new-user-message">
//           <p>
//             Thanks for joining ClimateScoop! We&apos;re currently hard at work
//             developing exclusive features for our registered users. While these
//             aren&apos;t quite ready yet, we promise they&apos;ll be worth the
//             wait. In the meantime, enjoy exploring the climate charts on the
//             homepage - they&apos;re just a glimpse of the insightful content we
//             aim to provide.
//           </p>
//           <p>
//             We value your privacy - so no unexpected emails from us. Just pure,
//             climate-focused content here on the app. Be sure to check back soon
//             for fresh updates and new features designed just for you.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PageProfile;
