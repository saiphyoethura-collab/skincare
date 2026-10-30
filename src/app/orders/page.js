"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "../../lib/AppProviders";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";



export default function OrdersPage() {
  const { user, loading } = useAuth();
  const [orders, setOrders] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadOrders() {
      if (loading) return;

      if (!user) {
        setOrders([]);
        setFetching(false);
        return;
      }

      setFetching(true);
      setError("");

      try {
        const snapshot = await getDocs(
          collection(db, "users", user.uid, "orders")
        );

        const results = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        results.sort(
          (a, b) =>
            (b.createdAt?.seconds || 0) -
            (a.createdAt?.seconds || 0)
        );

        if (active) setOrders(results);
      } catch (err) {
        console.error("Failed to load orders:", err);
        if (active) setError("Could not load your orders.");
      } finally {
        if (active) setFetching(false);
      }
    }

    loadOrders();

    return () => {
      active = false;
    };
  }, [user, loading]);

  return (
    <main className="policy-page orders-page">
      <section className="policy-hero">
        <p className="policy-eyebrow">YOUR LUMORA ACCOUNT</p>
        <h1>My Orders</h1>
        <p>Keep track of your skincare essentials, from checkout to delivery.</p>
      </section>
      <section className="policy-content orders-content">
        <div className="orders-heading">
          <div>
            <p className="policy-eyebrow">ORDER HISTORY</p>
            <h2>Your Orders</h2>
          </div>
          <Link href="/products" className="orders-shop-link">CONTINUE SHOPPING →</Link>
        </div>
        {loading || fetching ? (
          <div className="orders-empty">
            <h2>Loading your orders...</h2>
          </div>
        ) : !user ? (
          <div className="orders-empty">
            <h2>Please log in</h2>
            <p>Log in to view your order history.</p>
            <Link href="/login" className="orders-shop-button">
              LOG IN
            </Link>
          </div>
        ) : error ? (
          <div className="orders-empty">
            <h2>Unable to load orders</h2>
            <p>{error}</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="orders-empty">
            <div className="orders-empty-icon">♡</div>
            <h2>No orders yet</h2>
            <p>Your next skincare favourite is waiting for you. Once you place an order, it will appear here.</p>
            <Link href="/products" className="orders-shop-button">
              EXPLORE PRODUCTS
            </Link>
          </div>
        ) : (
          <div style={{ display: "grid", gap: 22 }}>
            {orders.map((order) => (
              <article
                key={order.id}
                style={{
                  background: "#fffdf9",
                  border: "1px solid #e4d9cc",
                  padding: 28,
                }}
              >
                <p style={{ fontSize: 12, color: "#82766a" }}>
                  ORDER #{order.id.slice(0, 8).toUpperCase()}
                </p>
                <h3 style={{ fontFamily: "Georgia, serif" }}>
                  {order.createdAt?.toDate?.().toLocaleDateString() || "Recent order"}
                </h3>
                <p>Status: {order.status || "pending"}</p>

                {(order.items || []).map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 16,
                      borderBottom: "1px solid #eee5da",
                      padding: "12px 0",
                    }}
                  >
                    <span>{item.name} × {item.qty}</span>
                    <span>
                      AED {(Number(item.price) * Number(item.qty)).toFixed(2)}
                    </span>
                  </div>
                ))}

                <p style={{ textAlign: "right", marginTop: 20 }}>
                  <strong>Total: AED {Number(order.total).toFixed(2)}</strong>
                </p>
              </article>
            ))}
          </div>
        )}

        <div className="orders-help">
          <h3>Need help with an order?</h3>
          <p>If you have a question about your purchase, our team is here to help.</p>
          <Link href="/contact">Contact Us →</Link>
        </div>
      </section>
    </main>
  );
}
