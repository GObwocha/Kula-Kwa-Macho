import Link from "next/link";
import Image from "next/image";
import { ArrowRight, UtensilsCrossed, Clock, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-brand-cream py-20 md:py-32 border-b border-border">
        <div className="container-custom relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-brand-charcoal leading-tight">
              What are you <span className="text-brand-red italic">craving?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Kenyan food, questionable decisions, and absolutely no delivery fee. Eat with your eyes.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/explore" className="btn btn-primary px-8 py-4 text-lg">
                Start craving
              </Link>
              <Link href="/what-should-i-eat" className="btn btn-outline bg-white px-8 py-4 text-lg">
                Surprise me
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
            <Image 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
              alt="Delicious Nyama Choma"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <span className="text-white font-heading text-3xl font-bold">Nyama Choma</span>
            </div>
          </div>
        </div>
      </section>

      {/* How KulaKwaMacho Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">How it works</h2>
            <p className="text-muted-foreground text-lg">The easiest way to not get food delivered.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-brand-cream flex items-center justify-center text-brand-red mb-2">
                <UtensilsCrossed size={40} />
              </div>
              <h3 className="text-2xl font-bold font-heading">1. Pick something</h3>
              <p className="text-muted-foreground">Browse our catalogue of irresistible Kenyan food. Let your eyes do the eating.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-brand-cream flex items-center justify-center text-brand-green mb-2">
                <Clock size={40} />
              </div>
              <h3 className="text-2xl font-bold font-heading">2. Build an order</h3>
              <p className="text-muted-foreground">Customize it. Add it to your tray. Proceed to our highly fictional checkout.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-brand-cream flex items-center justify-center text-brand-yellow mb-2">
                <Truck size={40} />
              </div>
              <h3 className="text-2xl font-bold font-heading">3. Wait for nothing</h3>
              <p className="text-muted-foreground">Follow your imaginary rider into the wild. Enjoy absolutely nothing arriving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories & Final CTA */}
      <section className="py-24 bg-brand-charcoal text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-5xl font-heading font-bold mb-6">Ready to imagine a meal?</h2>
          <p className="text-xl text-gray-400 mb-10">
            It’s fast, it’s cheap (free), and it requires zero chewing.
          </p>
          <Link href="/explore" className="btn bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow/90 px-10 py-5 text-xl font-bold">
            Explore the food <ArrowRight className="ml-2 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
}
