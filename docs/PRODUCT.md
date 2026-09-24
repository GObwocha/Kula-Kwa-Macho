# KulaKwaMacho — Product Specification

> **Eat with your eyes.**

## 1. Product Overview

KulaKwaMacho is an interactive Kenyan food discovery platform.

It is not a restaurant marketplace and does not process real food orders.

Instead, it turns the emotional journey of ordering food into an entertaining digital experience.

The user discovers food, becomes curious, builds a fictional order, follows a fictional delivery, and eventually discovers recipes and food information they can use in real life.

### Core Product Loop

```text
DISCOVER
    ↓
CRAVE
    ↓
CHOOSE
    ↓
CUSTOMIZE
    ↓
ADD TO TRAY
    ↓
CHECKOUT
    ↓
TRACK RIDER
    ↓
DELIVERY
    ↓
SURPRISE
    ↓
DISCOVER THE RECIPE
```

The product should feel addictive in a positive, playful way.

---

# 2. Target Users

## Primary

Young Kenyans and people interested in Kenyan food who:

* enjoy food content
* discover food through social media
* like interactive websites
* enjoy humor
* enjoy visually appealing experiences
* want ideas about what to eat

## Secondary

People outside Kenya who want to:

* discover Kenyan cuisine
* learn about Kenyan dishes
* find recipes
* understand different food categories

---

# 3. Product Personality

KulaKwaMacho should feel:

* playful
* witty
* warm
* Kenyan
* visually rich
* slightly chaotic
* premium
* modern
* internet-native

It should NOT feel:

* corporate
* institutional
* like a restaurant ERP
* like a generic AI-generated website
* like a conventional e-commerce store

---

# 4. Information Architecture

Primary routes:

```text
/
├── /explore
├── /food/[slug]
├── /tray
├── /checkout
├── /delivery/[id]
├── /what-should-i-eat
├── /recipes
├── /recipes/[slug]
├── /favorites
├── /history
├── /profile
├── /auth
│   ├── /login
│   ├── /signup
│   └── /callback
└── /about
```

Potential future routes:

```text
/collections/[slug]
/regions/[slug]
/badges
/search
/admin
```

Do not implement future routes until they are required.

---

# 5. Homepage

## Purpose

The homepage should immediately make the visitor curious enough to interact.

Within approximately five seconds, the user should understand:

> "This is a fun Kenyan food website where I can discover something delicious."

---

## Hero

The hero should contain:

* strong headline
* concise supporting copy
* primary CTA
* secondary CTA
* visually dominant food imagery

Example direction:

### Headline

> What are you craving?

### Supporting copy

> Kenyan food, questionable decisions, and absolutely no delivery fee.

### Primary CTA

> Start craving

### Secondary CTA

> Surprise me

Do not treat this copy as immutable.

Gemini may improve it while preserving the tone.

---

# 6. Homepage Sections

Recommended order:

```text
Hero
↓
Featured Foods
↓
"What Are You Craving?"
↓
Trending Foods
↓
Kenyan Food Discovery
↓
How KulaKwaMacho Works
↓
Recipes
↓
Final CTA
↓
Footer
```

---

# 7. Explore Page

Route:

```text
/explore
```

Purpose:

Give users a searchable food catalogue.

Features:

* search
* category filter
* region filter
* dietary filter
* spice filter
* price sorting
* popularity sorting
* trending filter
* featured filter

Possible categories:

```text
All
Main Dishes
Street Food
Breakfast
Snacks
Sides
Drinks
Desserts
```

---

# 8. Search

Search should support:

* food name
* ingredients
* category
* region
* description

Examples:

```text
nyama
chapati
spicy
coast
breakfast
chicken
```

Search should provide useful empty states.

Example:

> Nothing matched that craving.

Then offer:

> Surprise me

---

# 9. Food Detail

Route:

```text
/food/[slug]
```

Example:

```text
/food/nyama-choma
```

The page should contain:

### Hero

* large food image
* food name
* short description
* price
* category
* rating/popularity indicator if implemented

### Food information

* preparation time
* spice level
* serving size
* dietary tags
* ingredients

### Customization

Examples:

```text
Portion
Small / Regular / Large

Spice
Mild / Medium / Hot / Dangerous

Side
Ugali / Chips / Kachumbari / None
```

### Actions

Primary:

> Add to tray

Secondary:

> Save

Additional:

> View recipe

---

# 10. Food Data

Each food should have a structured record.

Required:

```text
id
name
slug
description
short_description
category
region
image
price
preparation_time
spice_level
ingredients
featured
trending
popularity_score
```

Optional:

```text
gallery
dietary_tags
allergens
recipe
story
serving_size
```

---

# 11. Kenyan Food Catalogue

Initial catalogue should contain at least 40–60 foods.

### Main Dishes

Examples:

* Nyama Choma
* Pilau
* Mukimo
* Githeri
* Ugali & Sukuma Wiki
* Beef Stew
* Chicken Kienyeji
* Matoke
* Wali wa Nazi
* Samaki wa Kupaka
* Fish & Ugali
* Irio
* Rice & Beans
* Beef Wet Fry
* Chicken Wet Fry

### Street Food

Examples:

* Mutura
* Smokie
* Boiled Eggs
* Smokie Pasua
* Samosa
* Bhajia
* Viazi Karai
* Roasted Maize
* Cassava
* Chips Mwitu

### Breakfast

Examples:

* Mandazi
* Chapati
* Uji
* Tea & Mandazi
* Eggs & Toast
* Nduma
* Arrow Roots

### Drinks

Examples:

* Kenyan Chai
* Dawa
* Tamarind Juice
* Passion Juice
* Mango Juice
* Sugarcane Juice
* Mala

Do not make this list exhaustive.

---

# 12. The Tray

Route:

```text
/tray
```

The cart should be called:

> Tray

This is part of the product identity.

The tray must work for anonymous users.

Persist anonymous tray data in local storage or another appropriate client-side mechanism.

---

## Tray UI

Display:

```text
Food
Quantity
Customization
Price
Remove
```

Summary:

```text
Subtotal
Imaginary delivery
Imaginary discount
Total
```

Example:

```text
Your Tray

2 × Nyama Choma
1 × Ugali
1 × Kachumbari

Subtotal             KSh 1,250
Delivery             KSh 0
Dopamine             Priceless

TOTAL                KSh 1,250*
```

Footnote:

> *No actual money will leave your account. Obviously.

````

---

# 13. Checkout

Route:

```text
/checkout
````

Checkout is fictional.

The interface must explicitly communicate:

> No real payment will be processed.

Do NOT request:

* card numbers
* CVV
* PIN
* banking credentials
* M-Pesa PIN
* other financial secrets

---

## Checkout Flow

```text
Tray
 ↓
Delivery location
 ↓
Delivery personality
 ↓
Confirm imaginary order
 ↓
Generate order
```

Optional delivery choices:

```text
Standard
Fast
"Before I Die of Hunger"
```

The delivery address can be fictional/sample data unless the product later introduces actual delivery.

---

# 14. Order Creation

When a user confirms checkout:

1. Generate a fictional order.
2. Assign a fictional rider.
3. Generate delivery events.
4. Redirect to:

```text
/delivery/[id]
```

Order states:

```text
confirmed
preparing
picked_up
in_transit
nearby
delivered
```

The system should simulate state transitions.

---

# 15. Rider System

Create a set of fictional riders.

Examples:

```text
Boda Bob
Captain Chapati
Msee wa Delivery
Turbo
The Goat
TukTuk Express
```

Each rider may have:

```text
name
avatar
vehicle
personality
speed
catchphrase
```

Do not make humor dependent on ethnicity, stereotypes, disability, gender, religion, or other protected characteristics.

---

# 16. Delivery Tracking

Route:

```text
/delivery/[id]
```

Display:

* rider
* rider avatar
* vehicle
* current status
* progress
* ETA
* timeline
* humorous status message

Example:

```text
ORDER #KUL-8472

Captain Chapati
🛵

Status:
Negotiating traffic

ETA:
7 minutes

────────────────

✓ Order confirmed
✓ Kitchen notified
✓ Rider assigned
✓ Rider has left
→ Rider is somewhere in Nairobi
○ Delivery
```

---

# 17. Delivery Timeline

Possible events:

```text
Order confirmed
Kitchen received the order
Food is being prepared
Rider assigned
Rider has left
Rider entered traffic
Rider stopped for tea
Rider asked for directions
Rider is almost there
Delivered
```

Timing should be simulated.

Do not use real GPS.

---

# 18. The Reveal

The final delivery screen is one of the most important moments in the product.

The user should initially think:

> "The food is here."

Then reveal the joke.

Example:

```text
🎉 DELIVERED

Your food has arrived.

...

...

Actually.

It hasn't.

The food was never coming.
```

Then:

> But you can make it.

Primary CTA:

```text
View Recipe
```

Secondary:

```text
Order Something Else
```

The reveal should feel charming rather than deceptive.

---

# 19. What Should I Eat?

Route:

```text
/what-should-i-eat
```

This is the recommendation experience.

The user answers a short sequence of questions.

---

## Question 1 — Hunger

```text
How hungry are you?

A little peckish
Hungry
Very hungry
I could eat the entire kitchen
```

---

## Question 2 — Food Type

```text
What are we working with?

Meat
Chicken
Fish
Vegetarian
Anything
```

---

## Question 3 — Texture

```text
What sounds good?

Crunchy
Soft
Saucy
Smoky
I don't know
```

---

## Question 4 — Spice

```text
Spice tolerance?

No drama
A little heat
Bring it
I fear nothing
```

---

## Question 5 — Mood

```text
What's the vibe?

Comfort food
Street food
Traditional
Something fancy
Surprise me
```

---

# 20. Recommendation Engine

Initial recommendation engine should be rule-based.

Do not add an LLM merely to make the feature sound intelligent.

Represent preferences as structured values.

Example:

```typescript
type CravingPreferences = {
  hunger: "low" | "medium" | "high" | "extreme";
  protein:
    | "meat"
    | "chicken"
    | "fish"
    | "vegetarian"
    | "anything";
  texture:
    | "crunchy"
    | "soft"
    | "saucy"
    | "smoky"
    | "anything";
  spice: 1 | 2 | 3 | 4;
  mood:
    | "comfort"
    | "street"
    | "traditional"
    | "fancy"
    | "surprise";
};
```

Score food candidates based on preference matches.

Return:

```text
primary recommendation
alternative recommendations
reason
```

Example:

> You're craving something smoky, filling and slightly dangerous.

> **Nyama Choma**

---

# 21. Randomizer

Allow users to skip the questionnaire.

CTA:

> Surprise me.

The system chooses a random food, weighted by:

* popularity
* diversity
* category
* previous interactions

Avoid recommending the same food repeatedly.

---

# 22. Recipes

Route:

```text
/recipes
```

Individual recipe:

```text
/recipes/[slug]
```

Recipe page:

```text
Hero image
Food name
Description
Prep time
Cook time
Servings
Difficulty
Ingredients
Instructions
Tips
Related foods
```

---

# 23. Recipe Discovery

Allow filtering by:

* meal type
* cooking time
* difficulty
* region
* dietary preference

Example:

```text
Quick meals
Under 30 minutes
Vegetarian
Street food
Coastal
Breakfast
```

---

# 24. Favorites

Authenticated users can favorite foods.

Route:

```text
/favorites
```

Users should see:

* favorite foods
* favorite recipes
* recently viewed foods

Anonymous users should still be able to temporarily favorite items locally if practical.

---

# 25. Authentication

Authentication should NOT be required for browsing.

Anonymous:

```text
Browse
Search
Recommendations
Tray
Fake checkout
Delivery simulation
Recipes
```

Authenticated:

```text
Favorites
History
Preferences
Badges
Persistent profile
```

Authentication options may include:

* email/password
* Google

Use Supabase Auth.

Use secure cookie-based sessions through the current Supabase SSR approach.

---

# 26. Profile

Route:

```text
/profile
```

Display:

```text
Avatar
Name
Favorite foods
Cravings
Order history
Badges
Stats
```

Possible stats:

```text
Foods discovered
Imaginary orders
Recipes viewed
Favorite category
Craving streak
```

Do not create fake financial statistics.

---

# 27. Gamification

Gamification should be lightweight.

Possible badges:

```text
Chapati Connoisseur
Nyama Choma Believer
Street Food Explorer
Pilau Professional
Midnight Craver
Recipe Hunter
Food Explorer
Serial Imaginary Shopper
```

Do not make gamification interfere with food discovery.

---

# 28. Order History

Authenticated users can see previous fictional orders.

Each order contains:

```text
Order ID
Date
Foods
Total
Rider
Delivery outcome
```

A previous order can be reordered into the tray.

The UI should clarify that these were simulated orders.

---

# 29. Navigation

Desktop navigation:

```text
KulaKwaMacho

Explore
What Should I Eat?
Recipes
About

[Tray]
[Profile]
```

Mobile:

Use a compact header and/or bottom navigation.

Prioritize:

```text
Explore
Cravings
Tray
Profile
```

---

# 30. Footer

Include:

* KulaKwaMacho
* Explore
* Recipes
* About
* GitHub
* privacy
* terms
* disclaimer

Footer disclaimer:

> KulaKwaMacho is an entertainment and food-discovery platform. It does not process real food orders or payments.

---

# 31. About Page

Explain:

* what KulaKwaMacho is
* why it exists
* Kenyan food inspiration
* the fictional delivery concept
* recipe discovery
* technology

Do not make unsupported claims about Kenyan culinary history.

---

# 32. Responsive Experience

Mobile is a first-class experience.

At minimum support:

```text
320px
360px
390px
412px
768px
1024px
1280px
1440px
```

The tray should remain easy to access on mobile.

Food imagery should remain prominent.

Avoid tiny text.

---

# 33. Performance

Prioritize:

* server rendering where appropriate
* optimized images
* lazy loading
* database pagination
* minimal client JavaScript
* efficient Supabase queries

Do not download the entire food catalogue to the client.

---

# 34. SEO

Indexable pages:

```text
/
 /explore
 /food/*
 /recipes
 /recipes/*
 /about
```

Potentially noindex:

```text
/checkout
/delivery/*
/profile
/favorites
/history
/auth/*
```

Food pages should have unique metadata.

Example:

```text
Title:
Nyama Choma — Kenyan Food | KulaKwaMacho

Description:
Discover nyama choma, customize your imaginary order and explore the recipe on KulaKwaMacho.
```

---

# 35. Analytics

If analytics are added, track product interactions rather than unnecessary personal information.

Useful events:

```text
food_viewed
food_added_to_tray
food_removed_from_tray
recommendation_started
recommendation_completed
recommendation_rerolled
checkout_started
fake_order_created
delivery_completed
recipe_viewed
favorite_added
```

Avoid collecting unnecessary sensitive information.

---

# 36. Error States

Every major experience needs a useful error state.

Examples:

### Food unavailable

> That dish disappeared faster than hot chapati.

### Search failure

> The kitchen couldn't find what you were looking for.

### Recommendation failure

> The craving machine malfunctioned. Try again.

### Database failure

Show friendly UI while logging the technical error for developers.

---

# 37. Empty States

Examples:

### Empty tray

> Your tray is looking suspiciously empty.

CTA:

> Find something delicious

### No favorites

> You haven't fallen in love with any food yet.

CTA:

> Explore food

### No history

> No imaginary orders yet.

CTA:

> Place one

---

# 38. Core User Journey

The primary journey must work flawlessly:

```text
/
 ↓
Explore
 ↓
Food Card
 ↓
Food Detail
 ↓
Customize
 ↓
Add to Tray
 ↓
Tray
 ↓
Checkout
 ↓
Confirm Imaginary Order
 ↓
Delivery Tracker
 ↓
Delivery Reveal
 ↓
Recipe
 ↓
Explore More
```

This is the main product loop.

---

# 39. Secondary User Journey

Recommendation flow:

```text
/
 ↓
What Should I Eat?
 ↓
Questions
 ↓
Recommendation
 ↓
Food Detail
 ↓
Add to Tray
```

---

# 40. Third User Journey

Recipe flow:

```text
/
 ↓
Recipes
 ↓
Recipe
 ↓
Ingredients
 ↓
Instructions
 ↓
Related Food
 ↓
Food Detail
```

---

# 41. Definition of Product Completion

KulaKwaMacho's MVP is complete when a visitor can:

* discover Kenyan food
* search food
* filter food
* view a food
* customize it
* add it to a tray
* complete a fictional checkout
* track a fictional rider
* experience the delivery reveal
* view a recipe
* use the recommendation engine
* use the randomizer
* use the platform on mobile

Authentication and persistent personalization can follow after the core loop is polished.

---

# 42. Priority

When deciding what to build first:

### P0 — Essential

```text
Homepage
Explore
Food detail
Tray
Fake checkout
Delivery simulation
Recipe
Recommendation engine
Responsive design
```

### P1 — Important

```text
Authentication
Favorites
Profile
History
Search
Filters
```

### P2 — Enhancement

```text
Badges
Streaks
Advanced personalization
Food map
Collections
Social sharing
Analytics dashboard
```

Never let P2 features delay the core product experience.

---

# 43. Product North Star

The most important question during development is:

> **Does this make someone want to keep exploring Kenyan food?**

If a feature does not improve:

* discovery
* craving
* interaction
* food knowledge
* entertainment

question whether it belongs in the MVP.
