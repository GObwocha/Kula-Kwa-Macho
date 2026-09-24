# Gemini Project Context — KulaKwaMacho

## Mission

Build **KulaKwaMacho**, a premium, playful Kenyan food discovery web experience using:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Supabase
* PostgreSQL

The product is inspired by the interaction concept behind FoodNeverComes:

> Browse irresistible food → create a fictional order → experience the dopamine of ordering → follow a fictional delivery → discover that the food was never actually coming.

However, KulaKwaMacho must be an original product.

Do not copy the source site's:

* brand
* logo
* copy
* visual identity
* exact layouts
* CSS
* illustrations
* proprietary assets
* exact component implementation

Use the reference only to understand the type of playful product experience being created.

---

# Product Concept

"Kula Kwa Macho" literally communicates the idea of eating with your eyes.

The platform celebrates Kenyan food through an interactive experience.

A visitor should be able to:

1. Discover Kenyan food.
2. Browse beautiful food photography.
3. Search and filter dishes.
4. Open detailed food pages.
5. Customize a dish.
6. Add it to a virtual tray.
7. Place a completely fictional order.
8. Track a fictional rider.
9. Receive a humorous fake delivery outcome.
10. Discover the real recipe.
11. Get recommendations.
12. Save favorites if authenticated.

---

# Core Experience

The emotional journey should be:

**Curiosity → craving → selection → anticipation → dopamine → surprise → discovery**

The site should feel alive.

Avoid making it feel like a static restaurant directory.

---

# Kenyan Food Direction

Prioritize foods such as:

* Nyama Choma
* Pilau
* Mukimo
* Githeri
* Ugali
* Sukuma Wiki
* Chapati
* Mandazi
* Bhajia
* Samosa
* Mutura
* Smokie
* Mayai Boiled
* Viazi Karai
* Wali wa Nazi
* Samaki wa Kupaka
* Matoke
* Beef Stew
* Chicken Kienyeji
* Nduma
* Uji
* Dawa
* Kenyan Chai
* Tamarind Juice
* Passion Juice
* Mango Juice

Expand the catalogue over time.

Treat Kenyan food culture carefully.

Do not make unsupported claims about the origins of dishes.

---

# Visual Direction

Create an editorial food experience.

Desired qualities:

* premium
* warm
* playful
* youthful
* photographic
* expressive
* modern
* Kenyan

Avoid:

* generic SaaS layouts
* generic AI aesthetics
* excessive neon
* excessive glassmorphism
* excessive gradients
* template-like dashboards

Food photography should dominate the visual hierarchy.

---

# Suggested Brand Palette

Use the following only as a starting point:

* deep charcoal
* warm cream
* leafy green
* tomato red
* golden yellow
* muted brown

Use color intentionally.

Do not turn the entire site into a literal Kenyan flag.

---

# Typography

Use a strong display font for headlines and a highly readable sans-serif for body text.

The typography should create an editorial feeling.

Use large headlines selectively.

Do not make every element oversized.

---

# Interaction Details

Small interactions matter.

Examples:

* Add-to-tray animation
* Floating tray count
* Food card hover motion
* Image zoom
* Recommendation reveal
* Countdown timers
* Rider movement
* Delivery status changes
* Confetti or playful completion animation

Animations must remain performant.

---

# Fake Order Philosophy

The site is not a real food-delivery service.

Make this clear.

No real payments.

No real deliveries.

No real financial transactions.

The fake order should be the entertainment mechanic.

Example fictional order:

```text
2 × Nyama Choma
1 × Ugali
1 × Kachumbari

Subtotal: KSh 1,280
Delivery: KSh 0
Dopamine: HIGH

Total:
KSh 1,280 imaginary shillings
```

---

# Recommendation Engine

Start with deterministic rules.

Example:

```text
IF spicy >= 4
AND meat = true
AND hunger = high
THEN recommend nyama choma
```

Create enough combinations to make the feature feel intelligent.

Do not introduce an AI API unless explicitly requested.

---

# Data Architecture

Supabase is the source of truth for persistent data.

Use PostgreSQL.

Use RLS.

Use Supabase Storage if user-generated images or additional media are later required.

Use server-side Supabase clients for privileged/server operations.

---

# Anonymous Users

Users should not need accounts to experience the core product.

Anonymous visitors can:

* browse
* search
* recommend
* create a tray
* simulate an order
* view recipes

Persistent features can require authentication.

---

# UX Principle

Never force the user through unnecessary forms.

The product should feel:

> "I came because I was bored and hungry, and now I'm somehow ordering imaginary pilau."

That is the energy.

---

# Definition of Done

A feature is not finished merely because it compiles.

It is finished when:

* it works
* it looks intentional
* it is responsive
* it handles loading
* it handles errors
* it is accessible
* it does not leak secrets
* it follows the project's architecture
* it feels consistent with KulaKwaMacho
