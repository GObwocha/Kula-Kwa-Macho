-- Insert Food Categories
INSERT INTO food_categories (id, name, slug, description) VALUES
('c1000000-0000-0000-0000-000000000000', 'Main Dishes', 'main-dishes', 'Hearty Kenyan meals'),
('c2000000-0000-0000-0000-000000000000', 'Street Food', 'street-food', 'Quick, tasty, and legendary'),
('c3000000-0000-0000-0000-000000000000', 'Breakfast', 'breakfast', 'Start your day the Kenyan way'),
('c4000000-0000-0000-0000-000000000000', 'Snacks', 'snacks', 'Perfect for the 4 PM slump'),
('c5000000-0000-0000-0000-000000000000', 'Sides', 'sides', 'Because you can''t just eat meat'),
('c6000000-0000-0000-0000-000000000000', 'Drinks', 'drinks', 'Refresh yourself'),
('c7000000-0000-0000-0000-000000000000', 'Desserts', 'desserts', 'Something sweet')
ON CONFLICT (id) DO NOTHING;

-- Insert Foods
INSERT INTO foods (id, name, slug, description, short_description, category_id, region, image_url, price, preparation_minutes, spice_level, featured, trending, popularity_score) VALUES
('f0000001-0000-0000-0000-000000000000', 'Nyama Choma', 'nyama-choma', 'Charred nyama choma, smoky at the edges, juicy in the middle, and absolutely unnecessary for someone who promised to eat light today.', 'The legendary Kenyan roasted meat.', 'c1000000-0000-0000-0000-000000000000', 'All', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', 800, 30, 1, true, true, 9.8),
('f0000002-0000-0000-0000-000000000000', 'Pilau', 'pilau', 'Spiced rice cooked in a flavorful broth with meat. So aromatic it will make your neighbors jealous.', 'Spiced, aromatic rice with meat.', 'c1000000-0000-0000-0000-000000000000', 'Coast', 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80', 450, 45, 2, true, true, 9.5),
('f0000003-0000-0000-0000-000000000000', 'Ugali & Sukuma Wiki', 'ugali-sukuma', 'The undisputed king of Kenyan dinners. Simple, filling, and gets the job done.', 'The everyday classic.', 'c1000000-0000-0000-0000-000000000000', 'All', 'https://images.unsplash.com/photo-1542367592-8849eb950fd8?w=800&q=80', 150, 20, 1, false, false, 8.5),
('f0000004-0000-0000-0000-000000000000', 'Mukimo', 'mukimo', 'Mashed potatoes with pumpkin leaves, corn, and beans. A green mountain of comfort.', 'Hearty mashed potatoes with greens and corn.', 'c1000000-0000-0000-0000-000000000000', 'Central', 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80', 300, 40, 1, false, false, 8.0),
('f0000005-0000-0000-0000-000000000000', 'Mutura', 'mutura', 'The African sausage. Best eaten at 7 PM by the roadside, under questionable lighting.', 'The legendary roadside African sausage.', 'c2000000-0000-0000-0000-000000000000', 'Nairobi', 'https://images.unsplash.com/photo-1529144415895-6aaf8be872fb?w=800&q=80', 50, 5, 2, true, true, 9.9),
('f0000006-0000-0000-0000-000000000000', 'Smokie Pasua', 'smokie-pasua', 'A smokie sliced open, filled with kachumbari. The breakfast, lunch, and dinner of champions.', 'Smokie with fresh kachumbari.', 'c2000000-0000-0000-0000-000000000000', 'All', 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80', 40, 2, 2, true, true, 9.7),
('f0000007-0000-0000-0000-000000000000', 'Mandazi', 'mandazi', 'Soft, slightly sweet, deep-fried dough. Pair with tea for maximum cultural integration.', 'Classic deep-fried sweet dough.', 'c3000000-0000-0000-0000-000000000000', 'Coast', 'https://images.unsplash.com/photo-1550461716-fcbf299a9a38?w=800&q=80', 20, 15, 1, true, false, 8.8),
('f0000008-0000-0000-0000-000000000000', 'Chapati', 'chapati', 'Soft, flaky, layered flatbread. If you can cook this well, you are ready for marriage.', 'Soft and flaky flatbread.', 'c1000000-0000-0000-0000-000000000000', 'All', 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80', 30, 30, 1, false, true, 9.6),
('f0000009-0000-0000-0000-000000000000', 'Kenyan Chai', 'kenyan-chai', 'Hot, milky, and strong. The solution to all problems, regardless of the weather.', 'Strong, milky Kenyan tea.', 'c6000000-0000-0000-0000-000000000000', 'All', 'https://images.unsplash.com/photo-1576092762791-dd9e22204427?w=800&q=80', 50, 10, 1, true, false, 9.0),
('f0000010-0000-0000-0000-000000000000', 'Bhajia', 'bhajia', 'Potato slices dipped in seasoned gram flour batter and deep-fried. Crispy perfection.', 'Spiced, batter-fried potatoes.', 'c2000000-0000-0000-0000-000000000000', 'Coast', 'https://images.unsplash.com/photo-1604152006599-47dc009695d8?w=800&q=80', 100, 15, 2, false, true, 9.2)
ON CONFLICT (id) DO NOTHING;

-- Insert Customizations
INSERT INTO food_customizations (id, food_id, name, type, options, required) VALUES
(uuid_generate_v4(), 'f0000001-0000-0000-0000-000000000000', 'Portion', 'select', '["1/4 kg", "1/2 kg", "1 kg"]', true),
(uuid_generate_v4(), 'f0000001-0000-0000-0000-000000000000', 'Side', 'select', '["Ugali", "Chips", "Mukimo", "None"]', false),
(uuid_generate_v4(), 'f0000002-0000-0000-0000-000000000000', 'Protein', 'select', '["Beef", "Chicken", "Goat"]', true),
(uuid_generate_v4(), 'f0000002-0000-0000-0000-000000000000', 'Side', 'select', '["Kachumbari", "Banana", "None"]', false),
(uuid_generate_v4(), 'f0000006-0000-0000-0000-000000000000', 'Spice Level', 'select', '["No Pilipili", "Kidogo", "Moto Sana"]', true);

-- Insert Badges
INSERT INTO badges (id, name, description, icon) VALUES
('b1000000-0000-0000-0000-000000000000', 'Chapati Connoisseur', 'You ordered chapati 5 times.', '🫓'),
('b2000000-0000-0000-0000-000000000000', 'Nyama Choma Believer', 'You respect the grill.', '🥩'),
('b3000000-0000-0000-0000-000000000000', 'Street Food Explorer', 'You ate the Mutura.', '🌭');
