import { useState } from "react";
import UserSearch from "./components/UserSearch";
import UserProfile from "./components/UserProfile";

function App() {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onUserSearch = (userName: string) => {
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;

    if (!alphanumericRegex.test(userName)) {
      alert("Username should only contain letters and numbers.");
      return;
    }

    fetch(`https://api.github.com/users/${userName}`, {
      headers: {
        Authorization: `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`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data", error);
      });
  };

  return (
    <div>
      <UserSearch
        onUserSearch={onUserSearch}
        setUserName={setUserName}
        userName={userName}
        setIsLoading={setIsLoading}
      />
      {isLoading ? (
        <p
          style={{ fontWeight: "700", textAlign: "center", paddingTop: "20px" }}
        >
          Searchind for the User...
        </p>
      ) : null}
      {userData ? (
        <UserProfile userData={userData} userName={userName} />
      ) : null}
    </div>
  );
}

export default App;
