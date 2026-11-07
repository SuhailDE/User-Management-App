import useFavoriteStore from "../store/favoriteStore";

function UserCard({ user, onDetails }) {
  const { favorites, toggleFavorite } = useFavoriteStore();

  const isFavorite = favorites.some(
    (fav) => fav.id === user.id
  );

  return (
    <div className="user-card">
      <div className="user-avatar">
        {user.name.charAt(0)}
      </div>

      <h3>{user.name}</h3>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <div className="card-buttons">
        <button
          className="details-btn"
          onClick={() => onDetails(user)}
        >
          Details
        </button>

        <button
          className={isFavorite ? "favorite-btn saved" : "favorite-btn"}
          onClick={() => toggleFavorite(user)}
        >
          {isFavorite ? "♥ Favorited" : "♡ Favorite"}
        </button>
      </div>
    </div>
  );
}

export default UserCard;