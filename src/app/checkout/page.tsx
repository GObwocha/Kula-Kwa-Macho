"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTray } from "@/components/tray/TrayProvider";
import { MapPin, User, Zap, AlertTriangle } from "lucide-react";

export default function CheckoutPage() {
  const { items, subtotal, clearTray } = useTray();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [speed, setSpeed] = useState("standard");
  const [personality, setPersonality] = useState("boda-bob");

  useEffect(() => {
    if (items.length === 0) {
      router.push("/tray");
    }
  }, [items.length, router]);

  if (items.length === 0) {
    return null;
  }

  const handleCheckout = () => {
    setIsSubmitting(true);
    // Simulate API delay for order creation
    setTimeout(() => {
      // Clear tray after fictional order
      clearTray();
      // Redirect to a random fake order ID delivery page
      const fakeOrderId = Math.random().toString(36).substring(2, 9).toUpperCase();
      router.push(`/delivery/${fakeOrderId}?rider=${personality}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8">Fictional Checkout</h1>
        
        <div className="bg-brand-red/10 border border-brand-red/20 rounded-2xl p-4 mb-8 flex items-start gap-4">
          <AlertTriangle className="text-brand-red w-6 h-6 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-brand-red">No real payment will be processed.</h3>
            <p className="text-sm text-brand-red/80">
              This is a simulation. We will not ask for your card, M-Pesa pin, or soul. 
              The food is entirely in your head.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Delivery Details */}
            <section>
              <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5" /> Delivery Location
              </h2>
              <div className="bg-card border border-border rounded-2xl p-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your location (Fake)</label>
                  <input type="text" defaultValue="Somewhere in Nairobi" className="w-full p-3 bg-muted border border-border rounded-xl outline-none" disabled />
                </div>
                <p className="text-xs text-muted-foreground">We don&apos;t need your real address because we aren&apos;t coming.</p>
              </div>
            </section>

            {/* Rider Personality */}
            <section>
              <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                <User className="w-5 h-5" /> Select Rider Personality
              </h2>
              <div className="space-y-3">
                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${personality === 'boda-bob' ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted'}`}>
                  <input type="radio" name="personality" value="boda-bob" checked={personality === 'boda-bob'} onChange={() => setPersonality('boda-bob')} className="hidden" />
                  <div className="flex-1">
                    <span className="font-bold block">Boda Bob 🏍️</span>
                    <span className="text-sm text-muted-foreground">Knows every shortcut. Takes none of them.</span>
                  </div>
                </label>
                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${personality === 'captain' ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted'}`}>
                  <input type="radio" name="personality" value="captain" checked={personality === 'captain'} onChange={() => setPersonality('captain')} className="hidden" />
                  <div className="flex-1">
                    <span className="font-bold block">Captain Chapati 🦸</span>
                    <span className="text-sm text-muted-foreground">Will defend your food with his life.</span>
                  </div>
                </label>
                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${personality === 'tuktuk' ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted'}`}>
                  <input type="radio" name="personality" value="tuktuk" checked={personality === 'tuktuk'} onChange={() => setPersonality('tuktuk')} className="hidden" />
                  <div className="flex-1">
                    <span className="font-bold block">Turbo Tuk-Tuk 🛺</span>
                    <span className="text-sm text-muted-foreground">Loud, slow, but has great music.</span>
                  </div>
                </label>
              </div>
            </section>

            {/* Delivery Speed */}
            <section>
              <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5" /> Imaginary Speed
              </h2>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setSpeed("standard")}
                  className={`px-4 py-2 rounded-full border transition-colors ${speed === 'standard' ? 'bg-foreground text-background border-foreground' : 'border-border hover:bg-muted'}`}
                >
                  Standard
                </button>
                <button 
                  onClick={() => setSpeed("fast")}
                  className={`px-4 py-2 rounded-full border transition-colors ${speed === 'fast' ? 'bg-foreground text-background border-foreground' : 'border-border hover:bg-muted'}`}
                >
                  Fast
                </button>
                <button 
                  onClick={() => setSpeed("emergency")}
                  className={`px-4 py-2 rounded-full border transition-colors ${speed === 'emergency' ? 'bg-foreground text-background border-foreground' : 'border-border hover:bg-muted'}`}
                >
                  &quot;Before I Die of Hunger&quot;
                </button>
              </div>
            </section>
          </div>

          <div>
            <div className="bg-card rounded-3xl p-6 border border-border sticky top-24">
              <h2 className="font-heading text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start text-sm">
                    <div>
                      <span className="font-medium">{item.quantity}x {item.food.name}</span>
                    </div>
                    <span className="font-medium">KSh {item.totalPrice.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 pt-4 border-t border-border mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">KSh {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-medium">KSh 0</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl font-heading text-brand-green">KSh {subtotal.toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-muted-foreground text-center mt-4">
                  By clicking confirm, you agree that you are ordering imaginary food and paying with imaginary money.
                </p>
              </div>
              
              <button 
                onClick={handleCheckout}
                disabled={isSubmitting}
                className="btn btn-primary w-full py-4 text-lg font-bold"
              >
                {isSubmitting ? "Generating Dopamine..." : "Confirm Imaginary Order"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
