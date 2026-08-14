import React, { useState } from 'react';
import { useQuickView } from '../../context/QuickViewContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useNavigation } from '../../context/NavigationContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck, Check, Plus, Minus, ArrowRight } from 'lucide-react';

export const ProductQuickViewModal: React.FC = () => {
  const { selectedProduct, closeQuickView } = useQuickView();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { navigateToProduct } = useNavigation();

  const [selectedSize, setSelectedSize] = useState<number>(42);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!selectedProduct) return null;

  const currentSize = selectedSize || selectedProduct.sizes[0] || 42;
  const currentColor = selectedColor || (selectedProduct.colors[0] ? selectedProduct.colors[0].name : 'Default');
  const isFavorite = isInWishlist(selectedProduct.id);

  const handleAddToCart = () => {
    addToCart(selectedProduct, currentSize, currentColor, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      closeQuickView();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuickView}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl bg-white text-brand-dark rounded-3xl overflow-hidden shadow-2xl my-auto grid grid-cols-1 md:grid-cols-2"
        >
          {/* Close Button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-brand-dark hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image Asset Display */}
          <div className="bg-brand-card p-6 md:p-8 flex items-center justify-center relative">
            {selectedProduct.tag && (
              <span className="absolute top-6 left-6 z-10 bg-brand-dark text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedProduct.tag}
              </span>
            )}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full max-h-[380px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Column: Product Meta & Controls */}
          <div className="p-6 md:p-8 space-y-6 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
            <div className="space-y-4">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] uppercase tracking-widest text-brand-accent font-bold">
                  {selectedProduct.category} COLLECTION
                </span>
                <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-0.5 rounded-full font-bold text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{selectedProduct.rating}</span>
                  <span className="text-zinc-400">({selectedProduct.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-extrabold text-brand-dark tracking-tight font-sans">
                {selectedProduct.name}
              </h2>

              {/* Prices */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-extrabold text-brand-dark">
                  ${selectedProduct.price}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-sm text-zinc-400 line-through">
                    ${selectedProduct.originalPrice}
                  </span>
                )}
                <span className="text-xs text-brand-muted font-mono ml-auto">
                  ~ AED {Math.round(selectedProduct.price * 3.67)}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-brand-muted leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Color Options */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-dark block">
                  Select Color: <span className="text-zinc-500 font-normal">{currentColor}</span>
                </label>
                <div className="flex items-center gap-2">
                  {selectedProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                        currentColor === c.name ? 'border-brand-dark scale-110' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {currentColor === c.name && (
                        <span className={`w-2 h-2 rounded-full ${c.hex === '#FFFFFF' ? 'bg-black' : 'bg-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-brand-dark">
                    Select EU Size: <span className="text-brand-accent">{currentSize}</span>
                  </label>
                  <span className="text-[10px] text-zinc-400 underline cursor-pointer">Size Guide</span>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {selectedProduct.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                        currentSize === sz
                          ? 'border-brand-dark bg-brand-dark text-white'
                          : 'border-zinc-200 text-zinc-700 hover:border-zinc-400'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-1.5 pt-2 border-t border-zinc-100">
                <span className="text-xs font-bold text-brand-dark block">Key Features</span>
                <ul className="grid grid-cols-2 gap-1.5 text-[11px] text-brand-muted">
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-zinc-100 space-y-3">
              <div className="flex items-center gap-3">
                
                {/* Quantity Control */}
                <div className="flex items-center gap-3 border border-zinc-200 rounded-full px-3 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-zinc-500 hover:text-black"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-zinc-500 hover:text-black"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                    isAdded ? 'bg-emerald-600 text-white' : 'bg-brand-dark text-white hover:bg-black'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added To Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add To Cart — ${selectedProduct.price * quantity}</span>
                    </>
                  )}
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(selectedProduct)}
                  className={`p-3.5 rounded-full border transition-all ${
                    isFavorite
                      ? 'border-red-500 bg-red-50 text-red-600'
                      : 'border-zinc-200 text-zinc-600 hover:border-zinc-400'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* View Full Page Trigger */}
              <button
                onClick={() => {
                  const prod = selectedProduct;
                  closeQuickView();
                  navigateToProduct(prod);
                }}
                className="w-full py-2.5 rounded-full border border-zinc-200 text-brand-dark text-xs font-semibold hover:border-brand-dark hover:bg-zinc-50 transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Full Details Page</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-accent" />
              </button>

              {/* Guarantees */}
              <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-brand-accent" />
                  <span>24h Express Dispatch in UAE</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                  <span>2-Year Authenticity Warranty</span>
                </span>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
