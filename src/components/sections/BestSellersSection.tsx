import React from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../shop/ProductCard';
import { Award } from 'lucide-react';

export const BestSellersSection: React.FC = () => {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller || p.rating >= 4.8);

  return (
    <section id="best-sellers" className="py-16 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <div className="flex items-center gap-2 text-brand-accent text-xs font-mono font-bold tracking-widest uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>CURATED SELECTION</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand-dark tracking-tight mt-1 font-sans">
              Best Sellers Showcase
            </h2>
          </div>
          <p className="text-xs text-brand-muted max-w-md mt-2 md:mt-0 leading-relaxed">
            Our most sought-after footwear silhouettes, hand-finished with premium Italian hides and precision comfort insoles.
          </p>
        </div>

        {/* Uniform 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
