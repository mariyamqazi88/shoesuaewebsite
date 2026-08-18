import React, { useState } from 'react';
import type { Product } from '../../types/ecommerce';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useQuickView } from '../../context/QuickViewContext';
import { useNavigation } from '../../context/NavigationContext';
import { Star, Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { openQuickView } = useQuickView();
  const { navigateToProduct } = useNavigation();
  
  const selectedSize = product.sizes[0] || 42;
  const [isAdded, setIsAdded] = useState(false);
  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleCardClick = () => {
    navigateToProduct(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col justify-between bg-white rounded-xl sm:rounded-2xl border border-zinc-100 p-2 sm:p-4 hover:border-zinc-300 hover:shadow-xl transition-all duration-300 w-full max-w-full overflow-hidden"
    >
      {/* Top Image Container */}
      <div
        onClick={handleCardClick}
        className="relative w-full aspect-square rounded-lg sm:rounded-xl bg-brand-card flex items-center justify-center p-2 sm:p-4 overflow-hidden cursor-pointer mb-2 sm:mb-4"
      >
        {/* Discount / Tag Badge */}
        {product.tag && (
          <span className="absolute top-2 left-2 z-10 bg-brand-dark text-white text-[8px] sm:text-[10px] font-bold px-2 py-0.5 sm:py-1 rounded-full tracking-wider uppercase shadow-sm max-w-[80%] truncate">
            {product.tag}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorite
              ? 'bg-red-500 text-white shadow-md'
              : 'bg-white/80 backdrop-blur-md text-brand-dark hover:bg-white'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openQuickView(product);
          }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 backdrop-blur-md text-brand-dark text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg flex items-center gap-1 hover:bg-brand-dark hover:text-white whitespace-nowrap"
        >
          <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="hidden sm:inline">Quick View</span>
        </button>

        {/* Centered High Quality Shoe Image Asset */}
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/images/hero_double_shoes.jpg';
          }}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Product Details Section */}
      <div className="space-y-2 sm:space-y-3 flex-1 flex flex-col justify-between w-full min-w-0">
        <div>
          {/* Category & Numerical Rating Block */}
          <div className="flex items-center justify-between text-xs mb-1 gap-1">
            <span className="font-mono text-[8px] sm:text-[10px] uppercase text-brand-muted tracking-wider truncate">
              {product.category}
            </span>

            <div className="flex items-center gap-0.5 sm:gap-1 bg-amber-50 text-amber-900 px-1.5 sm:px-2 py-0.5 rounded font-semibold text-[9px] sm:text-[11px] flex-shrink-0">
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={handleCardClick}
            className="text-xs sm:text-sm font-bold text-brand-dark cursor-pointer hover:text-brand-accent transition-colors line-clamp-1 break-words"
          >
            {product.name}
          </h3>
        </div>

        {/* Price & Add to Cart Button */}
        <div className="pt-2 border-t border-zinc-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5">
          {/* Prices */}
          <div className="min-w-0">
            <div className="flex items-baseline gap-1">
              <span className="text-xs sm:text-base font-extrabold text-brand-dark font-sans truncate">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] sm:text-xs text-zinc-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full sm:w-auto px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 transition-all duration-300 shadow-sm ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-dark text-white hover:bg-black'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="truncate">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="truncate">Add</span>
              </>
            )}
          </button>
        </div>

      </div>
    </motion.div>
  );
};
