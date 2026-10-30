"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart, useFavourites } from "../../lib/AppProviders";
import { products } from "../../lib/products";

export default function ShopPage() {
  const { items, addToCart, removeFromCart, total } = useCart();
  const { toggleFavourite, isFavourite } = useFavourites();
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [sort, setSort] = useState("featured");
  const categories = ["ALL", ...new Set(products.map((p) => p.category))];
  const filteredProducts = useMemo(() => {
    const result = products.filter((p) =>
      (category === "ALL" || p.category === category) &&
      (p.name + " " + p.category + " " + p.description).toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    if (sort === "price-high") result.sort((a, b) => b.price - a.price);
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [search, category, sort]);

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
        .shop-tools {
          max-width: 1300px;
          margin: 0 auto 16px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 220px;
          gap: 12px;
        }
        .shop-search, .shop-sort {
          width: 100%;
          min-width: 0;
          padding: 14px;
          border: 1px solid #e2d8c9;
          background: #fffdf9;
          color: #39352e;
          font-size: 13px;
          box-sizing: border-box;
        }
        .shop-categories {
          max-width: 1300px;
          margin: 0 auto 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .shop-category-button {
          padding: 10px 14px;
          border: 1px solid #d9cdbb;
          background: transparent;
          color: #6d5b43;
          font-size: 10px;
          letter-spacing: 1px;
          cursor: pointer;
        }
        .shop-category-button.active,
        .shop-category-button:hover {
          background: #514432;
          color: #fffdf9;
          border-color: #514432;
        }
        .shop-results {
          max-width: 1300px;
          margin: 0 auto 18px;
          color: #81796e;
          font-size: 12px;
        }
        .shop-no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 35px 10px;
          color: #81796e;
        }
        .shop-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px 18px;
        }
        .shop-product {
          min-width: 0;
        }
        .shop-image-container { position: relative; }
        .shop-favourite { position: absolute; top: 12px; right: 12px; z-index: 2; width: 38px; height: 38px; border: 1px solid #e9e1d5; border-radius: 50%; background: #fffdf9; color: #6d5b43; font-size: 23px; cursor: pointer; display: grid; place-items: center; }
        .shop-favourite.active { color: #8c4d49; }
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
          .shop-layout { grid-template-columns: 1fr; }\n          .shop-tools { grid-template-columns: 1fr; }
          .shop-tools { grid-template-columns: 1fr; }
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

      <div className="shop-tools">
        <input className="shop-search" type="search" placeholder="Search skincare products..." aria-label="Search products" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className="shop-sort" aria-label="Sort products" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="featured">Sort: Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
      <div className="shop-categories" aria-label="Filter by category">
        {categories.map((cat) => (
          <button type="button" key={cat} className={"shop-category-button" + (category === cat ? " active" : "")} aria-pressed={category === cat} onClick={() => setCategory(cat)}>{cat === "ALL" ? "ALL PRODUCTS" : cat}</button>
        ))}
      </div>
      <div className="shop-results">Showing {filteredProducts.length} of {products.length} products</div>
      <div className="shop-layout">
        <section className="shop-grid" aria-label="Skincare products">
          {filteredProducts.length === 0 ? <p className="shop-no-results">No products found. Try another search or category.</p> : filteredProducts.map((product) => (
            <article className="shop-product" key={product.id}>
              <div className="shop-image-container">
              <Link
                href={`/products/${product.id}`}
                className="shop-image-wrap"
                style={{ display: "block", color: "inherit", textDecoration: "none" }}
                aria-label={`View ${product.name} details`}
              >
                <img
                  className="shop-image"
                  src={product.image}
                  alt={product.name}
                />
                {product.tag && (
                  <span className="shop-tag">{product.tag}</span>
                )}
              </Link>
              <button type="button" className={"shop-favourite " + (isFavourite(product.id) ? "active" : "")} aria-label={isFavourite(product.id) ? "Remove from favourites" : "Add to favourites"} aria-pressed={isFavourite(product.id)} onClick={() => toggleFavourite(product)}>{isFavourite(product.id) ? "♥" : "♡"}</button>
              </div>
              <p className="shop-category">{product.category}</p>
              <h2>
                <Link
                  href={`/products/${product.id}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {product.name}
                </Link>
              </h2>
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
