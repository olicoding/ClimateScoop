import { useUser } from "@auth0/nextjs-auth0/client";

const PageProfile = () => {
  const { user } = useUser();

  return (
    <div className="user-profile">
      <div className="profile-card">
        {user ? (
          <>
            <img
              className="profile-picture"
              src={user.picture || "/default-profile.jpg"}
              alt={`${user.name || user.nickname || "User"}'s profile`}
            />
            <h2 className="profile-name">
              {user.given_name
                ? user.name
                : null || user.nickname || "Anonymous"}
            </h2>
            <p className="profile-email">{user.email}</p>
          </>
        ) : (
          <div>No user data available.</div>
        )}
      </div>
    </div>
  );
};

export default PageProfile;
