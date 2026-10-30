import Link from "next/link";

const groups = [
  {
    title: "EXPLORE",
    links: [
      ["Home", "/"],
      ["Shop All", "/products"],
      ["Our Philosophy", "/about"],
      ["Contact Us", "/contact"],
    ],
  },
  {
    title: "CUSTOMER CARE",
    links: [
      ["Shipping Policy", "/shipping"],
      ["Returns & Refunds", "/returns"],
      ["Privacy Policy", "/privacy"],
      ["Terms & Conditions", "/terms"],
    ],
  },
  {
    title: "YOUR ACCOUNT",
    links: [
      ["My Account", "/login"],
      ["My Orders", "/orders"],
      ["Your Favourites", "/wishlist"],
      ["Shopping Bag", "/cart"],
    ],
  },
];

export default function LumoraFooter() {
  return (
    <footer className="lumora-footer">
      <div className="lumora-footer-main">
        <div className="lumora-footer-brand">
          <Link href="/" className="lumora-footer-logo">LUMORA<span>.</span></Link>
          <p>Thoughtful skincare for your everyday glow. Simple rituals, carefully chosen essentials.</p>
        </div>

        {groups.map((group) => (
          <div className="lumora-footer-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </div>
        ))}
      </div>

      <div className="lumora-footer-bottom">
        <span>© {new Date().getFullYear()} LUMORA. All rights reserved.</span>
        <span>Made for your everyday glow.</span>
      </div>
    </footer>
  );
}
