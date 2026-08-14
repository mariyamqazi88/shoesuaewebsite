import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';

export const PromoBannersSection: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-accent uppercase">
              SEASONAL HIGHLIGHTS
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight mt-1 font-sans">
              Featured Collections & Offers
            </h2>
          </div>
          <p className="text-xs text-brand-muted max-w-sm mt-2 md:mt-0">
            Handcrafted formal oxfords and high-performance carbon distance runners with exclusive seasonal pricing.
          </p>
        </div>

        {/* 50/50 Dual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Card: Formal Shoes */}
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] md:min-h-[420px] group flex flex-col justify-end p-8 text-white shadow-lg">
            
            {/* Background Image with Scale on Hover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/assets/images/formal_oxfords.jpg"
                alt="Formal Shoes Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            </div>

            {/* Badge */}
            <div className="absolute top-6 left-6 z-10 flex items-center gap-1.5 bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              <Tag className="w-3.5 h-3.5" />
              <span>20% OFF</span>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-mono tracking-widest text-neutral-300 uppercase">
                ATELIER DRESS FOOTWEAR
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Explore All Formal Shoes
              </h3>
              <p className="text-xs text-neutral-200 max-w-md leading-relaxed">
                Goodyear-welted Oxfords and Italian leather brogues tailored for corporate distinction and formal black-tie events.
              </p>

              <div className="pt-2">
                <a
                  href="#best-sellers"
                  className="inline-flex items-center gap-2 bg-white text-brand-dark px-6 py-3 rounded-full text-xs font-bold hover:bg-brand-accent hover:text-white transition-colors duration-300 shadow-md"
                >
                  <span>Explore Formal Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Card: Running Shoes */}
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] md:min-h-[420px] group flex flex-col justify-end p-8 text-white shadow-lg">
            
            {/* Background Image with Scale on Hover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/assets/images/running_performance_1786451632922.jpg"
                alt="Running Shoes Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            </div>

            {/* Badge */}
            <div className="absolute top-6 left-6 z-10 flex items-center gap-1.5 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              <Tag className="w-3.5 h-3.5" />
              <span>25% OFF</span>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-mono tracking-widest text-neutral-300 uppercase">
                CARBON MATRIX RUNNING
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Grub The Latest Running Shoes
              </h3>
              <p className="text-xs text-neutral-200 max-w-md leading-relaxed">
                Unleash peak energy return with carbon plate innovation and breathable engineered knit uppers.
              </p>

              <div className="pt-2">
                <a
                  href="#best-sellers"
                  className="inline-flex items-center gap-2 bg-white text-brand-dark px-6 py-3 rounded-full text-xs font-bold hover:bg-brand-accent hover:text-white transition-colors duration-300 shadow-md"
                >
                  <span>Shop Running Shoes</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
