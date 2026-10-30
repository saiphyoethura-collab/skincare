"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../lib/AppProviders";

export default function AccountPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  async function handleLogout() {
    try { await logout(); router.push("/login"); }
    catch (error) { console.error(error); alert("Logout failed. Please try again."); }
  }
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <p className="policy-eyebrow">YOUR LUMORA ACCOUNT</p>
        <h1>My Account</h1>
        <p>Your personal skincare shopping space.</p>
      </section>
      <section className="policy-content">
        {loading ? <p>Loading your account...</p> : !user ? (
          <div className="orders-empty">
            <h2>Welcome to LUMORA</h2>
            <p>Log in or create an account to continue.</p>
            <Link href="/login" className="orders-shop-button">LOGIN</Link>
            <p style={{marginTop:24}}>New here? <Link href="/signup">Register</Link></p>
          </div>
        ) : (
          <div style={{background:"#fff",border:"1px solid #e9e0d5",borderRadius:12,padding:32}}>
            <p className="policy-eyebrow">ACCOUNT DETAILS</p>
            <h2>Welcome back!</h2>
            <p style={{marginTop:20}}><strong>Email:</strong> {user.email}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:16,marginTop:32}}>
              <Link href="/orders" className="orders-shop-button">MY ORDERS</Link>
              <button type="button" onClick={handleLogout} style={{padding:"12px 24px",background:"transparent",border:"1px solid #b9a995",borderRadius:4,cursor:"pointer",color:"#57483c"}}>LOG OUT</button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
