"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "../../../lib/products";
import { useCart } from "../../../lib/AppProviders";

export default function ProductDetailsPage() {
  const params = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => String(item.id) === String(params.id)
  );

  if (!product) {
    return (
      <main style={{ padding: "80px 24px", textAlign: "center" }}>
        <h1>Product not found</h1>
        <p>Sorry, we could not find this product.</p>
        <Link href="/products">Back to Shop</Link>
      </main>
    );
  }

  return (
    <main
      style={{
        background: "#faf7f2",
        minHeight: "80vh",
        padding: "60px 6%",
        color: "#302a25",
      }}
    >
      <p style={{ fontSize: 13, letterSpacing: 2, color: "#82766a" }}>
        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
          HOME
        </Link>
        {" / "}
        <Link
          href="/products"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          SHOP
        </Link>
        {" / PRODUCT DETAILS"}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 48,
          alignItems: "center",
          maxWidth: 1100,
          margin: "40px auto",
        }}
      >
        <div
          style={{
            background: "#eee7dc",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              display: "block",
              width: "100%",
              aspectRatio: "4 / 5",
              objectFit: "cover",
            }}
          />
        </div>

        <section>
          <p
            style={{
              fontSize: 12,
              letterSpacing: 3,
              color: "#9a8068",
            }}
          >
            LUMORA SKINCARE
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.2,
              margin: "16px 0",
            }}
          >
            {product.name}
          </h1>

          <p style={{ fontSize: 23, margin: "20px 0" }}>
            AED {product.price}
            {product.oldPrice ? (
              <span
                style={{
                  color: "#998f84",
                  textDecoration: "line-through",
                  fontSize: 16,
                  marginLeft: 12,
                }}
              >
                AED {product.oldPrice}
              </span>
            ) : null}
          </p>

          <p style={{ lineHeight: 1.9, color: "#70665c" }}>
            {product.description ||
              "A thoughtful addition to your everyday skincare routine."}
          </p>

          <button
            onClick={() => addToCart(product)}
            style={{
              marginTop: 28,
              width: "100%",
              padding: "17px 20px",
              border: "1px solid #302a25",
              background: "#302a25",
              color: "#fff",
              cursor: "pointer",
              letterSpacing: 2,
              fontSize: 12,
            }}
          >
            ADD TO BAG
          </button>

          <p style={{ marginTop: 22, fontSize: 13, color: "#82766a" }}>
            Thoughtfully selected skincare for your daily ritual.
          </p>

          <Link
            href="/products"
            style={{
              display: "inline-block",
              marginTop: 20,
              color: "#302a25",
              fontSize: 13,
            }}
          >
            ← Continue shopping
          </Link>
        </section>
      </div>
    </main>
  );
}
