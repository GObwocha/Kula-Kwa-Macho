import { createClient } from "../supabase/server";

export type Food = {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  category: string;
  region: string;
  image_url: string;
  price: number;
  preparation_minutes: number;
  spice_level: number;
  featured: boolean;
  trending: boolean;
  popularity_score: number;
};

// Seed-aligned mock data in case Supabase is unavailable
const MOCK_FOODS: Food[] = [
  {
    id: 'f0000001-0000-0000-0000-000000000000', 
    name: 'Nyama Choma', 
    slug: 'nyama-choma', 
    description: 'Charred nyama choma, smoky at the edges, juicy in the middle, and absolutely unnecessary for someone who promised to eat light today.', 
    short_description: 'The legendary Kenyan roasted meat.', 
    category: 'Main Dishes', 
    region: 'All', 
    image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', 
    price: 800, 
    preparation_minutes: 30, 
    spice_level: 1, 
    featured: true, 
    trending: true, 
    popularity_score: 9.8
  },
  {
    id: 'f0000002-0000-0000-0000-000000000000', 
    name: 'Pilau', 
    slug: 'pilau', 
    description: 'Spiced rice cooked in a flavorful broth with meat. So aromatic it will make your neighbors jealous.', 
    short_description: 'Spiced, aromatic rice with meat.', 
    category: 'Main Dishes', 
    region: 'Coast', 
    image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80', 
    price: 450, 
    preparation_minutes: 45, 
    spice_level: 2, 
    featured: true, 
    trending: true, 
    popularity_score: 9.5
  },
  {
    id: 'f0000003-0000-0000-0000-000000000000', 
    name: 'Ugali & Sukuma Wiki', 
    slug: 'ugali-sukuma', 
    description: 'The undisputed king of Kenyan dinners. Simple, filling, and gets the job done.', 
    short_description: 'The everyday classic.', 
    category: 'Main Dishes', 
    region: 'All', 
    image_url: 'https://images.unsplash.com/photo-1542367592-8849eb950fd8?w=800&q=80', 
    price: 150, 
    preparation_minutes: 20, 
    spice_level: 1, 
    featured: false, 
    trending: false, 
    popularity_score: 8.5
  },
  {
    id: 'f0000004-0000-0000-0000-000000000000', 
    name: 'Mukimo', 
    slug: 'mukimo', 
    description: 'Mashed potatoes with pumpkin leaves, corn, and beans. A green mountain of comfort.', 
    short_description: 'Hearty mashed potatoes with greens and corn.', 
    category: 'Main Dishes', 
    region: 'Central', 
    image_url: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80', 
    price: 300, 
    preparation_minutes: 40, 
    spice_level: 1, 
    featured: false, 
    trending: false, 
    popularity_score: 8.0
  },
  {
    id: 'f0000005-0000-0000-0000-000000000000', 
    name: 'Mutura', 
    slug: 'mutura', 
    description: 'The African sausage. Best eaten at 7 PM by the roadside, under questionable lighting.', 
    short_description: 'The legendary roadside African sausage.', 
    category: 'Street Food', 
    region: 'Nairobi', 
    image_url: 'https://images.unsplash.com/photo-1529144415895-6aaf8be872fb?w=800&q=80', 
    price: 50, 
    preparation_minutes: 5, 
    spice_level: 2, 
    featured: true, 
    trending: true, 
    popularity_score: 9.9
  },
  {
    id: 'f0000006-0000-0000-0000-000000000000', 
    name: 'Smokie Pasua', 
    slug: 'smokie-pasua', 
    description: 'A smokie sliced open, filled with kachumbari. The breakfast, lunch, and dinner of champions.', 
    short_description: 'Smokie with fresh kachumbari.', 
    category: 'Street Food', 
    region: 'All', 
    image_url: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80', 
    price: 40, 
    preparation_minutes: 2, 
    spice_level: 2, 
    featured: true, 
    trending: true, 
    popularity_score: 9.7
  },
  {
    id: 'f0000007-0000-0000-0000-000000000000', 
    name: 'Mandazi', 
    slug: 'mandazi', 
    description: 'Soft, slightly sweet, deep-fried dough. Pair with tea for maximum cultural integration.', 
    short_description: 'Classic deep-fried sweet dough.', 
    category: 'Breakfast', 
    region: 'Coast', 
    image_url: 'https://images.unsplash.com/photo-1550461716-fcbf299a9a38?w=800&q=80', 
    price: 20, 
    preparation_minutes: 15, 
    spice_level: 1, 
    featured: true, 
    trending: false, 
    popularity_score: 8.8
  },
  {
    id: 'f0000008-0000-0000-0000-000000000000', 
    name: 'Chapati', 
    slug: 'chapati', 
    description: 'Soft, flaky, layered flatbread. If you can cook this well, you are ready for marriage.', 
    short_description: 'Soft and flaky flatbread.', 
    category: 'Main Dishes', 
    region: 'All', 
    image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80', 
    price: 30, 
    preparation_minutes: 30, 
    spice_level: 1, 
    featured: false, 
    trending: true, 
    popularity_score: 9.6
  },
  {
    id: 'f0000009-0000-0000-0000-000000000000', 
    name: 'Kenyan Chai', 
    slug: 'kenyan-chai', 
    description: 'Hot, milky, and strong. The solution to all problems, regardless of the weather.', 
    short_description: 'Strong, milky Kenyan tea.', 
    category: 'Drinks', 
    region: 'All', 
    image_url: 'https://images.unsplash.com/photo-1576092762791-dd9e22204427?w=800&q=80', 
    price: 50, 
    preparation_minutes: 10, 
    spice_level: 1, 
    featured: true, 
    trending: false, 
    popularity_score: 9.0
  },
  {
    id: 'f0000010-0000-0000-0000-000000000000', 
    name: 'Bhajia', 
    slug: 'bhajia', 
    description: 'Potato slices dipped in seasoned gram flour batter and deep-fried. Crispy perfection.', 
    short_description: 'Spiced, batter-fried potatoes.', 
    category: 'Street Food', 
    region: 'Coast', 
    image_url: 'https://images.unsplash.com/photo-1604152006599-47dc009695d8?w=800&q=80', 
    price: 100, 
    preparation_minutes: 15, 
    spice_level: 2, 
    featured: false, 
    trending: true, 
    popularity_score: 9.2
  }
];

export async function getFoods(): Promise<Food[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('foods')
      .select(`
        *,
        category:food_categories(name)
      `)
      .order('popularity_score', { ascending: false });

    if (error || !data || data.length === 0) {
      console.warn("Supabase fetch failed or returned empty. Using mock data.");
      return MOCK_FOODS;
    }

    return data.map((f: Food & { category: { name: string } | null }) => ({
      ...f,
      category: f.category?.name || 'Unknown'
    }));
  } catch (error) {
    console.error("Error fetching foods:", error);
    return MOCK_FOODS;
  }
}

export async function getFoodBySlug(slug: string): Promise<Food | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('foods')
      .select(`
        *,
        category:food_categories(name)
      `)
      .eq('slug', slug)
      .single();

    if (error || !data) {
      console.warn(`Food ${slug} not found in DB. Checking mock data.`);
      return MOCK_FOODS.find(f => f.slug === slug) || null;
    }

    return {
      ...data,
      category: data.category?.name || 'Unknown'
    };
  } catch (_error) {
    return MOCK_FOODS.find(f => f.slug === slug) || null;
  }
}
