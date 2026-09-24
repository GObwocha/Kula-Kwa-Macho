"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Food } from "@/lib/data/foods";

export type TrayItem = {
  id: string; // unique instance id
  food: Food;
  quantity: number;
  customizations: Record<string, string>;
  totalPrice: number;
};

type TrayContextType = {
  items: TrayItem[];
  addItem: (food: Food, quantity: number, customizations: Record<string, string>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearTray: () => void;
  subtotal: number;
  itemCount: number;
};

const TrayContext = createContext<TrayContextType | undefined>(undefined);

export function TrayProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<TrayItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("kula_tray");
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse tray", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("kula_tray", JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addItem = (food: Food, quantity: number, customizations: Record<string, string>) => {
    const newItem: TrayItem = {
      id: crypto.randomUUID(),
      food,
      quantity,
      customizations,
      totalPrice: food.price * quantity,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity, totalPrice: item.food.price * quantity };
        }
        return item;
      })
    );
  };

  const clearTray = () => {
    setItems([]);
  };

  const subtotal = items.reduce((acc, item) => acc + item.totalPrice, 0);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <TrayContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearTray,
        subtotal,
        itemCount,
      }}
    >
      {children}
    </TrayContext.Provider>
  );
}

export function useTray() {
  const context = useContext(TrayContext);
  if (context === undefined) {
    throw new Error("useTray must be used within a TrayProvider");
  }
  return context;
}
