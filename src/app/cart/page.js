"use client";

import { useCart } from "../../lib/AppProviders";

export default function CartPage() {
  const { items, removeFromCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container">
        <h1>Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Cart</h1>
      {items.map((item) => (
        <div className="cart-row" key={item.id}>
          <span>
            {item.image} {item.name} x{item.qty}
          </span>
          <span>
            ${item.price * item.qty}{" "}
            <button className="btn secondary" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </span>
        </div>
      ))}
      <h2>Total: ${total}</h2>
      <button className="btn" onClick={() => alert("Checkout flow — up to you to build next!")}>
        Checkout
      </button>
    </div>
  );
}
