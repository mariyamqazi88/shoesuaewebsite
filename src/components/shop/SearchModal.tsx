import React, { useState } from 'react';
import { useQuickView } from '../../context/QuickViewContext';
import { useNavigation } from '../../context/NavigationContext';
import { PRODUCTS } from '../../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useQuickView();
  const { navigateToProduct } = useNavigation();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const results = query.trim() === ''
    ? PRODUCTS.slice(0, 4)
    : PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSearchOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          className="relative z-10 w-full max-w-2xl bg-white text-brand-dark rounded-3xl p-6 shadow-2xl space-y-6 overflow-hidden border border-zinc-100"
        >
          {/* Input Header */}
          <div className="flex items-center gap-3 border-b border-zinc-200 pb-4">
            <Search className="w-5 h-5 text-brand-accent flex-shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search footwear by model, category (e.g. Oxford, Sneaker, Boot)..."
              className="w-full text-sm sm:text-base font-medium text-brand-dark placeholder-zinc-400 focus:outline-none bg-transparent"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 text-zinc-400 hover:text-black rounded-full hover:bg-zinc-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Area */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-brand-muted font-mono">
              <span>{query ? `SEARCH RESULTS (${results.length})` : 'TRENDING SILHOUETTES'}</span>
              <span>{query ? 'LIVE FILTER' : 'CURATED'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
              {results.length === 0 ? (
                <div className="col-span-2 text-center py-8 text-xs text-zinc-400">
                  No footwear matched "{query}". Try searching for Oxford, Sneaker, or Boot.
                </div>
              ) : (
                results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigateToProduct(product);
                    }}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-brand-accent cursor-pointer transition-all duration-200 group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 rounded-xl object-cover bg-white"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono text-brand-accent uppercase block">
                        {product.category}
                      </span>
                      <h4 className="text-xs font-bold text-brand-dark truncate group-hover:text-brand-accent transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs font-extrabold text-brand-dark pt-0.5">
                        ${product.price} <span className="text-[10px] text-zinc-400 font-normal">~ AED {Math.round(product.price * 3.67)}</span>
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 group-hover:text-brand-dark transition-all" />
                  </div>
                ))
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
