"use client";

import Link from "next/link";
import { useAuth } from "../lib/AppProviders";

export default function LumoraHeader() {
  const { user, loading } = useAuth();
  return (
    <>
      <div className="announcement">
        A LITTLE SELF-CARE GOES A LONG WAY
      </div>

      <nav className="lumora-nav">
        <Link href="/" className="brand">
          <span className="brand-mark">L.</span>
          <span>
            <strong>LUMORA</strong>
            <small>SKINCARE STUDIO</small>
          </span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/products">Shop All</Link>
          <a href="#bestsellers">Best Sellers</a>
          <Link href="/about">Our Philosophy</Link>
        </div>

        <div className="nav-actions">
          {loading ? (
            <span className="login-link">Account</span>
          ) : user ? (
            <Link href="/account" className="login-link">My Account</Link>
          ) : (
            <Link href="/login" className="login-link">Login / Register</Link>
          )}
          <Link href="/products" className="bag-link">
            SHOP NOW <span>↗</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
