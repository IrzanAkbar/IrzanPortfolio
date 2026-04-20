"use client";

import { motion } from "framer-motion";

export default function DepthGauge() {
  const points = [
    { label: "000M", active: true },
    { label: "250M", active: false },
    { label: "500M", active: false },
    { label: "750M", active: true, pulse: true },
  ];

  return (
    <div className="fixed left-6 md:left-10 top-0 bottom-0 flex flex-col justify-between py-32 z-20 pointer-events-none hidden md:flex">
      {points.map((point) => (
        <div 
          key={point.label} 
          className={`flex items-center gap-3 ${!point.active ? "opacity-50" : ""}`}
        >
          <span className={`font-mono text-[9px] ${point.active ? "text-accent" : "text-text-muted"} ${point.pulse ? "animate-pulse" : ""}`}>
            {point.label}
          </span>
          <div 
            className={`h-[1px] transition-all duration-500 ${point.active ? (point.pulse ? "w-12 bg-accent" : "w-8 bg-accent/40") : "w-4 bg-border-ocean"}`} 
          />
        </div>
      ))}
    </div>
  );
}
