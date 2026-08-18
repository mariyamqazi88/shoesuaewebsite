import React from 'react';
import { ArrowRight, Truck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="hidden sm:flex bg-brand-dark text-white text-xs py-2 px-4 justify-between items-center overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden sm:flex items-center gap-2 text-neutral-400 text-[11px]">
          <Truck className="w-3.5 h-3.5 text-brand-accent" />
          <span>Complimentary Shipping in UAE for orders over $200</span>
        </div>
        <div className="mx-auto sm:mx-0 flex items-center gap-2 text-[11px]">
          <span className="bg-brand-accent/20 text-brand-accent px-2 py-0.5 rounded font-medium text-[10px]">
            LIMITED EDITION
          </span>
          <span>Explore the New SNIKEI Terracotta Aeroflux Collection</span>
          <a href="#best-sellers" className="underline hover:text-brand-accent transition-colors flex items-center gap-0.5 ml-1">
            Shop Collection <ArrowRight className="w-3 h-3" />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[11px] text-neutral-400">
          <span>AED / USD</span>
          <span>Need Help? +971 4 800 SHOES</span>
        </div>
      </div>
    </div>
  );
};
