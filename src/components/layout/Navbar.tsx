import Link from "next/link";
import { Search, User } from "lucide-react";
import { TrayIndicator } from "./TrayIndicator";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-heading text-2xl font-bold text-primary tracking-tight">
            KulaKwaMacho
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/explore" className="hover:text-primary transition-colors">
              Explore
            </Link>
            <Link href="/what-should-i-eat" className="hover:text-primary transition-colors">
              What Should I Eat?
            </Link>
            <Link href="/recipes" className="hover:text-primary transition-colors">
              Recipes
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/auth/login" className="p-2 hover:bg-muted rounded-full transition-colors" aria-label="Account">
            <User className="w-5 h-5" />
          </Link>
          <TrayIndicator />
        </div>
      </div>
    </header>
  );
}
