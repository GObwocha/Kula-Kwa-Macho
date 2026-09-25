import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

export default async function FavoritesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  // Fetch favorites
  const { data: favorites, error } = await supabase
    .from('favorites')
    .select(`
      id,
      foods (
        id,
        name,
        slug,
        image_url,
        category,
        price
      )
    `)
    .eq('user_id', user.id);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom max-w-6xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <h1 className="text-4xl font-heading font-bold">Your Favorites</h1>
        </div>

        {!favorites || favorites.length === 0 ? (
          <div className="bg-card border border-border rounded-3xl p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">No favorites yet</h2>
            <p className="text-muted-foreground mb-8">
              Start adding foods to your favorites to keep track of your cravings.
            </p>
            <Link href="/explore" className="btn btn-primary px-8 py-3">
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((fav: any) => {
              const food = Array.isArray(fav.foods) ? fav.foods[0] : fav.foods;
              if (!food) return null;
              return (
                <Link href={`/food/${food.slug}`} key={fav.id} className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border card-hover">
                  <div className="relative h-64 w-full bg-muted">
                    <Image 
                      src={food.image_url} 
                      alt={food.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-brand-red shadow-sm">
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-xl font-bold">{food.name}</h3>
                      <span className="font-bold whitespace-nowrap ml-4">KSh {food.price}</span>
                    </div>
                    <p className="text-sm text-brand-green font-medium uppercase tracking-wider">{food.category}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
