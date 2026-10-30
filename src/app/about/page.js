import Link from "next/link";

export const metadata = {
  title: "About Us | LUMORA",
  description: "Discover the philosophy behind LUMORA Skincare Studio.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-eyebrow">OUR PHILOSOPHY</p>
        <h1>Skincare, made <em>thoughtful.</em></h1>
        <p className="about-intro">
          We believe skincare should feel less like a routine
          and more like a moment of care for yourself.
        </p>
      </section>

      <section className="about-content">
        <div>
          <p className="about-eyebrow">THE LUMORA WAY</p>
          <h2>Beauty in simplicity.</h2>
        </div>
        <div>
          <p>
            LUMORA is a skincare studio built around thoughtful
            choices, everyday rituals, and the beauty of keeping
            things simple.
          </p>
          <p>
            We believe caring for your skin does not need to be
            complicated. The little things you do consistently
            can become meaningful moments in your day.
          </p>
          <p>
            Our philosophy is simple: choose thoughtfully,
            care gently, and let your everyday glow be your own.
          </p>
          <Link href="/products" className="about-button">
            EXPLORE OUR SHOP ↗
          </Link>
        </div>
      </section>

      <section className="about-values">
        <article>
          <span>01</span>
          <h3>Thoughtful Choices</h3>
          <p>Choose products with care and purpose.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Everyday Rituals</h3>
          <p>Make room for small moments of self-care.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Your Natural Glow</h3>
          <p>Celebrate your own journey, one day at a time.</p>
        </article>
      </section>
    </main>
  );
}
