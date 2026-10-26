"use client";

import Link from "next/link";
import { useCart } from "../../lib/AppProviders";
import { products } from "../../lib/products";

export default function ShopPage() {
  const { items, addToCart, removeFromCart, total } = useCart();
  const count = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <main className="shop-page">
      <style jsx global>{`
        .shop-page {
          min-height: 100vh;
          background: #f8f5ef;
          color: #39352e;
          padding: 54px 5% 90px;
          font-family: Arial, Helvetica, sans-serif;
        }
        .shop-heading {
          max-width: 1300px;
          margin: 0 auto 38px;
        }
        .shop-eyebrow {
          font-size: 11px;
          letter-spacing: 3px;
          color: #927e61;
        }
        .shop-heading h1 {
          font-family: Georgia, serif;
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 400;
          margin: 12px 0;
        }
        .shop-heading p {
          color: #81796e;
          line-height: 1.8;
        }
        .shop-layout {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 300px;
          gap: 34px;
          align-items: start;
        }
        .shop-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px 18px;
        }
        .shop-product {
          min-width: 0;
        }
        .shop-image-wrap {
          background: #eee7dc;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          position: relative;
        }
        .shop-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }
        .shop-product:hover .shop-image {
          transform: scale(1.04);
        }
        .shop-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #f8f5ef;
          color: #6d5b43;
          padding: 7px 9px;
          font-size: 9px;
          letter-spacing: 1px;
        }
        .shop-category {
          color: #9b876c;
          font-size: 10px;
          letter-spacing: 2px;
          margin: 15px 0 7px;
        }
        .shop-product h2 {
          font-family: Georgia, serif;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 400;
          margin: 0 0 8px;
        }
        .shop-price {
          font-size: 14px;
          margin-bottom: 13px;
        }
        .shop-old-price {
          color: #a69d90;
          text-decoration: line-through;
          margin-left: 7px;
        }
        .shop-add {
          border: 1px solid #8b785d;
          background: transparent;
          color: #514432;
          padding: 12px 10px;
          width: 100%;
          cursor: pointer;
          font-size: 11px;
          letter-spacing: 1px;
          transition: background .2s, color .2s;
        }
        .shop-add:hover {
          background: #514432;
          color: white;
        }
        .shop-cart {
          background: #fffdf9;
          padding: 25px 21px;
          border: 1px solid #e9e1d5;
          position: sticky;
          top: 24px;
        }
        .shop-cart h2 {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 400;
          margin: 0 0 5px;
        }
        .shop-cart-subtitle {
          font-size: 12px;
          color: #928779;
          padding-bottom: 20px;
          border-bottom: 1px solid #e9e1d5;
        }
        .shop-cart-empty {
          color: #91877a;
          font-size: 13px;
          line-height: 1.8;
          padding: 24px 0;
        }
        .shop-cart-item {
          display: grid;
          grid-template-columns: 55px minmax(0, 1fr);
          gap: 12px;
          padding: 16px 0;
          border-bottom: 1px solid #eee8df;
        }
        .shop-cart-item img {
          width: 55px;
          height: 65px;
          object-fit: cover;
          background: #eee7dc;
        }
        .shop-cart-item h3 {
          font-family: Georgia, serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.4;
          margin: 0 0 7px;
        }
        .shop-cart-item p {
          font-size: 12px;
          margin: 0 0 7px;
        }
        .shop-remove {
          border: 0;
          background: none;
          color: #927e61;
          text-decoration: underline;
          font-size: 11px;
          padding: 0;
          cursor: pointer;
        }
        .shop-cart-total {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 20px 0;
          font-size: 14px;
        }
        .shop-checkout {
          display: block;
          width: 100%;
          background: #514432;
          color: white;
          text-align: center;
          text-decoration: none;
          border: 0;
          padding: 14px;
          font-size: 11px;
          letter-spacing: 1.5px;
          cursor: pointer;
        }
        .shop-continue {
          display: block;
          text-align: center;
          color: #76664f;
          font-size: 11px;
          margin-top: 16px;
        }
        @media (max-width: 1050px) {
          .shop-layout { grid-template-columns: minmax(0, 1fr) 260px; gap: 20px; }
          .shop-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 700px) {
          .shop-page { padding: 35px 5% 60px; }
          .shop-layout { grid-template-columns: 1fr; }
          .shop-grid { gap: 24px 12px; }
          .shop-cart { position: static; grid-row: 1; }
          .shop-product h2 { font-size: 15px; }
        }
      `}</style>

      <header className="shop-heading">
        <div className="shop-eyebrow">THE LUMORA COLLECTION</div>
        <h1>Shop skincare</h1>
        <p>Thoughtful essentials for your everyday skincare ritual.</p>
      </header>

      <div className="shop-layout">
        <section className="shop-grid" aria-label="Skincare products">
          {products.map((product) => (
            <article className="shop-product" key={product.id}>
              <div className="shop-image-wrap">
                <img
                  className="shop-image"
                  src={product.image}
                  alt={product.name}
                />
                {product.tag && (
                  <span className="shop-tag">{product.tag}</span>
                )}
              </div>
              <p className="shop-category">{product.category}</p>
              <h2>{product.name}</h2>
              <div className="shop-price">
                AED {product.price}
                {product.oldPrice && (
                  <span className="shop-old-price">AED {product.oldPrice}</span>
                )}
              </div>
              <button
                className="shop-add"
                onClick={() => addToCart(product)}
              >
                ADD TO BAG
              </button>
            </article>
          ))}
        </section>

        <aside className="shop-cart">
          <h2>Your bag</h2>
          <p className="shop-cart-subtitle">
            {count} {count === 1 ? "item" : "items"} in your bag
          </p>

          {items.length === 0 ? (
            <p className="shop-cart-empty">
              Your bag is waiting for something lovely. Add a product to get
              started.
            </p>
          ) : (
            items.map((item) => (
              <div className="shop-cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    AED {item.price} × {item.qty}
                  </p>
                  <button
                    className="shop-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}

          <div className="shop-cart-total">
            <span>Subtotal</span>
            <strong>AED {total.toFixed(2)}</strong>
          </div>
          <Link className="shop-checkout" href="/cart">
            VIEW BAG & CHECKOUT
          </Link>
          <Link className="shop-continue" href="/">
            Continue shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}
