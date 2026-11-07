function UserDetails({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="user-avatar large">
          {user.name.charAt(0)}
        </div>

        <h2>{user.name}</h2>

        <div className="details-info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Street:</strong> {user.address.street}</p>
        </div>

        <button className="details-btn full-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default UserDetails;