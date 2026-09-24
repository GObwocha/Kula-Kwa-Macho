"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useTray } from "../tray/TrayProvider";
import { useEffect, useState } from "react";

export function TrayIndicator() {
  const { itemCount } = useTray();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <Link href="/tray" className="p-2 hover:bg-muted rounded-full transition-colors relative" aria-label="Tray">
      <ShoppingBag className="w-5 h-5" />
      {mounted && itemCount > 0 && (
        <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-brand-red text-[10px] font-bold text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
