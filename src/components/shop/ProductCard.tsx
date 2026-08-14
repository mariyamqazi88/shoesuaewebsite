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
  
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0] || 42);
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
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-zinc-100 p-4 hover:border-zinc-300 hover:shadow-xl transition-all duration-300"
    >
      {/* Top Image Container */}
      <div
        onClick={handleCardClick}
        className="relative w-full aspect-square rounded-xl bg-brand-card flex items-center justify-center p-4 overflow-hidden cursor-pointer mb-4"
      >
        {/* Discount / Tag Badge */}
        {product.tag && (
          <span className="absolute top-3 left-3 z-10 bg-brand-dark text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase shadow-sm">
            {product.tag}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorite
              ? 'bg-red-500 text-white shadow-md'
              : 'bg-white/80 backdrop-blur-md text-brand-dark hover:bg-white'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openQuickView(product);
          }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 backdrop-blur-md text-brand-dark text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-brand-dark hover:text-white"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
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
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Numerical Rating Block */}
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-mono text-[10px] uppercase text-brand-muted tracking-wider">
              {product.category}
            </span>

            <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2 py-0.5 rounded font-semibold text-[11px]">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-zinc-400 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={handleCardClick}
            className="text-sm font-bold text-brand-dark cursor-pointer hover:text-brand-accent transition-colors line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Size Selector Quick Chips */}
          <div className="flex items-center gap-1 pt-2">
            <span className="text-[10px] text-brand-muted mr-1">EU Size:</span>
            {product.sizes.slice(0, 5).map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
                  selectedSize === size
                    ? 'border-brand-dark bg-brand-dark text-white font-bold'
                    : 'border-zinc-200 text-zinc-600 hover:border-zinc-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Add to Cart Button */}
        <div className="pt-2 border-t border-zinc-100 flex items-center justify-between gap-2">
          {/* Prices */}
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-extrabold text-brand-dark font-sans">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-zinc-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-zinc-400 font-mono block">
              ~ AED {Math.round(product.price * 3.67)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`px-3.5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 shadow-sm ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-dark text-white hover:bg-black'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>

      </div>
    </motion.div>
  );
};
