"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import { collection, doc, onSnapshot, setDoc, deleteDoc } from "firebase/firestore";

// ---------- Auth Context ----------
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// ---------- Cart Context ----------
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const total = items.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}


const FavouritesContext = createContext(null);

export function FavouritesProvider({ children }) {
  const { user, loading } = useAuth();
  const [favourites, setFavourites] = useState([]);
  const [wishlistLoading, setWishlistLoading] = useState(true);

  useEffect(() => {
    setFavourites([]);
    setWishlistLoading(true);
    if (loading) return;
    if (!user) {
      setWishlistLoading(false);
      return;
    }
    const unsubscribe = onSnapshot(
      collection(db, "users", user.uid, "wishlist"),
      (snapshot) => {
        setFavourites(snapshot.docs.map((item) => item.data()));
        setWishlistLoading(false);
      },
      (error) => {
        console.error("Wishlist loading error:", error);
        setFavourites([]);
        setWishlistLoading(false);
      }
    );
    return () => unsubscribe();
  }, [user?.uid, loading]);

  const toggleFavourite = async (product) => {
    if (!user) {
      window.location.href = "/login";
      return;
    }
    const productId = String(product.id);
    const wishlistRef = doc(db, "users", user.uid, "wishlist", productId);
    try {
      if (favourites.some((item) => String(item.id) === productId)) {
        await deleteDoc(wishlistRef);
      } else {
        await setDoc(wishlistRef, { ...product, id: productId });
      }
    } catch (error) {
      console.error("Wishlist update error:", error);
      alert("Could not update your wishlist. Please try again.");
    }
  };

  const isFavourite = (id) =>
    !!user && !wishlistLoading &&
    favourites.some((item) => String(item.id) === String(id));

  return (
    <FavouritesContext.Provider value={{
      favourites: user && !wishlistLoading ? favourites : [],
      toggleFavourite,
      isFavourite,
      wishlistLoading
    }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  return useContext(FavouritesContext);
}
