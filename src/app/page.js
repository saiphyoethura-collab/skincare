'use client';

import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Gentle Foaming Cleanser',
    category: 'CLEANSER',
    price: 45,
    oldPrice: 55,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85',
    tag: 'BEST SELLER',
  },
  {
    id: 2,
    name: 'Hydrating Facial Toner',
    category: 'TONER',
    price: 52,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85',
    tag: 'NEW',
  },
  {
    id: 3,
    name: 'Vitamin C Glow Serum',
    category: 'SERUM',
    price: 79,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85',
    tag: 'POPULAR',
  },
  {
    id: 4,
    name: 'Daily Sun Protection SPF 50+',
    category: 'SUNSCREEN',
    price: 65,
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=85',
    tag: '',
  },
];

export default function Home() {
  return (
    <div className="lumora">
      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              YOUR DAILY RITUAL, ELEVATED
            </span>

            <h1>
              Good skin.
              <br />
              <em>Good energy.</em>
            </h1>

            <p>
              Thoughtful skincare for your everyday glow.
              Discover gentle essentials designed to make
              caring for your skin feel like a little luxury.
            </p>

            <div className="hero-buttons">
              <Link href="/products" className="primary-btn">
                EXPLORE THE COLLECTION <span>↗</span>
              </Link>
              <a href="#about" className="text-btn">
                Our philosophy
              </a>
            </div>

            <div className="hero-note">
              <span className="note-star">✳</span>
              <span>
                <strong>Less, but better.</strong>
                <small>Simple rituals. Thoughtful choices.</small>
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1400&q=90"
              alt="Skincare products arranged in a soft, natural setting"
            />
            <div className="hero-image-label">
              <span>THE EVERYDAY EDIT</span>
              <strong>Your skin, your ritual.</strong>
            </div>
            <div className="round-stamp">
              <span>CARE</span>
              <span className="stamp-star">✳</span>
              <span>YOURSELF</span>
            </div>
          </div>

          <div className="hero-index">01 — SKINCARE, SIMPLIFIED</div>
        </section>

        <section className="benefits">
          <div><span>✳</span> Thoughtfully selected essentials</div>
          <div><span>◇</span> Everyday skincare rituals</div>
          <div><span>♡</span> Your glow, your way</div>
        </section>

        <section className="products-section" id="bestsellers">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE LUMORA EDIT</span>
              <h2>Good things for <em>your skin.</em></h2>
              <p>Meet the essentials worth making room for.</p>
            </div>

            <Link href="/products" className="view-all">
              VIEW ALL PRODUCTS <span>↗</span>
            </Link>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.id}>
                <Link
                  href="/products"
                  className="product-image"
                  aria-label={`Explore ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                  {product.tag && (
                    <span className="product-tag">{product.tag}</span>
                  )}
                  <span className="product-number">
                    0{index + 1}
                  </span>
                  <span className="quick-view">DISCOVER PRODUCT ↗</span>
                </Link>

                <div className="product-info">
                  <span className="product-category">
                    {product.category}
                  </span>
                  <Link href="/products" className="product-name">
                    {product.name}
                  </Link>
                  <div className="product-bottom">
                    <div className="price">
                      <strong>AED {product.price}</strong>
                      {product.oldPrice && (
                        <del>AED {product.oldPrice}</del>
                      )}
                    </div>
                    <Link
                      href="/products"
                      className="add-button"
                      aria-label={`Shop ${product.name}`}
                    >
                      +
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="price-note">
            * Prices shown are design examples and must be confirmed before selling.
          </p>
        </section>

        <section className="new-arrivals">
          <div className="arrival-image">
            <img
              src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1200&q=85"
              alt="A calm skincare and self-care setting"
              loading="lazy"
            />
          </div>
          <div className="arrival-copy">
            <span className="eyebrow">A FRESH START</span>
            <h2>Your next<br />favourite <em>ritual.</em></h2>
            <p>
              Explore everyday essentials and find the little
              moments of care that make a difference.
            </p>
            <Link href="/products" className="primary-btn">
              DISCOVER NEW ARRIVALS <span>↗</span>
            </Link>
          </div>
        </section>

        <section className="promotion" id="promotions">
          <span className="promo-flower">✳</span>
          <div>
            <span className="eyebrow">A LITTLE SOMETHING FOR YOU</span>
            <h2>Your self-care era <em>starts here.</em></h2>
            <p>
              Find your skincare favourites and build a ritual
              that feels right for you.
            </p>
          </div>
          <Link href="/products" className="promo-button">
            FIND YOUR FAVOURITES ↗
          </Link>
        </section>

        <section className="philosophy" id="about">
          <span className="eyebrow">THE LUMORA PHILOSOPHY</span>
          <h2>
            Skincare is not about changing who you are.
            <br />
            It is about <em>caring for who you are.</em>
          </h2>
          <Link href="/products" className="text-btn">
            Find your everyday essentials ↗
          </Link>
        </section>
      </main>

      <footer className="lumora-footer">
        <Link href="/" className="footer-brand">LUMORA.</Link>
        <p>Thoughtful skincare. Everyday rituals.</p>
        <span>© {new Date().getFullYear()} LUMORA SKINCARE</span>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background: #fbf8f2;
          color: #302d27;
          font-family: Arial, Helvetica, sans-serif;
        }

        .lumora {
          --cream: #fbf8f2;
          --beige: #eee6d9;
          --brown: #554638;
          --muted: #81796e;
          --line: #e8e0d4;
          width: 100%;
          overflow: hidden;
          background: var(--cream);
          color: #302d27;
        }

        .lumora a { text-decoration: none; color: inherit; }

        .announcement {
          min-height: 32px;
          padding: 9px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #504536;
          color: #fffaf1;
          font-size: 9px;
          letter-spacing: 2px;
          text-align: center;
        }

        .lumora-nav {
          min-height: 84px;
          padding: 18px 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          background: var(--cream);
          border-bottom: 1px solid var(--line);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
          flex-shrink: 0;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          border: 1px solid #82715d;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-family: Georgia, serif;
          font-size: 23px;
        }

        .brand strong, .brand small { display: block; }

        .brand strong {
          font-family: Georgia, serif;
          font-size: 17px;
          letter-spacing: 3px;
          font-weight: 500;
        }

        .brand small {
          margin-top: 5px;
          font-size: 8px;
          letter-spacing: 2.5px;
          color: var(--muted);
        }

        .nav-links, .nav-actions {
          display: flex;
          align-items: center;
          gap: 27px;
        }

        .nav-links a, .login-link {
          font-size: 11px;
          color: #625a50;
          transition: color .2s;
        }

        .nav-links a:hover, .login-link:hover { color: #a17a52; }

        .bag-link, .primary-btn {
          background: #504536;
          color: white !important;
          padding: 15px 19px;
          font-size: 9px;
          letter-spacing: 1px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          transition: background .2s;
        }

        .bag-link:hover, .primary-btn:hover { background: #79644d; }

        .hero {
          position: relative;
          min-height: 570px;
          padding: 65px 8% 72px;
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          align-items: center;
          gap: 7%;
          background: #f3eee5;
        }

        .hero-copy { padding: 20px 0; }

        .eyebrow {
          display: inline-block;
          color: #92775b;
          font-size: 9px;
          letter-spacing: 2.5px;
          line-height: 1.7;
          font-weight: 600;
        }

        .hero h1 {
          margin: 24px 0 19px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(46px, 5.1vw, 74px);
          line-height: 1.05;
          font-weight: 400;
          letter-spacing: -2.5px;
        }

        .hero h1 em, .section-heading h2 em,
        .arrival-copy h2 em, .promotion h2 em,
        .philosophy h2 em {
          color: #9b7d5d;
          font-weight: 400;
        }

        .hero-copy > p, .arrival-copy > p {
          max-width: 390px;
          color: #776e63;
          font-size: 13px;
          line-height: 1.95;
        }

        .hero-buttons {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 22px;
        }

        .text-btn {
          font-size: 11px;
          border-bottom: 1px solid #a99a87;
          padding-bottom: 5px;
        }

        .hero-note {
          margin-top: 43px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .note-star { font-size: 24px; color: #9b7d5d; }

        .hero-note strong, .hero-note small { display: block; }

        .hero-note strong {
          font-family: Georgia, serif;
          font-size: 13px;
          font-weight: 500;
        }

        .hero-note small {
          margin-top: 5px;
          font-size: 10px;
          color: var(--muted);
        }

        .hero-visual {
          position: relative;
          min-width: 0;
          height: 415px;
          background: #e2d7c6;
        }

        .hero-visual > img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-image-label {
          position: absolute;
          left: 0;
          bottom: 0;
          padding: 17px 21px;
          background: rgba(251,248,242,.94);
        }

        .hero-image-label span, .hero-image-label strong { display: block; }

        .hero-image-label span {
          font-size: 8px;
          letter-spacing: 2px;
          color: var(--muted);
        }

        .hero-image-label strong {
          margin-top: 7px;
          font-family: Georgia, serif;
          font-weight: 400;
          font-size: 17px;
        }

        .round-stamp {
          position: absolute;
          top: 20px;
          right: -22px;
          width: 83px;
          height: 83px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border-radius: 50%;
          background: #fbf8f2;
          color: #78644e;
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .stamp-star { font-size: 20px; }

        .hero-index {
          position: absolute;
          bottom: 25px;
          left: 8%;
          color: #8c8174;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .benefits {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(20px, 6vw, 85px);
          padding: 24px 20px;
          border-bottom: 1px solid var(--line);
          background: #fbf8f2;
        }

        .benefits div {
          font-size: 10px;
          color: #6e655a;
          letter-spacing: .2px;
        }

        .benefits span {
          color: #a18462;
          margin-right: 9px;
          font-size: 15px;
        }

        .products-section { padding: 92px 8% 85px; }

        .section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 34px;
        }

        .section-heading h2, .arrival-copy h2 {
          margin: 12px 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-weight: 400;
          font-size: clamp(32px, 3.5vw, 46px);
          letter-spacing: -1px;
          line-height: 1.2;
        }

        .section-heading p {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
        }

        .view-all {
          padding-bottom: 8px;
          border-bottom: 1px solid #b9a994;
          font-size: 9px;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .view-all span { margin-left: 12px; }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 23px;
        }

        .product-card { min-width: 0; }

        .product-image {
          display: block;
          position: relative;
          overflow: hidden;
          height: 300px;
          background: #eee7dc;
        }

        .product-image > img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .45s ease;
        }

        .product-image:hover > img { transform: scale(1.045); }

        .product-tag {
          position: absolute;
          top: 13px;
          left: 12px;
          background: #fbf8f2;
          color: #615443;
          padding: 8px 9px;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .product-number {
          position: absolute;
          bottom: 12px;
          left: 13px;
          color: #fff;
          text-shadow: 0 1px 5px #333;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .quick-view {
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 10px;
          padding: 13px 8px;
          background: rgba(251,248,242,.95);
          text-align: center;
          font-size: 8px;
          letter-spacing: 1.4px;
          opacity: 0;
          transform: translateY(5px);
          transition: all .2s;
        }

        .product-image:hover .quick-view {
          opacity: 1;
          transform: translateY(0);
        }

        .product-info { padding: 17px 1px 0; }

        .product-category {
          color: #92775b;
          font-size: 8px;
          letter-spacing: 1.8px;
        }

        .product-name {
          display: block;
          margin-top: 8px;
          font-family: Georgia, serif;
          font-size: 16px;
          line-height: 1.5;
        }

        .product-bottom {
          margin-top: 13px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .price {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          align-items: center;
        }

        .price strong { font-size: 12px; font-weight: 500; }
        .price del { font-size: 10px; color: #9a9084; }

        .add-button {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          border: 1px solid #cfc3b2;
          display: grid;
          place-items: center;
          font-size: 19px;
          transition: all .2s;
        }

        .add-button:hover {
          background: #504536;
          color: white !important;
        }

        .price-note {
          margin-top: 25px;
          color: #8b8175;
          font-size: 10px;
        }

        .new-arrivals {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 420px;
          background: #eee6d9;
        }

        .arrival-image { min-height: 420px; overflow: hidden; }

        .arrival-image img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 420px;
          object-fit: cover;
        }

        .arrival-copy {
          padding: 55px 12%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .arrival-copy h2 {
          margin-top: 20px;
          font-size: clamp(39px, 4vw, 55px);
        }

        .arrival-copy > p { margin: 3px 0 25px; }

        .promotion {
          margin: 80px 8% 30px;
          padding: 38px 45px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          background: #e9dfd0;
        }

        .promo-flower {
          color: #8d755a;
          font-size: 43px;
          flex-shrink: 0;
        }

        .promotion h2 {
          margin: 8px 0;
          font-family: Georgia, serif;
          font-weight: 400;
          font-size: clamp(23px, 2.5vw, 34px);
        }

        .promotion p {
          margin: 0;
          color: #766b5f;
          font-size: 11px;
          line-height: 1.8;
        }

        .promo-button {
          padding: 16px 18px;
          background: #504536;
          color: white !important;
          font-size: 9px;
          letter-spacing: .8px;
          white-space: nowrap;
        }

        .philosophy {
          padding: 90px 20px 95px;
          text-align: center;
        }

        .philosophy h2 {
          max-width: 820px;
          margin: 22px auto 28px;
          font-family: Georgia, serif;
          font-size: clamp(27px, 3.5vw, 43px);
          line-height: 1.55;
          font-weight: 400;
        }

        .lumora-footer {
          padding: 30px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          border-top: 1px solid var(--line);
        }

        .footer-brand {
          font-family: Georgia, serif;
          letter-spacing: 3px;
          font-size: 18px;
        }

        .lumora-footer p {
          color: var(--muted);
          font-family: Georgia, serif;
          font-size: 13px;
        }

        .lumora-footer > span {
          color: #8b8175;
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        @media (min-width: 1500px) {
          .hero, .products-section { padding-left: max(8%, calc((100% - 1300px) / 2)); padding-right: max(8%, calc((100% - 1300px) / 2)); }
        }

        @media (max-width: 1000px) {
          .lumora-nav { padding-left: 4%; padding-right: 4%; gap: 16px; }
          .nav-links { gap: 15px; }
          .nav-links a { font-size: 10px; }
          .hero { padding-left: 6%; padding-right: 6%; gap: 5%; }
          .hero-visual { height: 360px; }
          .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 30px 20px; }
          .product-image { height: 330px; }
          .products-section { padding-left: 6%; padding-right: 6%; }
          .hero-index { left: 6%; }
        }

        @media (max-width: 700px) {
          .announcement { font-size: 8px; letter-spacing: 1.4px; }
          .lumora-nav { min-height: 72px; padding: 13px 5%; flex-wrap: wrap; }
          .brand-mark { width: 35px; height: 35px; font-size: 20px; }
          .brand strong { font-size: 14px; letter-spacing: 2px; }
          .brand small { font-size: 7px; letter-spacing: 1.7px; }
          .nav-links { order: 3; width: 100%; justify-content: center; gap: 23px; padding-top: 8px; border-top: 1px solid var(--line); }
          .nav-links a { font-size: 10px; }
          .nav-actions { gap: 12px; }
          .login-link { font-size: 10px; }
          .bag-link { padding: 11px 12px; font-size: 8px; gap: 7px; }
          .hero { display: flex; flex-direction: column; align-items: stretch; gap: 30px; padding: 42px 6% 55px; }
          .hero-copy { padding: 0; }
          .hero h1 { font-size: clamp(48px, 12vw, 67px); margin: 19px 0 15px; }
          .hero-copy > p { font-size: 12px; }
          .hero-buttons { gap: 16px; }
          .primary-btn { padding: 14px 13px; font-size: 8px; gap: 10px; }
          .hero-note { margin-top: 25px; }
          .hero-visual { height: 340px; width: calc(100% - 10px); }
          .round-stamp { right: -10px; width: 69px; height: 69px; }
          .hero-index { bottom: 17px; left: 6%; font-size: 7px; }
          .benefits { align-items: flex-start; flex-direction: column; gap: 13px; padding: 22px 8%; }
          .benefits div { font-size: 10px; }
          .products-section { padding: 60px 5% 55px; }
          .section-heading { align-items: flex-start; flex-direction: column; gap: 19px; margin-bottom: 25px; }
          .section-heading h2 { font-size: 35px; }
          .product-grid { gap: 25px 12px; }
          .product-image { height: clamp(175px, 57vw, 290px); }
          .product-tag { top: 8px; left: 7px; padding: 6px; font-size: 7px; }
          .product-number { display: none; }
          .quick-view { display: none; }
          .product-info { padding-top: 12px; }
          .product-name { font-size: 14px; }
          .product-bottom { margin-top: 10px; }
          .price { gap: 4px; }
          .price strong { font-size: 10px; }
          .price del { font-size: 9px; }
          .add-button { width: 29px; height: 29px; }
          .product-category { font-size: 7px; }
          .new-arrivals { grid-template-columns: 1fr; }
          .arrival-image, .arrival-image img { min-height: 280px; height: 280px; }
          .arrival-copy { padding: 40px 7% 45px; }
          .arrival-copy h2 { font-size: 43px; }
          .promotion { margin: 35px 5% 10px; padding: 26px 22px; flex-wrap: wrap; gap: 16px; }
          .promo-flower { font-size: 30px; }
          .promotion > div { flex: 1; min-width: 180px; }
          .promotion h2 { font-size: 25px; }
          .promo-button { margin-left: 0; font-size: 8px; }
          .philosophy { padding: 65px 7%; }
          .philosophy h2 { font-size: 28px; }
          .lumora-footer { padding: 25px 6%; gap: 10px; }
          .lumora-footer p { width: 100%; order: 3; margin: 0; }
        }

        @media (max-width: 380px) {
          .nav-links { gap: 14px; }
          .nav-links a { font-size: 9px; }
          .product-name { font-size: 12px; }
          .price strong { font-size: 9px; }
          .add-button { width: 25px; height: 25px; }
        }
      `}</style>
    </div>
  );
}
