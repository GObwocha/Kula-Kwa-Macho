# 🍽️ KulaKwaMacho

> **Eat with your eyes.**

KulaKwaMacho is a playful Kenyan food discovery platform built around one simple idea:

**What if browsing Kenyan food felt as satisfying as ordering it?**

Discover mouth-watering Kenyan dishes, build an imaginary food order, follow a fictional rider, explore authentic recipes, and satisfy the craving — without spending a single shilling.

No restaurant.
No real delivery.
No payment.
Just food, dopamine, and a questionable number of chapatis.

---

## ✨ What is KulaKwaMacho?

KulaKwaMacho is an interactive food experience inspired by the psychology of modern food-delivery apps.

Instead of connecting users to real restaurants, it turns the **ordering experience itself into the product**.

Users can:

* 🍛 Discover Kenyan food
* 🔎 Search and filter dishes
* ❤️ Save favorite foods
* 🛒 Build a virtual food tray
* 🎛️ Customize dishes
* 🧠 Get personalized food recommendations
* 🎲 Let the platform decide what they should eat
* 🛵 Track a fictional food rider
* 📦 Complete a simulated delivery
* 👨🏾‍🍳 Discover real recipes
* 🔥 Explore trending cravings
* 🏆 Earn playful badges and streaks

---

## 🇰🇪 Kenyan Food, Front and Center

The platform celebrates the diversity of Kenyan food.

The catalogue includes dishes and drinks such as:

* Nyama Choma
* Pilau
* Mukimo
* Githeri
* Ugali & Sukuma Wiki
* Chapati
* Mandazi
* Bhajia
* Samosa
* Mutura
* Smokie
* Viazi Karai
* Wali wa Nazi
* Samaki wa Kupaka
* Matoke
* Chicken Kienyeji
* Beef Stew
* Kenyan Chai
* Dawa
* Tamarind Juice
* Passion Juice
* Mango Juice

The catalogue is designed to grow.

---

## 🧠 The Dopamine Loop

KulaKwaMacho is designed around a simple interaction loop:

```text
Discover
   ↓
Crave
   ↓
Customize
   ↓
Add to Tray
   ↓
Checkout
   ↓
Track Rider
   ↓
"Delivered!"
   ↓
Wait...
   ↓
😂
```

The order is completely fictional.

The dopamine is real.

---

## 🛵 The Delivery Experience

After building a tray, users can send their imaginary order.

A fictional rider takes over.

The rider might:

* leave the kitchen
* enter traffic
* get lost
* stop for tea
* ask for directions
* mysteriously disappear
* eventually "deliver" the order

The final reveal makes it clear:

> **The food was never coming.**

But the user can immediately jump into the recipe and make it themselves.

---

## 🍳 Real Recipes

The joke ends where the useful part begins.

Many dishes include real, practical recipes with:

* ingredients
* measurements
* preparation time
* cooking time
* instructions
* serving information

So while KulaKwaMacho doesn't deliver the food...

**your kitchen can.**

---

## 🧰 Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Supabase
* PostgreSQL
* Supabase Auth
* Supabase Storage

### Architecture

* Next.js App Router
* React Server Components
* Client Components where interaction requires them
* Server-side Supabase client
* Browser-side Supabase client
* Row Level Security

---

## 🗂️ Project Structure

```text
.
├── AGENTS.md
├── GEMINI.md
├── README.md
├── docs/
│   ├── PRODUCT.md
│   ├── DESIGN.md
│   ├── DATABASE.md
│   └── CONTENT.md
├── supabase/
│   ├── migrations/
│   └── seed.sql
├── public/
│   └── images/
└── src/
    ├── app/
    ├── components/
    ├── hooks/
    ├── lib/
    │   └── supabase/
    ├── types/
    └── data/
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd kulakwacho
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Supabase

Create a Supabase project and configure the required environment variables.

Create:

```text
.env.local
```

Add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Never commit `.env.local`.

---

### 4. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🗄️ Supabase

The application uses Supabase for:

* PostgreSQL
* Authentication
* persistent user data
* favorites
* orders
* recipes
* food catalogue
* Row Level Security
* Storage where necessary

All production schema changes should be represented as migrations.

---

## 🔐 Security

KulaKwaMacho does **not** process real payments.

The application must never request:

* card numbers
* CVV
* bank credentials
* mobile-money PINs
* other payment secrets

The checkout experience is deliberately fictional.

Supabase Row Level Security protects user-owned data.

---

## 🧪 Testing

Run linting:

```bash
npm run lint
```

Run the production build:

```bash
npm run build
```

Where tests are configured:

```bash
npm test
```

The primary end-to-end journey should be tested:

```text
Browse
→ Food detail
→ Customize
→ Add to tray
→ Checkout
→ Rider tracking
→ Delivery result
→ Recipe
```

---

## 🎨 Design Philosophy

KulaKwaMacho should feel like:

> **A modern food magazine met a playful delivery app and grew up in Kenya.**

The interface should be:

* visual
* warm
* expressive
* responsive
* fast
* accessible
* culturally thoughtful

Avoid generic AI-generated UI patterns.

---

## 🤝 Contributing

Contributions are welcome.

Before making substantial changes:

1. Read `AGENTS.md`.
2. Read the relevant files in `docs/`.
3. Inspect the existing architecture.
4. Preserve existing functionality.
5. Keep the UI consistent with the design system.
6. Test your changes.

---

## 📜 License

Add the project's chosen license here before publishing the repository.

---

## 🇰🇪 Built for the craving

**KulaKwaMacho**

*Eat with your eyes.*
