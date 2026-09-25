import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { User, LogOut } from "lucide-react";
import { logout } from "../auth/actions";

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom max-w-2xl">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm text-center">
          <div className="w-24 h-24 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6 text-brand-red">
            <User className="w-10 h-10" />
          </div>
          
          <h1 className="text-3xl font-heading font-bold mb-2">Your Profile</h1>
          <p className="text-muted-foreground mb-8">{user.email}</p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Link href="/favorites" className="btn btn-primary px-6 py-2 rounded-full">
              My Favorites
            </Link>
            <Link href="/history" className="btn btn-outline px-6 py-2 rounded-full">
              Order History
            </Link>
          </div>
          
          <div className="pt-8 border-t border-border mt-8">
            <form action={logout}>
              <button className="btn btn-outline border-brand-red text-brand-red hover:bg-brand-red/10 px-8 py-3 flex items-center justify-center gap-2 mx-auto">
                <LogOut className="w-5 h-5" /> Sign Out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
