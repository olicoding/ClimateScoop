import { useUser } from "@auth0/nextjs-auth0/client";

const PageProfile = () => {
  const { user } = useUser();

  return (
    <div className="user-profile">
      <div className="profile-card">
        <img src={user.picture} alt={`${user.name}'s profile`} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default PageProfile;
