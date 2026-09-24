"use client";

import { useState } from "react";
import { Food } from "@/lib/data/foods";
import { useTray } from "../tray/TrayProvider";
import { Check } from "lucide-react";

export function AddToTrayForm({
  food,
  customizations
}: {
  food: Food;
  customizations: { id: string; name: string; type: string; options: string[]; required: boolean; }[];
}) {
  const { addItem } = useTray();
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleSelect = (id: string, value: string) => {
    setSelections((prev) => ({ ...prev, [id]: value }));
  };

  const handleAdd = () => {
    addItem(food, quantity, selections);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    // Reset defaults or keep them depending on UX. Usually keep them.
  };

  const allRequiredSelected = customizations
    .filter((c) => c.required)
    .every((c) => selections[c.id]);

  return (
    <div className="space-y-6">
      {customizations.map((c) => (
        <div key={c.id}>
          <label className="block text-sm font-bold mb-2">
            {c.name} {c.required && <span className="text-brand-red">*</span>}
          </label>
          <div className="space-y-2">
            {c.options.map((opt: string) => (
              <label
                key={opt}
                className={`flex items-center p-3 border rounded-xl cursor-pointer transition-colors ${
                  selections[c.id] === opt
                    ? "border-brand-green bg-brand-green/5"
                    : "border-border hover:bg-muted"
                }`}
              >
                <input
                  type="radio"
                  name={c.id}
                  value={opt}
                  checked={selections[c.id] === opt}
                  onChange={() => handleSelect(c.id, opt)}
                  className="hidden"
                />
                <div
                  className={`w-4 h-4 rounded-full border mr-3 flex items-center justify-center ${
                    selections[c.id] === opt
                      ? "border-brand-green bg-brand-green"
                      : "border-gray-300"
                  }`}
                >
                  {selections[c.id] === opt && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="pt-4 border-t border-border">
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold text-lg">Quantity</span>
          <div className="flex items-center gap-4 bg-muted rounded-full px-4 py-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-xl font-bold text-muted-foreground hover:text-foreground"
            >
              -
            </button>
            <span className="font-bold w-4 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-xl font-bold text-muted-foreground hover:text-foreground"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleAdd}
          disabled={!allRequiredSelected || added}
          className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
            added
              ? "bg-brand-green text-white"
              : "btn-primary"
          }`}
        >
          {added ? (
            <>
              <Check className="w-5 h-5" /> Added to Tray
            </>
          ) : (
            `Add to Tray • KSh ${(food.price * quantity).toLocaleString()}`
          )}
        </button>
      </div>
    </div>
  );
}
