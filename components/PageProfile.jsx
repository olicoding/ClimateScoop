import { useUser } from "@auth0/nextjs-auth0/client";

const PageProfile = () => {
  const { user } = useUser();

  return (
    <div className="user-profile">
      <div className="profile-card">
        {user ? (
          <>
            <img
              src={user.picture || "#"}
              alt={`${user.name || user.nickname || null}'s profile`}
            />
            <h2>
              {user.given_name ? user.name : null || user.nickname || null}
            </h2>
            <p>{user.email ?? user.email}</p>
          </>
        ) : (
          <div>no user....</div>
        )}
      </div>
    </div>
  );
};

export default PageProfile;
