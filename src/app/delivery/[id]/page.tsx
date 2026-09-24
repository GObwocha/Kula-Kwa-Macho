"use client";

import { useEffect, useState, use } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, MapPin, Bike, Search, PackageCheck } from "lucide-react";
import confetti from "canvas-confetti";

type DeliveryStatus = "confirmed" | "preparing" | "picked_up" | "in_transit" | "nearby" | "delivered";

const STATUS_MESSAGES: Record<DeliveryStatus, string> = {
  confirmed: "Kitchen received the imaginary order.",
  preparing: "Warming up the fictional jiko.",
  picked_up: "Rider has left the kitchen.",
  in_transit: "Rider is negotiating Nairobi traffic.",
  nearby: "Rider is asking for directions. Again.",
  delivered: "Delivered to your imagination!"
};

const STATUS_PROGRESS: Record<DeliveryStatus, number> = {
  confirmed: 10,
  preparing: 25,
  picked_up: 50,
  in_transit: 75,
  nearby: 90,
  delivered: 100
};

export default function DeliveryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();
  const riderType = searchParams.get("rider") || "boda-bob";
  
  const [status, setStatus] = useState<DeliveryStatus>("confirmed");
  const [showReveal, setShowReveal] = useState(false);

  useEffect(() => {
    // Sequence of fictional events
    const timeline = [
      { status: "preparing" as DeliveryStatus, delay: 2000 },
      { status: "picked_up" as DeliveryStatus, delay: 5000 },
      { status: "in_transit" as DeliveryStatus, delay: 9000 },
      { status: "nearby" as DeliveryStatus, delay: 14000 },
      { status: "delivered" as DeliveryStatus, delay: 18000 },
    ];

    const timeouts = timeline.map(event => 
      setTimeout(() => setStatus(event.status), event.delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (status === "delivered") {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2E5C3B', '#D33F33', '#F2C94C']
      });
      
      setTimeout(() => {
        setShowReveal(true);
      }, 3000);
    }
  }, [status]);

  const getRiderInfo = () => {
    switch (riderType) {
      case "captain": return { name: "Captain Chapati", icon: "🦸" };
      case "tuktuk": return { name: "Turbo Tuk-Tuk", icon: "🛺" };
      default: return { name: "Boda Bob", icon: "🏍️" };
    }
  };

  const riderInfo = getRiderInfo();

  if (showReveal) {
    return (
      <div className="min-h-screen bg-brand-charcoal text-white flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-1000">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-brand-yellow">
          🎉 DELIVERED
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl text-gray-300 leading-relaxed">
          Your food has arrived.
          <br/><br/>
          ...
          <br/><br/>
          Actually.
          <br/>
          It hasn&apos;t.
          <br/>
          The food was never coming.
        </p>
        <p className="text-lg text-gray-400 mb-8">But you can make it yourself.</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link href="/recipes" className="btn bg-brand-red hover:bg-brand-red/90 text-white w-full py-4 text-lg">
            View Recipes
          </Link>
          <Link href="/explore" className="btn border border-gray-600 hover:bg-gray-800 w-full py-4 text-lg">
            Order Something Else
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Map Header Mock */}
      <div className="w-full h-[40vh] bg-[#e5e5e5] relative overflow-hidden flex items-center justify-center border-b border-border">
        {/* Fake Map Grid Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-3xl mb-4 animate-bounce">
            {riderInfo.icon}
          </div>
          <div className="bg-brand-charcoal text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            {STATUS_MESSAGES[status]}
          </div>
        </div>
      </div>

      <div className="container-custom -mt-8 relative z-10 max-w-3xl">
        <div className="bg-card rounded-3xl p-6 md:p-8 shadow-xl border border-border">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
            <div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">
                Order #{resolvedParams.id}
              </p>
              <h1 className="text-2xl font-heading font-bold text-foreground">
                Arriving Eventually
              </h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">ETA</p>
              <p className="text-2xl font-bold text-brand-green">
                {status === 'delivered' ? '0 min' : 'Soon™'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-10 p-4 bg-muted rounded-2xl">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">
              {riderInfo.icon}
            </div>
            <div>
              <p className="font-bold text-lg">{riderInfo.name}</p>
              <p className="text-sm text-muted-foreground">Your imaginary rider</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-2 bg-muted rounded-full mb-10 overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-brand-green transition-all duration-1000 ease-in-out"
              style={{ width: `${STATUS_PROGRESS[status]}%` }}
            />
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <TimelineItem 
              active={STATUS_PROGRESS[status] >= 10} 
              title="Order Confirmed" 
              subtitle="We've acknowledged your craving."
              icon={<PackageCheck className="w-5 h-5" />}
            />
            <TimelineItem 
              active={STATUS_PROGRESS[status] >= 25} 
              title="Preparing" 
              subtitle="The chef is looking for ingredients."
              icon={<Search className="w-5 h-5" />}
            />
            <TimelineItem 
              active={STATUS_PROGRESS[status] >= 50} 
              title="Picked Up" 
              subtitle={`${riderInfo.name} has the bag.`}
              icon={<Bike className="w-5 h-5" />}
            />
            <TimelineItem 
              active={STATUS_PROGRESS[status] >= 90} 
              title="Nearby" 
              subtitle="Waiting at the gate."
              icon={<MapPin className="w-5 h-5" />}
            />
            <TimelineItem 
              active={status === 'delivered'} 
              title="Delivered" 
              subtitle="Enjoy your meal."
              icon={<CheckCircle2 className="w-5 h-5" />}
              isLast
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ active, title, subtitle, icon, isLast = false }: { active: boolean, title: string, subtitle: string, icon: React.ReactNode, isLast?: boolean }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 ${active ? 'bg-brand-green text-white' : 'bg-muted text-muted-foreground'}`}>
          {icon}
        </div>
        {!isLast && (
          <div className={`w-0.5 h-12 transition-colors duration-500 ${active ? 'bg-brand-green' : 'bg-muted'}`} />
        )}
      </div>
      <div className={`pt-1 pb-4 transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-40'}`}>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}
