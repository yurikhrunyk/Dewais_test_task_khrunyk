import React from "react";
import styles from "./UserProfile.module.css";

interface UserProfileProps {
  userName: string;
  userData: {
    name: string;
    avatar_url: string;
    bio: string;
    message: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ userData, userName }) => {
  if (userData.message) {
    return (
      <div style={{ fontWeight: "700", textAlign: "center" }}>
        Cant find user with this name
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <img
        className={styles.profileImg}
        src={userData.avatar_url}
        alt={`User ${userData.name}'s avatar`}
      />
      <p className={styles.profileText}>
        User name:{" "}
        {userData.name ? userData.name : <span>No name added yet</span>}
      </p>
      <p className={styles.profileText}>
        Bio: {userData.bio ? userData.bio : <span>No bio added yet</span>}
      </p>
      <a
        className={styles.profileLink}
        href={`https://github.com/${userName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Link for the Profile
      </a>
    </div>
  );
};

export default UserProfile;
