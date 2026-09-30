# KulaKwaMacho 🍽️👀

> **"Eat with your eyes."**

**KulaKwaMacho** is an interactive, playful Kenyan food discovery platform. It simulates the emotional dopamine loop of a food-delivery app—from discovering irresistible food, to building a tray, going through checkout, and tracking a rider—except the order is entirely fictional. The food isn't actually coming. Instead, the journey pivots to uncovering the real recipes so you can make it yourself!

---

## 🌟 The Experience

1. **Discover**: Browse a curated catalogue of authentic Kenyan food (Nyama Choma, Pilau, Mutura, etc.).
2. **Crave**: Take the "What Should I Eat?" quiz for intelligent, deterministic food recommendations.
3. **Order (Fictionally)**: Customize your dish and add it to your tray.
4. **Checkout**: Proceed through an imaginary checkout process. **No real money or payment details are collected.**
5. **Track the Rider**: Follow "Boda Bob" or "Captain Chapati" through an interactive, timed delivery sequence.
6. **The Reveal**: The order arrives... in your imagination!
7. **Cook**: View the actual recipe to satisfy your craving in real life.

---

## 🚀 Tech Stack

* **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Database & Auth**: [Supabase](https://supabase.com/) (PostgreSQL)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Animations**: Native CSS & `canvas-confetti`

---

## 🏗️ Architecture & Features

### Core Modules
- **Authentication**: Fully wired Supabase Auth (`@supabase/ssr`) supporting Google OAuth and Email/Password. Enforced by Row Level Security (RLS).
- **Food Catalogue**: Data fetched securely from Supabase using Server Components, with an automatic fallback to local mock data if the database isn't fully seeded.
- **Virtual Tray**: Built with React Context (`TrayProvider`) and synchronized with `localStorage` for anonymous browsing.
- **Order History & Favorites**: Authenticated users can save their favorite dishes and view their historical fictional orders.
- **Server Actions**: All mutations (login, toggle favorites, submitting fictional orders) use Next.js Server Actions for secure, JS-free progressive enhancement and built-in CSRF protection.

### Directory Structure Overview
```text
src/
├── app/
│   ├── auth/           # Login and OAuth callbacks
│   ├── checkout/       # Fictional order submission (Server Actions)
│   ├── delivery/       # Timed delivery tracking sequence
│   ├── explore/        # Food catalogue grid
│   ├── favorites/      # Protected favorites view
│   ├── food/           # Food detail pages and favorite Server Actions
│   ├── history/        # Protected order history view
│   ├── profile/        # User dashboard and logout
│   ├── recipes/        # Real recipe database
│   ├── tray/           # Virtual cart view
│   └── what-should-i-eat/ # Recommendation quiz
├── components/
│   ├── food/           # AddToTrayForm, FavoriteButton
│   ├── layout/         # Navbar, Footer, TrayIndicator
│   └── tray/           # TrayProvider Context
└── lib/
    ├── data/           # Data fetching layers (e.g. foods.ts)
    └── supabase/       # Supabase SSR clients (server.ts, client.ts)
```

---

## 🔒 Security Practices

Developed following **OWASP Top 10** guidelines:
- **No Financial Data**: The application is explicitly fictional. Zero payment processing logic or PCI data exists.
- **Secure Authentication**: Supabase SSR ensures sessions are managed via secure, HttpOnly cookies.
- **SQL Injection Prevention**: All Supabase queries use parameterized endpoints; no raw SQL is executed by the client.
- **Access Control**: Protected routes safely redirect unauthenticated users to `/auth/login`. RLS policies safeguard the PostgreSQL database from unauthorized writes.

---

## 🛠️ Local Development

### 1. Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun
- A Supabase Project

### 2. Environment Variables
Copy `.env.example` to `.env.local` and populate your Supabase keys:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Setup
1. Open your Supabase SQL Editor.
2. Run the migration script located at `supabase/migrations/00000_init.sql` to generate the schema and RLS policies.
3. Run the seed script located at `supabase/seed.sql` to populate the `foods` table.

### 4. Run the Application

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the dopamine loop!

---

*This project is built for entertainment and cultural appreciation. It is not affiliated with any real food delivery services.*
