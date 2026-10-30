"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, useAuth } from "../../lib/AppProviders";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function CheckoutPage() {
  const { items, total, removeFromCart } = useCart();
  const { user, loading } = useAuth();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "Dubai",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "phone") {
      if (!/^\+?[0-9]*$/.test(value)) return;
      if (value.length > 16) return;
    }

    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading || saving) return;

    if (!user) {
      alert("Please log in before placing an order.");
      router.push("/login");
      return;
    }

    if (items.length === 0) {
      alert("Your bag is empty. Please add a product first.");
      return;
    }

    setSaving(true);

    try {
      await addDoc(collection(db, "users", user.uid, "orders"), {
        userId: user.uid,
        customer: { ...form },
        items: items.map((item) => ({
          id: String(item.id),
          name: item.name,
          price: Number(item.price),
          qty: Number(item.qty),
          image: item.image || "",
        })),
        total: Number(total),
        currency: "AED",
        status: "pending",
        paymentStatus: "unpaid",
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Order saving failed:", error);
      alert("Could not save your order. Please try again.");
    } finally {
      setSaving(false);
    }
  }
  if (submitted) {
    return (
      <main
        style={{
          background: "#faf7f2",
          minHeight: "70vh",
          padding: "100px 24px",
          textAlign: "center",
          color: "#302a25",
        }}
      >
        <p style={{ letterSpacing: 3, fontSize: 12 }}>LUMORA</p>
        <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}>
          Thank you, {form.name}.
        </h1>
        <p style={{ lineHeight: 1.8 }}>
          Your order has been saved successfully.
          <br />
          Payment has not been collected yet.
        </p>
        <Link
          href="/products"
          style={{
            display: "inline-block",
            marginTop: 24,
            padding: "15px 24px",
            background: "#302a25",
            color: "white",
            textDecoration: "none",
          }}
        >
          CONTINUE SHOPPING
        </Link>
      </main>
    );
  }

  return (
    <main
      style={{
        background: "#faf7f2",
        minHeight: "80vh",
        padding: "50px 6%",
        color: "#302a25",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Link
          href="/products"
          style={{ color: "#75695e", fontSize: 13, textDecoration: "none" }}
        >
          ← BACK TO SHOP
        </Link>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 42,
            fontWeight: 400,
            margin: "28px 0 36px",
          }}
        >
          Checkout
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
          }}
        >
          <form onSubmit={handleSubmit}>
            <h2 style={{ fontSize: 18, fontWeight: 500 }}>
              Delivery information
            </h2>

            {[
              { name: "name", label: "Full name", type: "text" },
              { name: "email", label: "Email address", type: "email" },
              { name: "phone", label: "Phone number", type: "tel" },
              { name: "address", label: "Delivery address", type: "text" },
              { name: "city", label: "City", type: "text" },
            ].map((field) => (
              <label
                key={field.name}
                style={{
                  display: "block",
                  marginTop: 20,
                  fontSize: 13,
                }}
              >
                {field.label}
                <input
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                  style={{
                    display: "block",
                    boxSizing: "border-box",
                    width: "100%",
                    padding: 14,
                    marginTop: 8,
                    border: "1px solid #d9d0c5",
                    background: "#fffdf9",
                    color: "#302a25",
                    outlineColor: "#9a8068",
                  }}
                />
              </label>
            ))}

            <button
              type="submit"
              style={{
                marginTop: 28,
                width: "100%",
                padding: 17,
                border: "none",
                background: "#302a25",
                color: "white",
                cursor: "pointer",
                letterSpacing: 2,
              }}
            >
              {saving ? "SAVING ORDER..." : "PLACE ORDER"}
            </button>

            <p style={{ fontSize: 12, color: "#82766a", lineHeight: 1.7 }}>
              Your order will be saved. Online payment is not available yet.
            </p>
          </form>

          <aside
            style={{
              background: "#f0e9df",
              padding: 28,
              alignSelf: "start",
            }}
          >
            <h2 style={{ fontSize: 18, fontWeight: 500 }}>
              Your order ({items.reduce((sum, item) => sum + item.qty, 0)})
            </h2>

            {items.length === 0 ? (
              <p style={{ color: "#75695e", lineHeight: 1.8 }}>
                Your bag is empty.
                <br />
                <Link href="/products" style={{ color: "#302a25" }}>
                  Browse products
                </Link>
              </p>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "18px 0",
                    borderBottom: "1px solid #d9d0c5",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: 76,
                      height: 90,
                      objectFit: "cover",
                      background: "#fff",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: "0 0 8px", fontSize: 14 }}>
                      {item.name}
                    </p>
                    <p style={{ margin: 0, fontSize: 13, color: "#75695e" }}>
                      Qty: {item.qty}
                    </p>
                    <p style={{ margin: "8px 0", fontSize: 14 }}>
                      AED {(item.price * item.qty).toFixed(2)}
                    </p>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        border: "none",
                        padding: 0,
                        background: "transparent",
                        color: "#75695e",
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontSize: 12,
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                paddingTop: 22,
                fontSize: 17,
              }}
            >
              <strong>Total</strong>
              <strong>AED {Number(total).toFixed(2)}</strong>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
