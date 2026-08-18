import React, { useState } from 'react';
import { PRODUCTS } from '../../data/products';
import type { ShoeCategory } from '../../types/ecommerce';
import { ProductCard } from '../shop/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';

export const NewArrivalsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ShoeCategory>('All');

  const categories: ShoeCategory[] = ['All', 'Sneaker', 'Oxford', 'Boot', 'Loafers', 'Running'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="new-arrivals" className="py-10 md:py-12 bg-brand-surface border-b border-zinc-100">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-100 text-brand-dark text-[9px] sm:text-[11px] font-mono font-bold tracking-wider uppercase">
            <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-accent" />
            <span>EXTENDED COLLECTION</span>
          </div>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight font-sans">
            New Arrivals & Complete Catalog
          </h2>
          <p className="text-[10px] sm:text-xs text-brand-muted leading-relaxed">
            Explore our versatile range across formal dress shoes, casual street sneakers, and rugged suede Chelsea boots.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-dark text-white shadow-md scale-105'
                  : 'bg-white text-brand-dark border border-zinc-200 hover:border-zinc-400'
              }`}
            >
              {cat === 'All' ? 'All Footwear' : cat}
            </button>
          ))}
        </div>

        {/* Product Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
