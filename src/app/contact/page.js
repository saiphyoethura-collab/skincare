export const metadata = {
  title: "Contact Us | LUMORA",
  description: "Get in touch with LUMORA Skincare Studio.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-eyebrow">WE'RE HERE FOR YOU</p>
        <h1>Let’s talk <em>skincare.</em></h1>
        <p>
          Have a question about our products or your order?
          We would love to hear from you.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <p className="contact-eyebrow">GET IN TOUCH</p>
          <h2>We’re happy to help.</h2>
          <p>
            Whether you need help choosing a product or have
            a question about your shopping experience, you can
            reach out using the form.
          </p>
          <div className="contact-note">
            <span>OUR PROMISE</span>
            <p>Thoughtful care, every step of the way.</p>
          </div>
        </div>

        <form className="contact-form">
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="contact-subject">Subject</label>
          <select id="contact-subject" name="subject" defaultValue="Product enquiry">
            <option>Product enquiry</option>
            <option>Order support</option>
            <option>Shipping question</option>
            <option>Returns and refunds</option>
            <option>Other</option>
          </select>

          <label htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="How can we help you?"
            required
          />

          <button type="button" disabled>
            CONTACT FORM COMING SOON
          </button>
          <p className="contact-form-note">
            Our message service is not connected yet. This form
            is a design preview and will not send your message.
          </p>
        </form>
      </section>
    </main>
  );
}
