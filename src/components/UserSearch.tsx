import React from "react";
import styles from "./UserSeatch.module.css";

interface UserSearchProps {
  userName: string;
  setIsLoading: (arg0: boolean) => void;
  setUserName: (userName: string) => void;
  onUserSearch: (userName: string) => void;
}

const UserSearch: React.FC<UserSearchProps> = ({
  onUserSearch,
  setUserName,
  setIsLoading,
  userName,
}) => {
  const onSearchHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUserSearch(userName);
    setIsLoading(true);
    setUserName("");
  };

  return (
    <div className={styles.userSearch}>
      <h1 className={styles.title}>Search for a GitHub user</h1>
      <form onSubmit={onSearchHandle}>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Enter user name..."
          required
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default UserSearch;
