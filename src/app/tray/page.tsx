"use client";

import Link from "next/link";
import Image from "next/image";
import { useTray } from "@/components/tray/TrayProvider";
import { Trash2, ArrowRight } from "lucide-react";

export default function TrayPage() {
  const { items, updateQuantity, removeItem, subtotal } = useTray();

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <Trash2 className="w-10 h-10 text-muted-foreground" />
        </div>
        <h2 className="text-3xl font-heading font-bold mb-4">Your tray is emptier than a campus fridge.</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Time to make some questionable decisions. Add some food to your tray and experience the thrill of an imaginary checkout.
        </p>
        <Link href="/explore" className="btn btn-primary px-8 py-4">
          Find something delicious
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-custom max-w-5xl">
        <h1 className="text-4xl font-heading font-bold mb-8">Your Tray</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-6 bg-card rounded-3xl border border-border">
                <div className="relative w-full sm:w-32 h-32 rounded-2xl overflow-hidden bg-muted shrink-0">
                  <Image 
                    src={item.food.image_url} 
                    alt={item.food.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl font-heading">{item.food.name}</h3>
                      {Object.entries(item.customizations).map(([key, val]) => (
                        <p key={key} className="text-sm text-muted-foreground">
                          {val}
                        </p>
                      ))}
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-brand-red transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4 bg-muted rounded-full px-3 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="text-lg font-bold text-muted-foreground hover:text-foreground"
                      >
                        -
                      </button>
                      <span className="font-bold w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-lg font-bold text-muted-foreground hover:text-foreground"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-lg">KSh {item.totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-3xl p-6 border border-border sticky top-24">
              <h2 className="font-heading text-xl font-bold mb-6">Summary</h2>
              
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">KSh {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Imaginary delivery</span>
                  <span className="font-medium">KSh 0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dopamine</span>
                  <span className="font-medium text-brand-green">Priceless</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl font-heading">KSh {subtotal.toLocaleString()}*</span>
                </div>
                <p className="text-[10px] text-muted-foreground">*No actual money will leave your account. Obviously.</p>
              </div>
              
              <Link href="/checkout" className="btn btn-primary w-full py-4 text-lg">
                Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
