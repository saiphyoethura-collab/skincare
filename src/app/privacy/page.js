export const metadata = {
  title: "Privacy Policy | LUMORA",
  description: "Learn how LUMORA handles customer information.",
};

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <header className="policy-hero">
        <p className="policy-eyebrow">YOUR PRIVACY MATTERS</p>
        <h1>Privacy <em>Policy</em></h1>
        <p>
          We believe personal information should be handled with care
          and transparency.
        </p>
      </header>

      <article className="policy-content">
        <p className="policy-updated">LAST UPDATED: OCTOBER 2026</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            When you use LUMORA, we may collect information such as
            your name, phone number, email address, delivery address,
            order details, and information you provide when contacting us.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>
            We may use your information to process orders, arrange
            deliveries, respond to enquiries, provide customer support,
            prevent fraudulent activity, and improve our services.
          </p>
        </section>

        <section>
          <h2>3. Sharing Information</h2>
          <p>
            We do not intend to sell your personal information.
            Information may be shared with service providers when
            necessary to fulfil an order, such as delivery companies
            or payment providers, or when required by applicable law.
          </p>
        </section>

        <section>
          <h2>4. Payments</h2>
          <p>
            Payment information will be handled according to the payment
            method and provider used. We will update this section when
            LUMORA's payment services are confirmed. Please do not send
            card details or passwords through ordinary messages.
          </p>
        </section>

        <section>
          <h2>5. Cookies and Website Data</h2>
          <p>
            The website may use technical storage or similar technologies
            to support features such as shopping carts, account sessions,
            and site functionality. Any additional analytics or
            advertising technologies should be disclosed when introduced.
          </p>
        </section>

        <section>
          <h2>6. Protecting Your Information</h2>
          <p>
            We aim to use appropriate measures to protect personal
            information. However, no online system can be guaranteed
            to be completely secure.
          </p>
        </section>

        <section>
          <h2>7. Your Choices and Requests</h2>
          <p>
            You may contact us to ask about your personal information
            or request a correction or deletion where applicable.
            We may need to retain certain records to fulfil legal
            obligations or resolve disputes.
          </p>
        </section>

        <section>
          <h2>8. Policy Updates</h2>
          <p>
            This policy may be updated as our services and website
            features change. The latest version will be published here.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>
            If you have questions about this policy or your information,
            please contact us through the LUMORA Contact Us page.
          </p>
        </section>

        <p className="policy-note">
          This is a starter draft, not a legal review. Before accepting
          real customer data, update it to match the website's actual
          data practices and applicable Myanmar laws.
        </p>
      </article>
    </main>
  );
}
