import { getFoodBySlug } from "@/lib/data/foods";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";

export default async function RecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const food = await getFoodBySlug(resolvedParams.slug);

  if (!food) {
    notFound();
  }

  // Mock recipe data since we don't have full recipes in DB yet
  const recipe = {
    servings: 4,
    prep_minutes: food.preparation_minutes,
    cook_minutes: food.preparation_minutes * 1.5,
    difficulty: "Medium",
    ingredients: [
      "2 cups of imagination",
      "1 tsp of fictional flavor",
      "Patience",
      "Actual ingredients coming soon to the database"
    ],
    instructions: [
      "Pretend to turn on the stove.",
      "Stare at the ingredients.",
      "Realize you are on a fictional delivery website.",
      "Order real food elsewhere or wait for us to update our database."
    ]
  };

  return (
    <div className="min-h-screen bg-brand-cream pb-20">
      <div className="w-full h-[50vh] relative bg-muted">
        <Image 
          src={food.image_url} 
          alt={food.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center p-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 drop-shadow-lg">
              {food.name}
            </h1>
            <p className="text-xl text-gray-200 drop-shadow-md">The Official Recipe</p>
          </div>
        </div>
      </div>

      <div className="container-custom -mt-10 relative z-10 max-w-4xl">
        <Link href="/recipes" className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md font-bold mb-8 hover:bg-muted transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Recipes
        </Link>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 mb-10 border-y border-border text-center">
            <div>
              <p className="text-muted-foreground text-sm mb-1 flex justify-center items-center gap-1"><Clock className="w-4 h-4"/> Prep time</p>
              <p className="font-bold text-xl">{recipe.prep_minutes} m</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1 flex justify-center items-center gap-1"><Flame className="w-4 h-4"/> Cook time</p>
              <p className="font-bold text-xl">{recipe.cook_minutes} m</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1 flex justify-center items-center gap-1"><Users className="w-4 h-4"/> Serves</p>
              <p className="font-bold text-xl">{recipe.servings}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1 flex justify-center items-center gap-1"><ChefHat className="w-4 h-4"/> Difficulty</p>
              <p className="font-bold text-xl">{recipe.difficulty}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="font-heading text-2xl font-bold mb-6">Ingredients</h3>
              <ul className="space-y-4">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-heading text-2xl font-bold mb-6">Instructions</h3>
              <div className="space-y-8">
                {recipe.instructions.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-cream text-brand-red font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <p className="pt-1 text-lg leading-relaxed text-foreground/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Temporary icon component since Flame isn't imported from lucide-react in the above file
function Flame(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}
