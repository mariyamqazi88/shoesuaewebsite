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
    <section id="new-arrivals" className="py-16 bg-brand-surface border-b border-zinc-100">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-brand-dark text-xs font-mono font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-brand-accent" />
            <span>EXTENDED COLLECTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight font-sans">
            New Arrivals & Full Grid
          </h2>
          <p className="text-xs text-brand-muted leading-relaxed">
            Explore our versatile range across formal dress shoes, casual street sneakers, and rugged suede Chelsea boots.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
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
