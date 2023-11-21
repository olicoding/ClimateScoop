import Image from "next/image";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import userImage from "../public/user.png";
import Loading from "./Loading";

const PageProfile = () => {
  const { user, username, isLoading } = useContext(Context);

  if (isLoading) return <Loading />;
  if (!user) return <div>No user data available.</div>;

  return (
    <section className="user-profile">
      <div className="profile-card">
        <div className="profile-picture">
          <Image
            src={userImage}
            alt={`${username}'s profile picture`}
            priority
          />
        </div>
        <h2 className="profile-name">{username}</h2>
        <p className="profile-email">{user.name}</p>
      </div>
    </section>
  );
};

export default PageProfile;
