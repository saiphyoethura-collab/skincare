"use client";

import Link from "next/link";

export default function LumoraHeader() {
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
          <a href="#about">Our Philosophy</a>
        </div>

        <div className="nav-actions">
          <Link href="/login" className="login-link">Account</Link>
          <Link href="/products" className="bag-link">
            SHOP NOW <span>↗</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
