import "./globals.css";
import { AuthProvider, CartProvider } from "../lib/AppProviders";

export const metadata = {
  title: "LUMORA. | Skincare Studio",
  description: "Thoughtful skincare for your everyday glow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
