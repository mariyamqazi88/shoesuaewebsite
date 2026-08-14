import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../shop/ProductCard';
import { Zap, ArrowRight } from 'lucide-react';

export const SlidingProductShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-brand-surface to-white border-b border-zinc-100 overflow-hidden relative">
      
      {/* Top Banner Header */}
      <div className="container mx-auto px-4 md:px-8 mb-8 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 text-brand-accent text-xs font-mono font-bold tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>CONTINUOUS SLIDE SHOWCASE</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-dark tracking-tight mt-1 font-sans">
            Trending Silhouettes In Motion
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-brand-muted">
          <span>Continuous Live Collection</span>
          <ArrowRight className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
        </div>
      </div>

      {/* Infinite Horizontal Sliding Motion Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 35,
            ease: 'linear',
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...PRODUCTS, ...PRODUCTS].map((product, index) => (
            <div key={`${product.id}-${index}`} className="w-[280px] sm:w-[320px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};
