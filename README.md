# My Shop — Basic Ecommerce App (Next.js + Firebase Auth)

Login page + product listing + cart ပါတဲ့ အခြေခံ ecommerce web app တစ်ခု။ Local မှာ terminal နဲ့ run ချင်တာအတွက် setup လုပ်ထားတာပါ။ နောက်ပိုင်း Vercel ပေါ် deploy လို့ရပါတယ် (Next.js က Vercel ကိုတည်ဆောက်တဲ့ company ကိုယ်တိုင်က ထုတ်တဲ့ framework ဖြစ်လို့ အများဆုံး compatible ဖြစ်ပါတယ်)။

## Local မှာ run ဖို့ လိုအပ်တာများ

1. **Node.js** (v18 or v20 up) install ထားဖို့ လိုပါတယ် — https://nodejs.org
2. **Firebase project** တစ်ခု (အခမဲ့ Spark plan လုံလောက်ပါတယ်)

## Setup Steps

### 1. Dependencies install လုပ်ပါ

```bash
cd ecommerce-app
npm install
```

### 2. Firebase project ဆောက်ပါ

- https://console.firebase.google.com သွားပါ
- "Add project" နှိပ်ပြီး project အသစ်ဆောက်ပါ
- Project ထဲမှာ **Build > Authentication** ကိုသွားပြီး "Get started" နှိပ်ပါ
- **Sign-in method** tab ထဲမှာ **Email/Password** ကို Enable လုပ်ပါ

### 3. Firebase config ယူပါ

- Project settings (⚙️ gear icon) > General > "Your apps" ဆီ scroll ဆွဲပါ
- Web app (</>) icon နှိပ်ပြီး app အသစ်တစ်ခု register လုပ်ပါ
- ပြထားတဲ့ `firebaseConfig` object ထဲက value တွေကို ကူးထားပါ

### 4. `.env.local` ဖိုင် ဆောက်ပါ

`.env.local.example` ကို copy ကူးပြီး `.env.local` အဖြစ် rename လုပ်ပါ:

```bash
cp .env.local.example .env.local
```

ပြီးရင် Firebase Console က ကူးထားတဲ့ value တွေကို `.env.local` ထဲမှာ ဖြည့်ပါ:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1234567890
NEXT_PUBLIC_FIREBASE_APP_ID=1:1234567890:web:abcdef
```

### 5. Local server စတင်ပါ

```bash
npm run dev
```

ပြီးရင် browser မှာ **http://localhost:3000** ကိုဖွင့်ပါ။

## App Structure

- `/` — Product listing (Add to Cart button, login လိုအပ်)
- `/login` — Login page (Firebase email/password)
- `/signup` — Account ဖန်တီးရန်
- `/cart` — Cart items + total

## Vercel ပေါ် နောက်ပိုင်း Deploy လုပ်ချင်ရင်

1. Code ကို GitHub repo တစ်ခုထဲ push ပါ
2. https://vercel.com မှာ repo ကို import လုပ်ပါ
3. Vercel project settings > Environment Variables ထဲမှာ `.env.local` ထဲက value (NEXT_PUBLIC_FIREBASE_... 6 ခု) တွေကို တစ်ခုချင်း ထည့်ပါ
4. Deploy နှိပ်ရင် ပြီးပါပြီ

## Notes

- Product data က `src/lib/products.js` ထဲမှာ static array အနေနဲ့ ထားထားတာပါ — database မလိုသေးဘူး။ နောက်ပိုင်း Firestore ချိတ်ပြီး dynamic product list လုပ်ချင်ရင် ပြောပါ။
- Cart က page refresh လုပ်ရင် ပျောက်သွားမယ် (memory ထဲပဲ ထားတာ) — persistent ဖြစ်ချင်ရင် Firestore (per user) or localStorage ထည့်ပေးနိုင်ပါတယ်။
- Checkout button က placeholder ပဲ ရှိသေးတယ် — payment integration (Stripe စသည်) မထည့်ရသေးဘူး။
