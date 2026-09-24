-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: profiles
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: food_categories
CREATE TABLE food_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT
);

-- Table: foods
CREATE TABLE foods (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    short_description TEXT,
    category_id UUID REFERENCES food_categories(id) ON DELETE SET NULL,
    region TEXT,
    image_url TEXT,
    price NUMERIC NOT NULL DEFAULT 0,
    preparation_minutes INTEGER,
    spice_level INTEGER,
    featured BOOLEAN DEFAULT false,
    trending BOOLEAN DEFAULT false,
    popularity_score NUMERIC DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: food_customizations
CREATE TABLE food_customizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    food_id UUID REFERENCES foods(id) ON DELETE CASCADE,
    name TEXT,
    type TEXT,
    options JSONB,
    required BOOLEAN DEFAULT false
);

-- Table: recipes
CREATE TABLE recipes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    food_id UUID REFERENCES foods(id) ON DELETE CASCADE,
    servings INTEGER,
    prep_minutes INTEGER,
    cook_minutes INTEGER,
    difficulty TEXT,
    ingredients JSONB,
    instructions JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: favorites
CREATE TABLE favorites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    food_id UUID REFERENCES foods(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, food_id)
);

-- Table: orders
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NULL,
    status TEXT,
    subtotal NUMERIC,
    delivery_fee NUMERIC,
    total NUMERIC,
    delivery_location TEXT,
    rider_name TEXT,
    rider_type TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

-- Table: order_items
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    food_id UUID REFERENCES foods(id) ON DELETE SET NULL,
    quantity INTEGER,
    unit_price NUMERIC,
    customizations JSONB
);

-- Table: order_events
CREATE TABLE order_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    status TEXT,
    message TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: user_preferences
CREATE TABLE user_preferences (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    spice_level INTEGER,
    dietary_preferences JSONB,
    favorite_categories JSONB,
    favorite_regions JSONB,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: cravings
CREATE TABLE cravings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    food_id UUID REFERENCES foods(id) ON DELETE CASCADE,
    source TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: badges
CREATE TABLE badges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT,
    description TEXT,
    icon TEXT
);

-- Table: user_badges
CREATE TABLE user_badges (
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    badge_id UUID REFERENCES badges(id) ON DELETE CASCADE,
    earned_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY(user_id, badge_id)
);

-- Indexes
CREATE INDEX idx_foods_slug ON foods(slug);
CREATE INDEX idx_foods_category_id ON foods(category_id);
CREATE INDEX idx_foods_trending ON foods(trending);
CREATE INDEX idx_foods_featured ON foods(featured);
CREATE INDEX idx_foods_popularity_score ON foods(popularity_score);
CREATE INDEX idx_foods_region ON foods(region);
CREATE INDEX idx_favorites_user_id ON favorites(user_id);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_cravings_user_id ON cravings(user_id);

-- RLS setup
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE foods ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_customizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE cravings ENABLE ROW LEVEL SECURITY;
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

-- Public read access policies for catalogue data
CREATE POLICY "Public profiles are viewable by everyone." ON profiles FOR SELECT USING (true);
CREATE POLICY "Public categories are viewable by everyone." ON food_categories FOR SELECT USING (true);
CREATE POLICY "Public foods are viewable by everyone." ON foods FOR SELECT USING (true);
CREATE POLICY "Public customizations are viewable by everyone." ON food_customizations FOR SELECT USING (true);
CREATE POLICY "Public recipes are viewable by everyone." ON recipes FOR SELECT USING (true);
CREATE POLICY "Public badges are viewable by everyone." ON badges FOR SELECT USING (true);

-- Authenticated user policies
CREATE POLICY "Users can insert their own profile." ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update their own profile." ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view their own favorites." ON favorites FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own favorites." ON favorites FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own favorites." ON favorites FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own orders." ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own orders." ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);
-- order_items and order_events follow the order's user_id indirectly, but RLS on them can be complex.
-- For simplicity, let's allow users to view items/events if they own the order.
CREATE POLICY "Users can view their order items." ON order_items FOR SELECT USING (
    EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
);
CREATE POLICY "Users can view their order events." ON order_events FOR SELECT USING (
    EXISTS (SELECT 1 FROM orders WHERE orders.id = order_events.order_id AND orders.user_id = auth.uid())
);
-- We also allow INSERT for order_items if the user owns the order.
CREATE POLICY "Users can insert their order items." ON order_items FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
);
CREATE POLICY "Users can insert their order events." ON order_events FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM orders WHERE orders.id = order_events.order_id AND orders.user_id = auth.uid())
);

CREATE POLICY "Users can view their own preferences." ON user_preferences FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own preferences." ON user_preferences FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own preferences." ON user_preferences FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own cravings." ON cravings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own cravings." ON cravings FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own badges." ON user_badges FOR SELECT USING (auth.uid() = user_id);
