import "./globals.css";
import LumoraHeader from "./LumoraHeader";
import LumoraFooter from "./LumoraFooter";
import { AuthProvider, CartProvider, FavouritesProvider } from "../lib/AppProviders";

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
            <FavouritesProvider>
            <LumoraHeader />
            {children}
            <LumoraFooter />
          </FavouritesProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
