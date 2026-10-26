'use client';

import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "Gentle Foaming Cleanser",
    category: "Cleanser",
    price: 18,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
    description: "မျက်နှာအဆီပြန်ခြင်းကို သန့်စင်ပေးပြီး အစိုဓာတ်ထိန်းပေးသော Cleanser"
  },
  {
    id: 2,
    name: "Hydrating Rose Water Toner",
    category: "Toner",
    price: 22,
    image: "https://images.unsplash.com/photo-1608248597379-915003664d60?auto=format&fit=crop&w=500&q=80",
    description: "အသားအရေ pH balance ညီမျှစေပြီး ရေဓာတ်ဖြည့်ပေးမည့် Toner"
  },
  {
    id: 3,
    name: "Vitamin C Brightening Serum",
    category: "Serum",
    price: 35,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80",
    description: "အမည်းစက်များ ပါးစေပြီး အသားအရေကြည်လင်စေသော Vitamin C Serum"
  },
  {
    id: 4,
    name: "Ultra Light Sunscreen SPF 50+",
    category: "Sunscreen",
    price: 25,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=500&q=80",
    description: "နေရောင်ခြည်ဒဏ်မှ စိတ်ချစွာ ကာကွယ်ပေးမည့် စီးကပ်မှုမရှိသော Sunscreen"
  }
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} ကို Cart ထဲသို့ ထည့်ပြီးပါပြီ!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-600">✨ Lumora Skincare</h1>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-gray-600 hover:text-pink-600">Login</Link>
          <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
            Cart ({cart.length})
          </span>
        </div>
      </nav>

      <header className="bg-pink-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">သင့်အသားအရေအတွက် အကောင်းဆုံး Skincare များ</h2>
        <p className="text-gray-600">သဘာဝပစ္စည်းများဖြင့် ပြုလုပ်ထားပြီး အသားအရေကို ကျန်းမာစိုပြည်စေပါတယ်။</p>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between">
              <div>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-xs font-semibold text-pink-500 uppercase">{product.category}</span>
                  <h4 className="font-bold text-lg text-gray-800 mt-1">{product.name}</h4>
                  <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                </div>
              </div>
              <div className="p-4 pt-0 flex justify-between items-center">
                <span className="font-bold text-gray-900">${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
