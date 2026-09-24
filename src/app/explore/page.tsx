import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";
import { getFoods } from "@/lib/data/foods";

export default async function ExplorePage() {
  const foods = await getFoods();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-heading font-bold text-foreground">Explore</h1>
            <p className="text-muted-foreground mt-2">Find your next imaginary meal.</p>
          </div>
          <div className="flex w-full md:w-auto items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search cravings..." 
                className="w-full pl-9 pr-4 py-2 rounded-full border border-border bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <button className="p-2 border border-border rounded-full hover:bg-muted transition-colors" aria-label="Filters">
              <SlidersHorizontal className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Categories (Static for now) */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide">
          <button className="px-6 py-2 rounded-full bg-brand-charcoal text-white font-medium whitespace-nowrap">All</button>
          <button className="px-6 py-2 rounded-full bg-white border border-border hover:border-primary font-medium whitespace-nowrap transition-colors">Main Dishes</button>
          <button className="px-6 py-2 rounded-full bg-white border border-border hover:border-primary font-medium whitespace-nowrap transition-colors">Street Food</button>
          <button className="px-6 py-2 rounded-full bg-white border border-border hover:border-primary font-medium whitespace-nowrap transition-colors">Breakfast</button>
          <button className="px-6 py-2 rounded-full bg-white border border-border hover:border-primary font-medium whitespace-nowrap transition-colors">Drinks</button>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {foods.map((food) => (
            <Link href={`/food/${food.slug}`} key={food.id} className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border card-hover">
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image 
                  src={food.image_url} 
                  alt={food.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {food.trending && (
                  <div className="absolute top-3 left-3 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Trending
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="text-xs font-medium text-brand-green mb-1">{food.category}</div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{food.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {food.short_description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-lg">KSh {food.price.toLocaleString()}</span>
                  <button className="text-sm font-bold text-brand-red hover:bg-brand-red/10 px-3 py-1 rounded-full transition-colors">
                    Add +
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
