"use client";

import Link from "next/link";
import { useCart } from "../../lib/AppProviders";

function getImageUrl(image) {
  if (typeof image !== "string") return "";

  const value = image.trim();
  const markdown = value.match(/^\[[^\]]*\]\((https?:\/\/[^\s)]+)\)$/);
  if (markdown) return markdown[1].replace(/\\&/g, "&");

  const match = value.match(/https?:\/\/[^\s)\]]+/);
  return match ? match[0].replace(/\\&/g, "&") : "";
}

export default function CartPage() {
  const { items, removeFromCart, total } = useCart();

  return (
    <main style={{
      minHeight: "75vh",
      background: "#faf7f2",
      color: "#302a25",
      padding: "56px 6%"
    }}>
      <div style={{ maxWidth: 1050, margin: "0 auto" }}>
        <p style={{ fontSize: 12, letterSpacing: 3, color: "#8c7b6b" }}>
          LUMORA / YOUR BAG
        </p>

        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(32px, 5vw, 46px)",
          fontWeight: 400,
          margin: "12px 0 32px"
        }}>
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div style={{ padding: "36px 0", borderTop: "1px solid #ded5ca" }}>
            <p>Your bag is currently empty.</p>
            <Link href="/products" style={{ color: "#302a25" }}>
              Continue shopping →
            </Link>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 36,
            alignItems: "start"
          }}>
            <section>
              {items.map((item) => {
                const imageUrl = getImageUrl(item.image);

                return (
                  <article key={item.id} style={{
                    display: "grid",
                    gridTemplateColumns: "112px minmax(0, 1fr)",
                    gap: 18,
                    padding: "20px 0",
                    borderTop: "1px solid #ded5ca"
                  }}>
                    <div style={{
                      width: 112,
                      height: 132,
                      background: "#eee7dc",
                      overflow: "hidden"
                    }}>
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={item.name}
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                            objectFit: "cover"
                          }}
                        />
                      ) : (
                        <div style={{
                          height: "100%",
                          display: "grid",
                          placeItems: "center",
                          padding: 8,
                          textAlign: "center",
                          fontSize: 12,
                          color: "#82766a"
                        }}>
                          Image unavailable
                        </div>
                      )}
                    </div>

                    <div style={{ minWidth: 0 }}>
                      <h2 style={{
                        fontSize: 16,
                        fontWeight: 500,
                        margin: "4px 0 10px"
                      }}>
                        {item.name}
                      </h2>

                      <p style={{ margin: "0 0 8px", color: "#75695e", fontSize: 13 }}>
                        Quantity: {item.qty}
                      </p>

                      <p style={{ margin: "0 0 14px", fontSize: 15 }}>
                        AED {(Number(item.price) * Number(item.qty || 1)).toFixed(2)}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          border: 0,
                          background: "transparent",
                          padding: 0,
                          color: "#75695e",
                          textDecoration: "underline",
                          cursor: "pointer",
                          fontSize: 12
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </article>
                );
              })}
            </section>

            <aside style={{
              background: "#f0e9df",
              padding: 24,
              alignSelf: "start"
            }}>
              <h2 style={{ fontSize: 18, fontWeight: 500, marginTop: 0 }}>
                Order Summary
              </h2>

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                borderTop: "1px solid #d9d0c5",
                paddingTop: 18,
                marginTop: 18,
                fontSize: 17
              }}>
                <strong>Total</strong>
                <strong>AED {Number(total).toFixed(2)}</strong>
              </div>

              <Link href="/checkout" style={{
                display: "block",
                textAlign: "center",
                marginTop: 22,
                padding: "16px 12px",
                background: "#302a25",
                color: "#fff",
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: 2
              }}>
                PROCEED TO CHECKOUT
              </Link>

              <Link href="/products" style={{
                display: "block",
                textAlign: "center",
                marginTop: 16,
                padding: "14px 12px",
                border: "1px solid #8b785d",
                background: "#fffdf9",
                color: "#514432",
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 1.2,
                transition: "background 0.2s ease"
              }}>
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
