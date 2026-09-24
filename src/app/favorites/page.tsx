import Link from "next/link";
import { Heart, Clock, User } from "lucide-react";

export default function GenericPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
        <User className="w-10 h-10 text-muted-foreground" />
      </div>
      <h2 className="text-3xl font-heading font-bold mb-4">Authentication Required</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        This feature requires an account. Sign in to track your imaginary history, save favorites, and earn badges.
      </p>
      <Link href="/auth/login" className="btn btn-primary px-8 py-4">
        Sign In
      </Link>
    </div>
  );
}
