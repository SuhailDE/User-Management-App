import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import UserDetails from "./components/UserDetails";
import FavoriteList from "./components/FavoriteList";

import useFavoriteStore from "./store/favoriteStore";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState("users");

  const favoriteCount = useFavoriteStore(
    (state) => state.favorites.length
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="app">
      <Navbar
        totalUsers={users.length}
        favoriteCount={favoriteCount}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="container">
        <div className="page-heading">
          <h1>
            {activeTab === "users"
              ? "Explore Users"
              : "Favorite Users"}
          </h1>

          <p>
            {activeTab === "users"
              ? "Manage and explore all users."
              : "Your saved favorite users."}
          </p>
        </div>

        {activeTab === "users" && (
          <>
            {loading && (
              <div className="loading">
                Loading users...
              </div>
            )}

            {error && (
              <div className="error">
                {error}
              </div>
            )}

            {!loading && !error && (
              <div className="user-grid">
                {users.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onDetails={setSelectedUser}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === "favorites" && (
          <FavoriteList onDetails={setSelectedUser} />
        )}
      </main>

      {selectedUser && (
        <UserDetails
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}

      <footer className="footer">
        <p>© 2026 UserHub | Built with React & Zustand</p>
      </footer>
    </div>
  );
}

export default App;