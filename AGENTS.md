# KulaKwaMacho — AI Development Instructions

## 1. Project Identity

You are the lead engineer responsible for building **KulaKwaMacho**, a playful Kenyan food discovery and simulated food-delivery experience.

KulaKwaMacho is inspired by the interaction philosophy of novelty "dopamine" food websites such as FoodNeverComes, but it must NOT be a visual, textual, or brand clone.

The goal is to create an original Kenyan product with the same broad entertainment mechanics:

* Discover food
* Browse an appetizing catalogue
* Customize dishes
* Add items to a virtual tray/cart
* Experience a playful simulated checkout
* Track a fictional delivery
* Receive a humorous simulated delivery outcome
* Discover authentic Kenyan recipes
* Get personalized/random food recommendations
* Explore Kenyan food culture

The platform name is:

> **KulaKwaMacho**

Possible brand interpretation:

> "Eat with your eyes."

The site should feel like a polished modern consumer startup rather than a school project.

---

# 2. NON-NEGOTIABLE DEVELOPMENT RULES

## Product Specification Hierarchy

Before implementing any feature, read the relevant project documentation.

The project documentation is organized by responsibility:

1. **AGENTS.md** — Engineering rules, hard constraints, security requirements, and implementation behavior.
2. **GEMINI.md** — AI-specific project context, development workflow, and project-wide operating context.
3. **docs/PRODUCT.md** — Product requirements, routes, features, user journeys, and functional behavior.
4. **docs/DESIGN.md** — Visual language, UX principles, interaction patterns, responsiveness, and accessibility.
5. **docs/DATABASE.md** — Supabase/PostgreSQL schema, relationships, security policies, and data architecture.
6. **docs/CONTENT.md** — Content strategy, copy, tone, Kenyan food terminology, and cultural guidelines.

### Implementation Rules

When implementing a feature:

1. Read **AGENTS.md** first.
2. Read the relevant documentation under `docs/`.
3. Read **GEMINI.md** when working with Gemini or AI-assisted development.
4. Inspect the existing codebase, architecture, dependencies, and related components.
5. Determine how the requested feature fits the existing architecture before writing code.
6. Preserve working code and existing functionality unless the requested change explicitly requires modification.
7. Follow the most specific documentation relevant to the feature.
8. Do not invent requirements when the documentation already provides sufficient direction.

### Handling Conflicts

If documentation appears to conflict:

1. **Security, safety, and hard engineering constraints in `AGENTS.md` take priority.**
2. For product decisions, follow the **most specific relevant product documentation**.
3. For visual decisions, `docs/DESIGN.md` takes precedence over general visual assumptions.
4. For database decisions, `docs/DATABASE.md` takes precedence over assumptions about the data model.
5. For content and copy, `docs/CONTENT.md` takes precedence over generic writing conventions.
6. Existing working code should not be unnecessarily rewritten.
7. If a genuine ambiguity remains, stop and identify the conflict rather than silently inventing a requirement.


## Inspect Before Modifying

Before writing or modifying code:

1. Inspect the entire repository structure.
2. Inspect `package.json`.
3. Inspect installed dependencies.
4. Inspect the Next.js configuration.
5. Inspect Tailwind configuration.
6. Inspect the Supabase setup.
7. Inspect existing routes.
8. Inspect existing components.
9. Inspect existing database migrations.
10. Inspect existing environment variables and `.env.example`.

Never blindly overwrite an existing implementation.

Preserve working functionality unless the requested change explicitly replaces it.

---

## Use the Existing Stack

Primary stack:

* Next.js
* React
* TypeScript
* App Router
* Supabase
* PostgreSQL
* Tailwind CSS
* `@supabase/supabase-js`
* `@supabase/ssr`

Use modern Next.js conventions.

Prefer:

* Server Components by default
* Client Components only when interactivity requires them
* Server Actions where appropriate
* Route Handlers for API-style endpoints
* Supabase server client for server-side database operations
* Supabase browser client for browser-side interactions

Follow the current Supabase + Next.js SSR architecture rather than inventing a custom authentication/session system.

---

# 3. DEVELOPMENT PHILOSOPHY

Build the product in layers.

## Layer 1 — Foundation

Implement:

* application shell
* typography
* color system
* responsive layout
* navigation
* footer
* reusable UI primitives
* Supabase clients
* database types
* environment configuration

## Layer 2 — Food Discovery

Implement:

* food catalogue
* search
* categories
* cuisine/region filters
* featured dishes
* trending dishes
* food cards
* food detail pages

## Layer 3 — The Dopamine Loop

Implement:

* customization
* virtual tray/cart
* simulated checkout
* order confirmation
* fictional rider tracking
* delivery animation
* humorous delivery outcome

## Layer 4 — Food Intelligence

Implement:

* "What should I eat?" experience
* random food picker
* preference questionnaire
* recommendations
* recipe system

## Layer 5 — Accounts

Implement:

* authentication
* user profiles
* favorites
* order history
* cravings/history
* streaks
* badges

## Layer 6 — Polish

Implement:

* animations
* micro-interactions
* loading states
* empty states
* error states
* accessibility
* SEO
* Open Graph metadata
* responsive behavior
* performance optimization

---

# 4. PRODUCT PRINCIPLES

KulaKwaMacho must be:

### Playful

The product should feel fun immediately.

### Kenyan

Kenyan food should not feel like an afterthought or simply a country filter.

The content, terminology, humor, food categories, imagery, and recommendations should naturally reflect Kenya.

### Appetizing

Food imagery is extremely important.

Food cards should make the user want to click.

### Fast

Interactions should feel immediate.

Use optimistic UI where appropriate.

### Mobile-first

A large percentage of users will experience the platform on phones.

Design for:

* 360px
* 390px
* 412px
* tablet
* desktop

Do not design desktop first and merely shrink it.

### Original

Do not reproduce:

* FoodNeverComes branding
* its logo
* its exact typography
* its exact copy
* its exact illustrations
* its exact layout
* its exact CSS
* its exact component structure
* its exact animations

Use it only as a product inspiration/reference for interaction patterns.

---

# 5. BRAND

Product name:

**KulaKwaMacho**

Meaning:

**Eat with your eyes.**

Brand personality:

* playful
* cheeky
* warm
* youthful
* Kenyan
* visually rich
* slightly chaotic
* clever
* culturally aware

Avoid making the site feel corporate.

Avoid generic "African startup" aesthetics.

Do not overuse stereotypical African visual motifs.

---

# 6. VISUAL DIRECTION

Create a distinctive food-first visual identity.

Suggested visual characteristics:

* bold editorial typography
* large food photography
* warm neutrals
* earthy greens
* tomato/red accents
* golden/yellow highlights
* deep charcoal
* subtle Kenyan-inspired color accents
* generous whitespace
* oversized typography
* rounded cards
* playful badges
* expressive microcopy
* subtle grain/noise where appropriate

The visual system should feel contemporary and premium.

Think:

> modern food magazine + playful consumer app + Kenyan street-food energy.

Do not create a generic dashboard.

---

# 7. HOMEPAGE

The homepage should immediately communicate:

1. What KulaKwaMacho is.
2. Why it is fun.
3. What users can do.
4. Kenyan food is central to the experience.

Suggested information architecture:

### Header

Include:

* KulaKwaMacho logo
* Explore
* What Should I Eat?
* Recipes
* About
* optional authentication/profile control
* tray/cart indicator

### Hero

Large headline.

Example direction:

> **Craving something Kenyan?**

Supporting copy:

> Browse the food. Build the order. Follow the rider. Enjoy absolutely nothing arriving.

CTA examples:

* Start craving
* Surprise me
* Explore Kenyan food

Do not copy the reference site's wording.

### Featured Food

Large editorial food cards.

Examples:

* Nyama Choma
* Pilau
* Mukimo
* Chapati
* Ugali & Sukuma Wiki
* Githeri
* Bhajia
* Samaki wa Kupaka
* Matoke
* Mandazi

### How It Works

Explain the experience in three or four playful steps.

Example:

1. Pick something delicious.
2. Build your imaginary order.
3. Send your fictional rider into the wild.
4. Wait for absolutely nothing.

### Trending

Display dishes currently receiving the most interactions.

### Kenyan Food Map / Regions

Create an optional section connecting dishes with Kenyan regions.

Examples:

* Coast
* Central
* Western
* Nyanza
* Rift Valley
* Nairobi
* Eastern
* Northern Kenya

Avoid implying that a food belongs exclusively to a region when its cultural history is more complex.

### Recipes

Promote real recipes.

### Final CTA

End with a playful craving CTA.

---

# 8. FOOD CATALOGUE

The catalogue is a core feature.

Create structured food records.

Each food item should support:

* id
* name
* slug
* description
* short_description
* category
* region
* image_url
* gallery
* price
* preparation_time
* spice_level
* dietary_tags
* ingredients
* recipe
* popularity_score
* featured
* trending
* available
* created_at

Example categories:

* Main dishes
* Street food
* Breakfast
* Snacks
* Sides
* Drinks
* Desserts

Example foods:

### Main dishes

* Nyama Choma
* Pilau
* Mukimo
* Githeri
* Ugali & Sukuma Wiki
* Beef Stew
* Chicken Kienyeji
* Fish
* Matoke
* Wali wa Nazi
* Samaki wa Kupaka

### Street food

* Smokie
* Mayai Boiled
* Mutura
* Bhajia
* Samosa
* Mahamri
* Viazi Karai
* Roasted maize

### Breakfast

* Mandazi
* Chapati
* Uji
* Tea & Mandazi
* Eggs & Toast
* Nduma

### Drinks

* Kenyan Chai
* Dawa
* Tamarind Juice
* Passion Juice
* Sugarcane Juice
* Mango Juice
* Mala

The catalogue should be expandable.

---

# 9. FOOD CARD

Food cards should contain:

* image
* name
* short description
* price
* category
* region where appropriate
* popularity/trending indicator
* add button

Interactions:

* hover on desktop
* tap feedback on mobile
* quick add
* favorite
* open details

Avoid clutter.

---

# 10. FOOD DETAIL PAGE

Each food detail page should provide:

* large hero image
* food name
* description
* fictional price
* customization options
* ingredients
* preparation time
* spice level
* dietary information
* cultural/contextual information where appropriate
* recipe
* related foods
* add to tray

Use real recipe information.

Do not fabricate cultural claims as facts.

---

# 11. VIRTUAL TRAY

Call the cart:

> **Tray**

The tray should feel playful.

Show:

* items
* quantities
* customizations
* fictional subtotal
* fictional delivery fee
* imaginary discounts
* imaginary total

Make it obvious that the transaction is simulated.

Never collect:

* real card numbers
* CVV
* bank credentials
* mobile-money credentials

Do not create a fake payment form that could be mistaken for a real financial transaction.

The checkout should be explicitly fictional.

Example:

> **You're about to spend KSh 1,450 of absolutely nothing.**

---

# 12. SIMULATED CHECKOUT

The checkout is entertainment.

Suggested flow:

1. Review tray
2. Choose delivery location
3. Select fictional delivery speed
4. Confirm imaginary order
5. Generate order
6. Show rider tracking
7. Complete the joke

Never represent the transaction as a real purchase.

Use clear language such as:

> "No payment will be processed."

---

# 13. RIDER EXPERIENCE

Create fictional delivery characters.

Possible riders:

* Boda Bob
* Msee wa Delivery
* Chapati Express
* The Goat
* Turbo Tuk-Tuk
* Captain Matatu

Keep the humor playful rather than insulting.

The tracking experience can show:

* rider avatar
* rider name
* estimated time
* route animation
* order status
* humorous status updates

Example statuses:

> "Rider has left the kitchen."

> "Rider is negotiating Nairobi traffic."

> "Rider has entered the wrong estate."

> "Rider has stopped for tea."

> "Rider is asking for directions."

Final state:

> "Delivered!"

Then reveal the central joke:

> "Delivered to your imagination."

---

# 14. "WHAT SHOULD I EAT?"

Create an interactive recommendation engine.

Ask a small number of questions:

* How hungry are you?
* Meat or vegetarian?
* How spicy?
* What kind of mood?
* Breakfast / lunch / dinner / snack?
* Light or heavy?
* Crunchy / soft / saucy?
* Traditional / modern / street food?

Then return a recommendation.

Allow:

* reroll
* save
* view recipe
* add to tray

The recommendation algorithm should initially be deterministic and database-driven.

Do not introduce an LLM dependency unless explicitly requested.

---

# 15. RECIPES

Recipes are real content.

Each recipe should support:

* ingredients
* quantities
* preparation time
* cooking time
* servings
* difficulty
* instructions
* nutrition fields if verified
* image
* tags

Do not invent dangerous food-safety instructions.

Where information is uncertain, avoid making unsupported claims.

---

# 16. SUPABASE

Use Supabase for:

* PostgreSQL database
* Authentication
* Storage
* Row Level Security
* user profiles
* favorites
* orders
* order items
* recipes
* food catalogue
* reviews if implemented
* analytics/event records where appropriate

Use the current Supabase Next.js SSR architecture.

Recommended packages:

```bash
npm install @supabase/supabase-js @supabase/ssr
```

Use:

```text
lib/supabase/client.ts
lib/supabase/server.ts
```

Do not expose service-role credentials to the browser.

---

# 17. DATABASE

Suggested tables:

```text
profiles
foods
food_categories
food_customizations
recipes
favorites
orders
order_items
order_events
user_preferences
cravings
badges
user_badges
```

Potential relationships:

```text
profiles
    ├── favorites
    ├── orders
    ├── cravings
    └── user_badges

foods
    ├── recipes
    ├── favorites
    ├── order_items
    └── food_customizations

orders
    ├── order_items
    └── order_events
```

Use UUID primary keys.

Use timestamps.

Add appropriate indexes.

---

# 18. ROW LEVEL SECURITY

RLS is mandatory for user-owned data.

Users should only be able to access their own:

* profile
* favorites
* preferences
* orders
* cravings
* badges

Public food catalogue data can be readable publicly.

Do not disable RLS merely to make development easier.

---

# 19. AUTHENTICATION

Authentication should be optional for basic browsing.

A visitor should be able to:

* browse foods
* search
* use recommendations
* view recipes
* build a temporary tray

Authentication becomes useful for:

* favorites
* persistent preferences
* history
* streaks
* badges

Support Supabase Auth.

Potential providers:

* Email/password
* Google

Do not force account creation unnecessarily.

---

# 20. STATE MANAGEMENT

Do not add a global state library unless necessary.

Prefer:

* React state
* Context
* URL state
* server state
* Supabase
* cookies/localStorage for anonymous temporary state

The tray should work for anonymous visitors.

Persist anonymous tray state locally.

If the user signs in, gracefully synchronize relevant state.

---

# 21. COMPONENT ARCHITECTURE

Prefer reusable components.

Potential structure:

```text
components/
├── layout/
├── navigation/
├── food/
│   ├── FoodCard
│   ├── FoodGrid
│   ├── FoodDetails
│   ├── FoodFilters
│   └── FoodSearch
├── tray/
│   ├── TrayDrawer
│   ├── TrayItem
│   └── TraySummary
├── delivery/
│   ├── RiderTracker
│   ├── DeliveryTimeline
│   └── DeliveryResult
├── recommendations/
│   ├── CravingQuiz
│   └── RecommendationCard
├── recipes/
├── auth/
└── ui/
```

Avoid giant components.

If a component becomes difficult to understand, split it.

---

# 22. ANIMATION

Animation should communicate interaction.

Use subtle motion for:

* food cards
* add-to-tray
* tray opening
* checkout
* rider movement
* countdowns
* recommendation reveals

Do not animate everything.

Respect:

```css
prefers-reduced-motion
```

Animations must not prevent users from completing tasks.

---

# 23. IMAGES

Food photography is a major part of the product.

Use high-quality food imagery.

Every image needs:

* meaningful alt text
* responsive sizing
* appropriate aspect ratio
* lazy loading where appropriate

Do not hotlink random images without checking licensing.

Prefer properly licensed imagery or project-owned assets.

Use Next.js image optimization.

---

# 24. SEO

Every important page should have appropriate metadata.

Implement:

* title
* description
* canonical URL
* Open Graph
* Twitter/X metadata
* structured metadata where appropriate

Food pages should have useful SEO titles.

Example:

> Nyama Choma — Kenyan Food | KulaKwaMacho

---

# 25. ACCESSIBILITY

Follow WCAG principles.

Requirements:

* keyboard navigation
* semantic HTML
* labels
* visible focus states
* sufficient contrast
* alt text
* accessible dialogs
* accessible buttons
* reduced-motion support
* screen-reader-friendly status updates

Do not use icons as the only source of meaning.

---

# 26. PERFORMANCE

Prioritize:

* Server Components
* image optimization
* dynamic imports when appropriate
* minimal client-side JavaScript
* caching
* database indexes
* pagination
* lazy loading

Do not fetch the entire food database into the browser.

---

# 27. ERROR HANDLING

Every major feature must have:

* loading state
* empty state
* error state
* retry behavior where appropriate

Never leave a blank screen.

Use friendly language.

Example:

> "The kitchen lost the plot. Try again."

But do not hide important technical errors from developers.

Log useful diagnostic information.

---

# 28. SECURITY

Never:

* expose Supabase service-role keys
* store payment credentials
* pretend to process real payments
* trust client-provided authorization
* disable RLS
* interpolate untrusted SQL
* expose private user data
* store unnecessary personal information

Validate all server inputs.

Use server-side authorization.

---

# 29. CODE QUALITY

Use strict TypeScript.

Avoid:

```typescript
any
```

unless there is a documented reason.

Prefer explicit types.

Keep functions small.

Use meaningful names.

Avoid unnecessary abstraction.

Do not create a utility for one trivial line unless it improves clarity.

---

# 30. ENVIRONMENT VARIABLES

Use:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Never commit:

```text
.env.local
```

Never place service-role secrets in client-side code.

Maintain:

```text
.env.example
```

with placeholders only.

---

# 31. DATABASE MIGRATIONS

All schema changes must be represented as Supabase migrations.

Do not rely on manually modifying the production database.

Seed development data using:

```text
supabase/seed.sql
```

Seed realistic Kenyan foods.

---

# 32. TESTING

At minimum test:

### Unit

* recommendation logic
* price calculation
* tray calculations
* customization logic

### Integration

* Supabase queries
* authentication
* favorites
* order creation

### E2E

Critical user journey:

```text
Landing page
→ Browse
→ Open food
→ Customize
→ Add to tray
→ Checkout
→ Delivery simulation
→ Completion
```

---

# 33. DEVELOPMENT ORDER

Implement in this order:

1. Project inspection
2. Design system
3. Layout
4. Supabase foundation
5. Food schema
6. Food catalogue
7. Food detail
8. Tray
9. Simulated checkout
10. Rider experience
11. Recommendation engine
12. Recipes
13. Authentication
14. Favorites/history
15. Polish
16. SEO
17. Accessibility
18. Testing
19. Production optimization

Do not attempt to build every feature simultaneously.

---

# 34. GEMINI WORKFLOW

When asked to implement a feature:

### Step 1

Inspect the repository.

### Step 2

Identify affected files.

### Step 3

Explain the implementation plan briefly.

### Step 4

Implement the smallest coherent change.

### Step 5

Run type checking.

### Step 6

Run linting.

### Step 7

Run relevant tests.

### Step 8

Inspect the resulting UI.

### Step 9

Fix obvious issues.

### Step 10

Summarize:

* files changed
* functionality added
* tests run
* known limitations

Do not claim tests passed if they were not actually executed.

---

# 35. DESIGN QUALITY BAR

The result must NOT look AI-generated.

Avoid:

* excessive gradients
* excessive glassmorphism
* generic purple-blue SaaS UI
* random rounded rectangles
* excessive emoji
* meaningless decorative blobs
* huge empty hero sections
* repetitive cards
* inconsistent spacing
* default browser styling

Every visual decision should serve:

* food
* discovery
* humor
* Kenyan identity
* usability

---

# 36. FINAL PRODUCT TEST

Before considering KulaKwaMacho complete, verify:

* Can a visitor understand the product within 5 seconds?
* Can they discover food without signing in?
* Can they search?
* Can they customize food?
* Can they add food to the tray?
* Can they complete a simulated order?
* Does the delivery experience feel fun?
* Are the recipes useful?
* Does the site feel distinctly Kenyan?
* Does it work on mobile?
* Does authentication work?
* Is user data protected?
* Are Supabase RLS policies enabled?
* Are there no real payment flows?
* Are there no leaked secrets?
* Does the site feel polished enough to show publicly?

If the answer to any of these is no, continue improving the implementation.
