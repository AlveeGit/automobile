import React from "react";

function VendorDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Vendor Dashboard</h2>
      {/* Display vendor-specific stats like products sold */}
      <div>Product Sales</div>
      <div>Pending Orders</div>
      <div>Total Revenue</div>
    </div>
  );
}

export default VendorDashboard;
