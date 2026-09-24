import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card mt-auto">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">KulaKwaMacho</h3>
            <p className="text-muted-foreground max-w-sm">
              Kenyan food, questionable decisions, and absolutely no delivery fee. 
              The ultimate imaginary culinary experience.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Discover</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/explore" className="hover:text-primary transition-colors">All Food</Link></li>
              <li><Link href="/what-should-i-eat" className="hover:text-primary transition-colors">What Should I Eat?</Link></li>
              <li><Link href="/recipes" className="hover:text-primary transition-colors">Recipes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal (Sort of)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><span className="cursor-help" title="It's all fake anyway">Terms of Service</span></li>
              <li><span className="cursor-help" title="We don't collect anything real">Privacy</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KulaKwaMacho. Not a real restaurant.</p>
          <p>Made with cravings.</p>
        </div>
      </div>
    </footer>
  );
}
