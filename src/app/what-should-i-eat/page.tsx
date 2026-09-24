"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, RefreshCcw } from "lucide-react";

// Questions for the recommendation engine
const QUESTIONS = [
  {
    id: "hunger",
    title: "How hungry are you?",
    options: [
      { label: "A little peckish", value: "low" },
      { label: "Hungry", value: "medium" },
      { label: "Very hungry", value: "high" },
      { label: "I could eat the entire kitchen", value: "extreme" }
    ]
  },
  {
    id: "type",
    title: "What are we working with?",
    options: [
      { label: "Meat", value: "meat" },
      { label: "Chicken", value: "chicken" },
      { label: "Vegetarian", value: "veg" },
      { label: "Anything", value: "any" }
    ]
  },
  {
    id: "spice",
    title: "Spice tolerance?",
    options: [
      { label: "No drama", value: "1" },
      { label: "A little heat", value: "2" },
      { label: "Bring it", value: "3" },
      { label: "I fear nothing", value: "4" }
    ]
  }
];

// Simple deterministic recommendation map (fallback data)
const getRecommendation = (answers: Record<string, string>) => {
  // Logic mock based on rules
  const { hunger, type, spice } = answers;
  
  if (type === "veg") {
    if (hunger === "high" || hunger === "extreme") return "mukimo";
    return "chapati"; // or bhajia
  }
  
  if (type === "chicken") {
    return "pilau"; // Assuming chicken pilau
  }
  
  if (spice === "3" || spice === "4") {
    return "mutura";
  }
  
  if (hunger === "extreme") {
    return "nyama-choma";
  }
  
  if (hunger === "low") {
    return "smokie-pasua";
  }

  return "ugali-sukuma";
};

// Mock data to match slugs
const RECOMMENDATION_DETAILS: Record<string, { name: string, image: string, desc: string }> = {
  "nyama-choma": { name: "Nyama Choma", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80", desc: "You are dangerously hungry. Meat is the only answer." },
  "pilau": { name: "Pilau", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80", desc: "Spiced perfection. Hits the spot every time." },
  "ugali-sukuma": { name: "Ugali & Sukuma Wiki", image: "https://images.unsplash.com/photo-1542367592-8849eb950fd8?w=800&q=80", desc: "The reliable classic. Never fails." },
  "mukimo": { name: "Mukimo", image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80", desc: "A green mountain of vegetarian comfort." },
  "mutura": { name: "Mutura", image: "https://images.unsplash.com/photo-1529144415895-6aaf8be872fb?w=800&q=80", desc: "You wanted spice and danger. Here it is." },
  "smokie-pasua": { name: "Smokie Pasua", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80", desc: "A quick bite to satisfy the peckishness." },
  "chapati": { name: "Chapati", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80", desc: "Soft, flaky, and doesn't require overthinking." }
};

export default function WhatShouldIEatPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleSelect = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      // Analyze
      setIsAnalyzing(true);
      setTimeout(() => {
        setRecommendation(getRecommendation(newAnswers));
        setIsAnalyzing(false);
      }, 2000);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  if (recommendation) {
    const recData = RECOMMENDATION_DETAILS[recommendation];
    return (
      <div className="min-h-screen bg-brand-charcoal text-white flex flex-col items-center justify-center p-6 text-center animate-in zoom-in duration-500">
        <h2 className="text-xl text-brand-yellow font-bold uppercase tracking-widest mb-4">Your Match</h2>
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">{recData.name}</h1>
        
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl mb-8 border-4 border-brand-yellow">
          <Image src={recData.image} alt={recData.name} fill className="object-cover" />
        </div>
        
        <p className="text-xl text-gray-300 max-w-lg mb-10">{recData.desc}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link href={`/food/${recommendation}`} className="btn bg-brand-red hover:bg-brand-red/90 text-white w-full py-4 text-lg">
            Give it to me <ArrowRight className="ml-2 inline" />
          </Link>
          <button onClick={reset} className="btn border border-gray-600 hover:bg-gray-800 w-full py-4 text-lg">
            <RefreshCcw className="mr-2 w-5 h-5" /> Re-roll
          </button>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 border-4 border-muted border-t-brand-red rounded-full animate-spin mb-8" />
        <h2 className="text-3xl font-heading font-bold mb-2">Consulting the ancestors...</h2>
        <p className="text-muted-foreground">Finding the perfect Kenyan dish for your current mood.</p>
      </div>
    );
  }

  const question = QUESTIONS[currentStep];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border text-center">
        <div className="flex justify-center gap-2 mb-8">
          {QUESTIONS.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${i === currentStep ? 'w-8 bg-brand-red' : i < currentStep ? 'w-4 bg-brand-green' : 'w-4 bg-muted'}`} 
            />
          ))}
        </div>
        
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-10">{question.title}</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {question.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSelect(question.id, opt.value)}
              className="p-6 text-lg font-medium border-2 border-border rounded-2xl hover:border-brand-red hover:bg-brand-red/5 transition-all card-hover"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
