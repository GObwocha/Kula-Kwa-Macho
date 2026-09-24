import { getFoods } from "@/lib/data/foods";
import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";

export default async function RecipesPage() {
  const foods = await getFoods();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-4 text-brand-red">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Real Recipes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Because our delivery is entirely fictional, you might actually have to cook. Here are the secrets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food) => (
            <Link href={`/recipes/${food.slug}`} key={food.id} className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border card-hover">
              <div className="relative h-64 w-full bg-muted">
                <Image 
                  src={food.image_url} 
                  alt={food.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-brand-red transition-colors">{food.name} Recipe</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">Learn how to make the ultimate {food.name.toLowerCase()} at home.</p>
                <div className="text-brand-red font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                  Read Recipe <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
