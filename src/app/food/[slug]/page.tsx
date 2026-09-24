import { getFoodBySlug } from "@/lib/data/foods";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, Flame, Info, Heart } from "lucide-react";
import Link from "next/link";
import { AddToTrayForm } from "@/components/food/AddToTrayForm";

export default async function FoodDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const food = await getFoodBySlug(resolvedParams.slug);

  if (!food) {
    notFound();
  }

  // Generate mock customizations if they don't exist in our type yet
  const customizations = [
    {
      id: "c1",
      name: "Portion",
      type: "select",
      options: ["Regular", "Large (I am very hungry)", "Extra Large (Mistakes will be made)"],
      required: true
    },
    {
      id: "c2",
      name: "Spice Level",
      type: "select",
      options: ["No drama", "A little heat", "Bring it", "I fear nothing"],
      required: true
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative bg-muted">
        <Image 
          src={food.image_url} 
          alt={food.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container-custom -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card rounded-3xl p-8 shadow-sm border border-border">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                      {food.category}
                    </span>
                    {food.region && food.region !== 'All' && (
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {food.region}
                      </span>
                    )}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">{food.name}</h1>
                </div>
                <button className="p-3 rounded-full border border-border hover:bg-muted hover:text-brand-red transition-colors" aria-label="Favorite">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {food.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-border">
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Prep Time
                  </span>
                  <span className="font-semibold">{food.preparation_minutes} mins</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Flame className="w-4 h-4" /> Spice Level
                  </span>
                  <span className="font-semibold">{food.spice_level}/5</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Info className="w-4 h-4" /> Dietary
                  </span>
                  <span className="font-semibold">Contains joy</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground">Base Price</span>
                  <span className="font-semibold">KSh {food.price}</span>
                </div>
              </div>
            </div>

            {/* Optional Recipe CTA */}
            <div className="bg-brand-cream rounded-3xl p-8 border border-brand-yellow/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-heading text-xl font-bold mb-2">Want to make it yourself?</h3>
                <p className="text-muted-foreground text-sm max-w-md">
                  We have the actual recipe. It might not taste exactly like the one by the road, but it&apos;s close.
                </p>
              </div>
              <Link href={`/recipes/${food.slug}`} className="btn btn-outline bg-white shrink-0">
                View Recipe
              </Link>
            </div>
          </div>

          {/* Sidebar / Customization */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-3xl p-6 shadow-lg border border-border">
              <h3 className="font-heading text-2xl font-bold mb-6">Customize</h3>
              <AddToTrayForm food={food} customizations={customizations} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
