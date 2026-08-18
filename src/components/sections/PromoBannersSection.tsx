import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';

export const PromoBannersSection: React.FC = () => {
  return (
    <section id="offers" className="py-12 md:py-14 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8">
          <div>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-brand-accent uppercase font-bold">
              SEASONAL HIGHLIGHTS
            </span>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight mt-1 font-sans">
              Featured Collections & Offers
            </h2>
          </div>
          <p className="text-[10px] sm:text-xs text-brand-muted max-w-sm mt-1.5 md:mt-0">
            Handcrafted formal oxfords and high-performance carbon distance runners with exclusive seasonal pricing.
          </p>
        </div>

        {/* 50/50 Dual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          
          {/* Left Card: Formal Shoes */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[320px] md:min-h-[360px] group flex flex-col justify-end p-4 sm:p-8 text-white shadow-lg">
            
            {/* Background Image with Scale on Hover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/assets/images/formal_oxfords.jpg"
                alt="Formal Shoes Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            </div>

            {/* Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-1 bg-brand-accent text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-md">
              <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>20% OFF</span>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 space-y-1.5 sm:space-y-2.5">
              <span className="text-[9px] sm:text-xs font-mono tracking-widest text-neutral-300 uppercase">
                ATELIER DRESS FOOTWEAR
              </span>
              <h3 className="text-base sm:text-2xl font-bold tracking-tight text-white">
                Explore All Formal Shoes
              </h3>
              <p className="text-[10px] sm:text-xs text-neutral-200 max-w-md leading-relaxed">
                Goodyear-welted Oxfords and Italian leather brogues tailored for corporate distinction and formal black-tie events.
              </p>

              <div className="pt-1">
                <a
                  href="#new-arrivals"
                  className="inline-flex items-center gap-1.5 bg-white text-brand-dark px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold hover:bg-brand-accent hover:text-white transition-colors duration-300 shadow-md"
                >
                  <span>Explore Formal Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Card: Running Shoes */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[320px] md:min-h-[360px] group flex flex-col justify-end p-4 sm:p-8 text-white shadow-lg">
            
            {/* Background Image with Scale on Hover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/assets/images/running_performance_1786451632922.jpg"
                alt="Running Shoes Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            </div>

            {/* Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-1 bg-red-600 text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-md">
              <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>25% OFF</span>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 space-y-1.5 sm:space-y-2.5">
              <span className="text-[9px] sm:text-xs font-mono tracking-widest text-neutral-300 uppercase">
                CARBON MATRIX RUNNING
              </span>
              <h3 className="text-base sm:text-2xl font-bold tracking-tight text-white">
                Grub The Latest Running Shoes
              </h3>
              <p className="text-[10px] sm:text-xs text-neutral-200 max-w-md leading-relaxed">
                Unleash peak energy return with carbon plate innovation and breathable engineered knit uppers.
              </p>

              <div className="pt-1">
                <a
                  href="#new-arrivals"
                  className="inline-flex items-center gap-1.5 bg-white text-brand-dark px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold hover:bg-brand-accent hover:text-white transition-colors duration-300 shadow-md"
                >
                  <span>Shop Running Shoes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
