import Link from "next/link";

export const metadata = {
  title: "Returns & Refunds | LUMORA",
  description: "Learn about LUMORA returns, exchanges and refunds.",
};

export default function ReturnsPage() {
  return (
    <main className="policy-page">
      <header className="policy-hero">
        <p className="policy-eyebrow">CUSTOMER CARE</p>
        <h1>Returns <em>& Refunds</em></h1>
        <p>
          Your shopping experience matters to us. Here is how we handle
          order issues and return requests.
        </p>
      </header>

      <article className="policy-content">
        <p className="policy-updated">LAST UPDATED: OCTOBER 2026</p>

        <section>
          <h2>1. Damaged or Incorrect Items</h2>
          <p>
            If your order arrives damaged or you receive an incorrect
            item, please contact us as soon as possible. Include your
            order details and clear photos of the item and packaging
            so we can review the issue.
          </p>
        </section>

        <section>
          <h2>2. Return Requests</h2>
          <p>
            Please contact LUMORA before sending any item back.
            Return eligibility will be reviewed based on the condition
            of the product and the reason for the request.
          </p>
        </section>

        <section>
          <h2>3. Skincare and Hygiene</h2>
          <p>
            For hygiene and product-safety reasons, opened or used
            skincare products may not be eligible for return unless
            required by applicable law or the item is defective.
            Please contact us if you have a concern about your order.
          </p>
        </section>

        <section>
          <h2>4. Refund Review</h2>
          <p>
            Once a return or order issue has been reviewed and approved,
            we will explain the available resolution and any applicable
            refund process. Processing time may depend on the payment
            method and service provider.
          </p>
        </section>

        <section>
          <h2>5. Exchanges</h2>
          <p>
            Exchanges may depend on product availability and the reason
            for the request. Please contact us before returning an item.
          </p>
        </section>

        <section>
          <h2>6. How to Contact Us</h2>
          <p>
            To discuss a return, refund, or damaged item, please use
            our contact page and include your order details.
          </p>
          <Link href="/contact" className="about-button">
            CONTACT US ↗
          </Link>
        </section>

        <p className="policy-note">
          This is a draft policy. Final return periods, refund timelines,
          and eligibility rules should be confirmed before the store
          begins accepting real customer orders.
        </p>
      </article>
    </main>
  );
}
