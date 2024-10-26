import React from "react";

function Cart() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {/* Display list of items in the cart */}
      <div>Product List</div>
      <div>Total: $200</div>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
