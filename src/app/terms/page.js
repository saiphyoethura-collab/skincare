import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | LUMORA",
  description: "Terms for using the LUMORA Skincare Studio website.",
};

export default function TermsPage() {
  return (
    <main className="policy-page">
      <header className="policy-hero">
        <p className="policy-eyebrow">PLEASE READ CAREFULLY</p>
        <h1>Terms <em>& Conditions</em></h1>
        <p>
          These terms explain the basic rules for using the LUMORA
          website and placing an order.
        </p>
      </header>

      <article className="policy-content">
        <p className="policy-updated">LAST UPDATED: OCTOBER 2026</p>

        <section>
          <h2>1. Using Our Website</h2>
          <p>
            By using this website, you agree to use it lawfully and
            not interfere with its operation, security, or other users.
          </p>
        </section>

        <section>
          <h2>2. Product Information</h2>
          <p>
            We aim to display product descriptions, images, prices,
            and availability accurately. Actual packaging or appearance
            may vary slightly. Please read product information before
            placing an order.
          </p>
        </section>

        <section>
          <h2>3. Prices and Availability</h2>
          <p>
            Prices and product availability may change. Any applicable
            delivery charges will be communicated before an order is
            finalized. We will contact you if an order cannot be fulfilled.
          </p>
        </section>

        <section>
          <h2>4. Orders and Payment</h2>
          <p>
            An order may require confirmation before it is accepted.
            Payment methods and payment instructions will be provided
            when the relevant services are available. Do not treat a
            demonstration checkout as confirmation of a real purchase.
          </p>
        </section>

        <section>
          <h2>5. Delivery</h2>
          <p>
            Delivery availability, estimated timing, and fees depend
            on the destination and delivery service. Please review our
            Shipping Policy for further information.
          </p>
          <p><Link href="/shipping">Read our Shipping Policy ↗</Link></p>
        </section>

        <section>
          <h2>6. Returns and Refunds</h2>
          <p>
            Requests involving damaged, incorrect, or unwanted items
            will be handled according to our Returns & Refunds Policy
            and applicable law.
          </p>
          <p><Link href="/returns">Read our Returns & Refunds Policy ↗</Link></p>
        </section>

        <section>
          <h2>7. Skincare Information</h2>
          <p>
            Product information is provided for general informational
            purposes and is not a substitute for professional medical
            advice. Review ingredients before use and discontinue use
            if irritation occurs. Seek appropriate medical advice for
            persistent or serious reactions.
          </p>
        </section>

        <section>
          <h2>8. Intellectual Property</h2>
          <p>
            Website text, branding, design, and other materials may be
            protected by applicable intellectual property laws. Please
            do not reproduce or use them without permission where
            permission is required.
          </p>
        </section>

        <section>
          <h2>9. Privacy</h2>
          <p>
            Our handling of customer information is described in our
            Privacy Policy.
          </p>
          <p><Link href="/privacy">Read our Privacy Policy ↗</Link></p>
        </section>

        <section>
          <h2>10. Changes to These Terms</h2>
          <p>
            We may update these terms as the website and services
            develop. Updated terms will be published on this page.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have questions about these terms, please contact
            LUMORA through our Contact Us page.
          </p>
          <p><Link href="/contact">Contact LUMORA ↗</Link></p>
        </section>

        <p className="policy-note">
          This is a starter draft, not legal advice. Before accepting
          real orders, review these terms against LUMORA's actual
          business practices and applicable Myanmar laws.
        </p>
      </article>
    </main>
  );
}
