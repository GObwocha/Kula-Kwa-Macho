# KulaKwaMacho Database Specification

## Database

Supabase PostgreSQL.

All persistent application data should live in Supabase.

---

# Tables

## profiles

```text
id UUID PRIMARY KEY REFERENCES auth.users(id)
display_name TEXT
avatar_url TEXT
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

## foods

```text
id UUID PRIMARY KEY
name TEXT NOT NULL
slug TEXT UNIQUE NOT NULL
description TEXT
short_description TEXT
category_id UUID
region TEXT
image_url TEXT
price NUMERIC
preparation_minutes INTEGER
spice_level INTEGER
featured BOOLEAN
trending BOOLEAN
popularity_score NUMERIC
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

## food_categories

```text
id UUID PRIMARY KEY
name TEXT NOT NULL
slug TEXT UNIQUE NOT NULL
description TEXT
```

---

## food_customizations

```text
id UUID PRIMARY KEY
food_id UUID REFERENCES foods(id)
name TEXT
type TEXT
options JSONB
required BOOLEAN
```

Examples:

```text
portion
protein
spice
side
sauce
```

---

## recipes

```text
id UUID PRIMARY KEY
food_id UUID REFERENCES foods(id)
servings INTEGER
prep_minutes INTEGER
cook_minutes INTEGER
difficulty TEXT
ingredients JSONB
instructions JSONB
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

---

## favorites

```text
id UUID PRIMARY KEY
user_id UUID REFERENCES auth.users(id)
food_id UUID REFERENCES foods(id)
created_at TIMESTAMPTZ

UNIQUE(user_id, food_id)
```

---

## orders

```text
id UUID PRIMARY KEY
user_id UUID REFERENCES auth.users(id) NULL
status TEXT
subtotal NUMERIC
delivery_fee NUMERIC
total NUMERIC
delivery_location TEXT
rider_name TEXT
rider_type TEXT
created_at TIMESTAMPTZ
completed_at TIMESTAMPTZ
```

For anonymous users, the order may be stored locally rather than persistently.

---

## order_items

```text
id UUID PRIMARY KEY
order_id UUID REFERENCES orders(id)
food_id UUID REFERENCES foods(id)
quantity INTEGER
unit_price NUMERIC
customizations JSONB
```

---

## order_events

```text
id UUID PRIMARY KEY
order_id UUID REFERENCES orders(id)
status TEXT
message TEXT
created_at TIMESTAMPTZ
```

---

## user_preferences

```text
user_id UUID PRIMARY KEY REFERENCES auth.users(id)
spice_level INTEGER
dietary_preferences JSONB
favorite_categories JSONB
favorite_regions JSONB
updated_at TIMESTAMPTZ
```

---

## cravings

```text
id UUID PRIMARY KEY
user_id UUID REFERENCES auth.users(id)
food_id UUID REFERENCES foods(id)
source TEXT
created_at TIMESTAMPTZ
```

---

## badges

```text
id UUID PRIMARY KEY
name TEXT
description TEXT
icon TEXT
```

---

## user_badges

```text
user_id UUID REFERENCES auth.users(id)
badge_id UUID REFERENCES badges(id)
earned_at TIMESTAMPTZ

PRIMARY KEY(user_id, badge_id)
```

---

# RLS

Enable RLS on every user-owned table.

Public catalogue data can be publicly readable.

Authenticated users may:

* read their own profile
* update their own profile
* read/write their own favorites
* read their own orders
* read/write their own preferences
* read their own cravings
* read their own badges

Never allow one user to query another user's private data.

---

# Indexes

Add indexes for:

* foods.slug
* foods.category_id
* foods.trending
* foods.featured
* foods.popularity_score
* foods.region
* favorites.user_id
* orders.user_id
* order_items.order_id
* cravings.user_id

---

# Seed Data

Create enough realistic Kenyan food records to make the application feel populated.

Do not seed only five foods.

Target an initial catalogue of at least 40–60 items.

Include multiple categories and regions.
