import React from "react";

function Profile() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div>Name: John Doe</div>
      <div>Email: johndoe@example.com</div>
      {/* Button to navigate to edit profile page */}
      <button>Edit Profile</button>
    </div>
  );
}

export default Profile;
