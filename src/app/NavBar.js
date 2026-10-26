"use client";

import Link from "next/link";
import { useAuth } from "../lib/AppProviders";
import { useCart } from "../lib/AppProviders";

export default function NavBar() {
  const { user, logout } = useAuth();
  const { items } = useCart();

  return (
    <div className="navbar">
      <Link href="/"><strong>🛍️ My Shop</strong></Link>
      <div className="links">
        <Link href="/">Products</Link>
        <Link href="/cart">Cart ({items.reduce((n, i) => n + i.qty, 0)})</Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button className="btn secondary" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}
