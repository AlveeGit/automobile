import React from "react";

function AdminDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Add statistics and quick access to management pages */}
        <div>Product Count</div>
        <div>User Count</div>
        <div>Order Count</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
