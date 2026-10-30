"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useAuth } from "../../lib/AppProviders";

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    if (loading) return;
    if (!user) { router.replace("/login"); return; }
    let active = true;
    getDoc(doc(db, "admins", user.uid))
      .then((snap) => { if (active) setStatus(snap.exists() ? "admin" : "denied"); })
      .catch(() => { if (active) setStatus("error"); });
    return () => { active = false; };
  }, [user, loading, router]);

  if (loading || status === "checking") return <main style={{padding:60}}>Checking admin access...</main>;
  if (status === "denied") return <main style={{padding:60}}>Access denied. Admin only.</main>;
  if (status === "error") return <main style={{padding:60}}>Could not verify admin access.</main>;

  return (
    <main style={{padding:"60px 8%",background:"#faf7f2",minHeight:"75vh"}}>
      <h1 style={{fontSize:36,color:"#40362f"}}>LUMORA Admin Dashboard</h1>
      <p style={{marginTop:12,color:"#776b61"}}>Welcome to your store management dashboard.</p>
      <section style={{display:"flex",gap:20,flexWrap:"wrap",marginTop:35}}>
        {["Products Management","Customer Orders","Inventory & Stock"].map((item) => (
          <div key={item} style={{padding:30,background:"#fff",border:"1px solid #e9dfd3",borderRadius:12,minWidth:220}}>
            <h2 style={{fontSize:19}}>{item}</h2>
            <p style={{marginTop:10,color:"#887d72"}}>Coming next</p>
          </div>
        ))}
      </section>
    </main>
  );
}
