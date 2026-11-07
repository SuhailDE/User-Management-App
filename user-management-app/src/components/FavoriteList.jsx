import useFavoriteStore from "../store/favoriteStore";
import UserCard from "./UserCard";

function FavoriteList({ onDetails }) {
  const favorites = useFavoriteStore(
    (state) => state.favorites
  );

  return (
    <div>
      {favorites.length === 0 ? (
        <div className="empty-state">
          <h2>No Favorite Users Yet!</h2>
          <p>Add users to your favorite list.</p>
        </div>
      ) : (
        <div className="user-grid">
          {favorites.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onDetails={onDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteList;