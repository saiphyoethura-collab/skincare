import "./globals.css";
import { AuthProvider, CartProvider } from "../lib/AppProviders";
import NavBar from "./NavBar";

export const metadata = {
  title: "My Shop",
  description: "Basic ecommerce app with Firebase login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <NavBar />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
