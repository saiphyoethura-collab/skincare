"use client";

import Link from "next/link";
import { useCart, useFavourites } from "../../lib/AppProviders";

export default function WishlistPage() {
  const { favourites, toggleFavourite } = useFavourites();
  const { addToCart } = useCart();

  return (
    <main className="policy-page orders-page">
      <section className="policy-hero">
        <p className="policy-eyebrow">YOUR LUMORA ACCOUNT</p>
        <h1>Your Favourites</h1>
        <p>A little collection of skincare you love.</p>
      </section>

      <section className="policy-content orders-content">
        <div className="orders-heading">
          <div>
            <p className="policy-eyebrow">SAVED FOR LATER</p>
            <h2>Your Favourites ({favourites.length})</h2>
          </div>
          <Link href="/products" className="orders-shop-link">
            EXPLORE PRODUCTS →
          </Link>
        </div>

        {favourites.length === 0 ? (
          <div className="orders-empty">
            <div className="orders-empty-icon">♡</div>
            <h2>Your favourites are waiting</h2>
            <p>
              Save the skincare essentials you love and keep all your favourites
              in one place.
            </p>
            <Link href="/products" className="orders-shop-button">
              DISCOVER SKINCARE
            </Link>
          </div>
        ) : (
          <div className="favourites-grid">
            {favourites.map((product) => (
              <article className="shop-product" key={product.id}>
                <div className="shop-image-container">
                  <Link
                    href={`/products/${product.id}`}
                    className="shop-image-wrap"
                    style={{
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <img
                      className="shop-image"
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>
                  <button
                    type="button"
                    className="shop-favourite active"
                    aria-label={`Remove ${product.name} from favourites`}
                    onClick={() => toggleFavourite(product)}
                  >
                    ♥
                  </button>
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
                <div className="shop-price">AED {product.price}</div>
                <button
                  className="shop-add"
                  onClick={() => addToCart(product)}
                >
                  ADD TO BAG
                </button>
              </article>
            ))}
          </div>
        )}

        <div className="orders-help">
          <h3>Need a little help?</h3>
          <p>Have a question about a product? We are happy to help.</p>
          <Link href="/contact">Contact Us →</Link>
        </div>
      </section>

      <style jsx>{`
        .favourites-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px 20px;
          margin-top: 28px;
        }

        .shop-image-container {
          position: relative;
        }

        .shop-image-wrap {
          display: block;
          aspect-ratio: 4 / 5;
          width: 100%;
          overflow: hidden;
          background: #eee7dc;
        }

        .shop-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .shop-favourite {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 38px;
          height: 38px;
          border: 1px solid #e9e1d5;
          border-radius: 50%;
          background: #fffdf9;
          color: #8c4d49;
          font-size: 23px;
          cursor: pointer;
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
          font-weight: 400;
          line-height: 1.4;
          margin: 0 0 8px;
        }

        .shop-price {
          font-size: 14px;
          margin-bottom: 13px;
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
        }

        @media (max-width: 700px) {
          .favourites-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px 12px;
          }
        }
      `}</style>
    </main>
  );
}
