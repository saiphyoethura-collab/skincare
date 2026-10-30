export const metadata = {
  title: "Shipping Policy | LUMORA",
  description: "LUMORA delivery information for customers in Myanmar.",
};

export default function ShippingPage() {
  return (
    <main className="policy-page">
      <header className="policy-hero">
        <p className="policy-eyebrow">CUSTOMER CARE</p>
        <h1>Shipping <em>Policy</em></h1>
        <p>Everything you need to know about receiving your LUMORA order.</p>
      </header>

      <article className="policy-content">
        <p className="policy-updated">LAST UPDATED: OCTOBER 2026</p>

        <section>
          <h2>1. Delivery Area</h2>
          <p>
            LUMORA currently plans to serve customers within Myanmar.
            Delivery availability depends on the destination and the
            courier service available for your address.
          </p>
        </section>

        <section>
          <h2>2. Processing Time</h2>
          <p>
            Orders will be prepared after the order details and payment
            requirements have been confirmed. Processing times may vary
            during busy periods or public holidays.
          </p>
        </section>

        <section>
          <h2>3. Delivery Time</h2>
          <p>
            Delivery time depends on your location and the courier.
            We will provide an estimated delivery time when the delivery
            arrangements are confirmed. Any estimate is not a guarantee.
          </p>
        </section>

        <section>
          <h2>4. Delivery Fees</h2>
          <p>
            Delivery fees will be shown or confirmed before your order
            is finalized. Fees may vary depending on the destination
            and delivery service.
          </p>
        </section>

        <section>
          <h2>5. Accurate Address and Contact Details</h2>
          <p>
            Please provide a complete delivery address and a reachable
            phone number. Incorrect or incomplete details may delay
            delivery or result in an unsuccessful delivery attempt.
          </p>
        </section>

        <section>
          <h2>6. Delays and Delivery Issues</h2>
          <p>
            Unexpected circumstances, weather, public holidays, or
            courier-related issues may affect delivery. Please contact
            LUMORA if your order appears to be delayed or arrives damaged.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Policy</h2>
          <p>
            LUMORA may update this policy as our delivery services
            develop. The latest version will be published on this page.
          </p>
        </section>

        <p className="policy-note">
          Delivery fees, delivery estimates, and service areas will be
          updated once LUMORA's actual delivery arrangements are confirmed.
        </p>
      </article>
    </main>
  );
}
