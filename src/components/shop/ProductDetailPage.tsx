import React, { useState, useEffect } from 'react';
import type { Product } from '../../types/ecommerce';
import { useNavigation } from '../../context/NavigationContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  Plus,
  Minus,
  ChevronRight,
  Zap,
  Lock,
  Share2,
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { activeProduct, navigateToHome } = useNavigation();
  const { addToCart, setIsCartOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Default to first product if none selected
  const product: Product = activeProduct || PRODUCTS[0];

  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [selectedSize, setSelectedSize] = useState<number>(product.sizes[0] || 42);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0] ? product.colors[0].name : 'Default'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'shipping'>('details');

  // Related thumbnail images gallery list
  const galleryImages = [
    product.image,
    '/assets/images/shoes1.png',
    '/assets/images/shoes2.png',
    '/assets/images/hero_double_shoes.jpg',
  ];

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setSelectedSize(product.sizes[0] || 42);
      setSelectedColor(product.colors[0] ? product.colors[0].name : 'Default');
      setQuantity(1);
    }
  }, [product]);

  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setIsCartOpen(true);
    }, 800);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsCartOpen(true);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isBestSeller)
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-brand-dark pt-4 pb-20 font-sans">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Top Breadcrumbs & Back Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-zinc-100 text-xs mb-8">
          <button
            onClick={navigateToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-brand-dark font-semibold transition-all duration-200 w-max shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-brand-accent" />
            <span>Back to Store</span>
          </button>

          <div className="flex items-center gap-2 text-brand-muted font-mono text-[11px] overflow-x-auto whitespace-nowrap">
            <span
              onClick={navigateToHome}
              className="hover:text-brand-dark cursor-pointer transition-colors"
            >
              Home
            </span>
            <ChevronRight className="w-3 h-3 text-zinc-400 flex-shrink-0" />
            <span>Footwear</span>
            <ChevronRight className="w-3 h-3 text-zinc-400 flex-shrink-0" />
            <span className="text-brand-accent font-semibold">{product.category}</span>
            <ChevronRight className="w-3 h-3 text-zinc-400 flex-shrink-0" />
            <span className="text-brand-dark font-bold truncate max-w-[180px]">
              {product.name}
            </span>
          </div>
        </div>

        {/* Main 2-Column Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Image with Zoom Effect */}
            <div className="relative aspect-square w-full rounded-3xl bg-brand-card p-6 md:p-10 flex items-center justify-center overflow-hidden border border-zinc-100 shadow-md group">
              {product.tag && (
                <span className="absolute top-6 left-6 z-10 bg-brand-dark text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {product.tag}
                </span>
              )}

              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-6 right-6 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                  isFavorite
                    ? 'bg-red-500 text-white'
                    : 'bg-white/90 backdrop-blur-md text-brand-dark hover:bg-white hover:scale-110'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>

              <motion.img
                key={selectedImage}
                initial={{ opacity: 0.7, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={selectedImage}
                alt={product.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/images/hero_double_shoes.jpg';
                }}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Gallery Thumbnails List */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-20 h-20 rounded-2xl bg-brand-card p-2 border-2 transition-all duration-200 flex-shrink-0 overflow-hidden ${
                    selectedImage === imgUrl
                      ? 'border-brand-dark scale-105 shadow-md'
                      : 'border-zinc-200 opacity-70 hover:opacity-100 hover:border-zinc-400'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </button>
              ))}
            </div>

            {/* Quick Guarantee Micro Banners */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-100 text-center text-xs">
              <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center gap-1.5">
                <Truck className="w-5 h-5 text-brand-accent" />
                <span className="font-bold text-[11px]">Free UAE Express</span>
                <span className="text-[10px] text-brand-muted">Same-day in Dubai</span>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                <span className="font-bold text-[11px]">2-Year Warranty</span>
                <span className="text-[10px] text-brand-muted">Craftsmanship guaranteed</span>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center gap-1.5">
                <RotateCcw className="w-5 h-5 text-brand-accent" />
                <span className="font-bold text-[11px]">30-Day Returns</span>
                <span className="text-[10px] text-brand-muted">Complimentary pickup</span>
              </div>
            </div>

          </div>

          {/* Right Column: Product Meta & Purchase Options */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header Badge & Title */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">
                  SHO.ESUAE ATELIER • {product.category}
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">
                  IN STOCK (DUBAI WAREHOUSE)
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark font-sans leading-tight">
                {product.name}
              </h1>

              {/* Rating & Social Share */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-3 py-1 rounded-full font-bold text-xs">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-zinc-400">({product.reviewsCount} verified reviews)</span>
                  </div>
                </div>

                <button className="text-xs text-brand-muted hover:text-brand-dark flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Price Showcase */}
            <div className="p-5 rounded-2xl bg-brand-surface border border-zinc-100 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-brand-muted block uppercase font-mono tracking-wider">
                  Price
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl font-extrabold text-brand-dark font-sans">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-zinc-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.discountPercentage && (
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      -{product.discountPercentage}%
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm font-bold text-neutral-800 font-mono block">
                  ~ AED {Math.round(product.price * 3.67)}
                </span>
                <span className="text-[10px] text-zinc-400 block">Inclusive of UAE VAT</span>
              </div>
            </div>

            {/* Description Summary */}
            <p className="text-xs text-brand-muted leading-relaxed">
              {product.description}
            </p>

            {/* Color Swatches */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-brand-dark flex justify-between">
                <span>Color: <span className="text-brand-accent font-semibold">{selectedColor}</span></span>
                <span className="text-zinc-400 font-normal">Italian Tannery Hides</span>
              </label>
              <div className="flex items-center gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center gap-2 transition-all ${
                      selectedColor === c.name
                        ? 'border-brand-dark bg-brand-dark text-white shadow-md'
                        : 'border-zinc-200 bg-white text-brand-dark hover:border-zinc-400'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/20"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* EU Size Chips */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-brand-dark">
                  Select EU Size: <span className="text-brand-accent font-bold">{selectedSize}</span>
                </label>
                <span className="text-xs text-brand-muted hover:text-brand-dark underline cursor-pointer">
                  Anatomical Size Guide
                </span>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-3 rounded-xl text-xs font-bold border transition-all duration-200 ${
                      selectedSize === sz
                        ? 'border-brand-dark bg-brand-dark text-white shadow-md scale-105'
                        : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-amber-700 flex items-center gap-1 font-mono">
                <Zap className="w-3 h-3 text-amber-500" />
                <span>Low Stock: Only 3 pairs remaining in EU {selectedSize}</span>
              </p>
            </div>

            {/* Quantity Counter & Primary CTA Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                
                {/* Quantity Controls */}
                <div className="flex items-center gap-3 border border-zinc-200 rounded-full px-4 py-3 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-zinc-500 hover:text-black transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold w-6 text-center font-mono">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-zinc-500 hover:text-black transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 px-6 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                    isAdded ? 'bg-emerald-600 text-white' : 'bg-brand-dark text-white hover:bg-black'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Shopping Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag — ${(product.price * quantity).toLocaleString()}</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Buy Now CTA Direct Express */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBuyNow}
                className="w-full py-3.5 rounded-full bg-brand-accent text-brand-dark hover:bg-brand-accent-dark hover:text-white font-bold text-xs transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Express Buy Now (Fast Checkout)</span>
              </motion.button>
            </div>

            {/* Secure Checkout Trust Badge */}
            <div className="flex items-center justify-center gap-4 text-[10px] text-zinc-400 pt-2 border-t border-zinc-100 font-mono">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>256-Bit Encrypted UAE Checkout</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-brand-accent" />
                <span>Authentic Atelier Guarantee</span>
              </span>
            </div>

          </div>

        </div>

        {/* Detailed Tabs Section */}
        <div className="mb-20 bg-brand-surface rounded-3xl border border-zinc-100 p-6 md:p-10 shadow-sm">
          
          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-4 border-b border-zinc-200 pb-4 mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-2 text-sm font-bold transition-all relative ${
                activeTab === 'details'
                  ? 'text-brand-dark border-b-2 border-brand-dark'
                  : 'text-brand-muted hover:text-brand-dark'
              }`}
            >
              Craftsmanship & Features
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-2 text-sm font-bold transition-all relative ${
                activeTab === 'specs'
                  ? 'text-brand-dark border-b-2 border-brand-dark'
                  : 'text-brand-muted hover:text-brand-dark'
              }`}
            >
              Anatomical Specifications
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-2 text-sm font-bold transition-all relative ${
                activeTab === 'shipping'
                  ? 'text-brand-dark border-b-2 border-brand-dark'
                  : 'text-brand-muted hover:text-brand-dark'
              }`}
            >
              UAE Delivery & Returns Policy
            </button>
          </div>

          {/* Tab Content Panels */}
          {activeTab === 'details' && (
            <div className="space-y-4 max-w-3xl">
              <h3 className="text-lg font-bold text-brand-dark">Uncompromising Luxury & Performance</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Handcrafted at our Dubai Design District (d3) atelier, every pair of {product.name} embodies the intersection of quiet luxury aesthetics and anatomical footwear architecture.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-brand-dark bg-white p-3 rounded-xl border border-zinc-100 shadow-sm">
                    <Check className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl text-xs">
              <div className="space-y-2 bg-white p-4 rounded-2xl border border-zinc-100">
                <span className="font-bold text-brand-dark block uppercase font-mono">Upper Construction</span>
                <p className="text-brand-muted">Hand-selected Italian full-grain calfskin leather, hand-burnished for a rich depth of tone.</p>
              </div>
              <div className="space-y-2 bg-white p-4 rounded-2xl border border-zinc-100">
                <span className="font-bold text-brand-dark block uppercase font-mono">Footbed & Lining</span>
                <p className="text-brand-muted">Anatomical memory foam contoured insole lined with breathable glove-soft leather.</p>
              </div>
              <div className="space-y-2 bg-white p-4 rounded-2xl border border-zinc-100">
                <span className="font-bold text-brand-dark block uppercase font-mono">Outsole Engineering</span>
                <p className="text-brand-muted">Shock-absorbing Goodyear welted leather and rubber composite for multi-surface durability.</p>
              </div>
              <div className="space-y-2 bg-white p-4 rounded-2xl border border-zinc-100">
                <span className="font-bold text-brand-dark block uppercase font-mono">Origin & Weight</span>
                <p className="text-brand-muted">Crafted in Dubai atelier using Tuscan hides. Approx. 380g per shoe.</p>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-4 max-w-3xl text-xs text-brand-muted leading-relaxed">
              <h3 className="text-base font-bold text-brand-dark">Seamless UAE Delivery Concierge</h3>
              <p>
                We offer complimentary express courier dispatch across all 7 Emirates in the UAE (Dubai, Abu Dhabi, Sharjah, Ajman, RAK, UAQ, Fujairah).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-zinc-100">
                  <span className="font-bold text-brand-dark block mb-1">Dubai Same-Day Express</span>
                  <span>Orders placed before 2:00 PM GST are delivered on the same day in Dubai.</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-zinc-100">
                  <span className="font-bold text-brand-dark block mb-1">Complimentary UAE Returns</span>
                  <span>30-day hassle-free size exchanges and returns with doorstep courier pickup.</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Real Customer Reviews Section */}
        <div className="mb-20 border-t border-zinc-100 pt-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-accent uppercase font-bold">
                VERIFIED REVIEWS
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight mt-1 font-sans">
                Client Feedback ({product.reviewsCount})
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-amber-50 text-amber-900 px-4 py-2 rounded-full font-bold text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{product.rating} out of 5.0 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center justify-between text-xs text-brand-muted">
                <span className="font-bold text-brand-dark">Tariq H. (Dubai)</span>
                <span>Verified Buyer</span>
              </div>
              <div className="flex text-amber-400">
                {'★'.repeat(5)}
              </div>
              <p className="text-xs text-brand-dark font-medium">
                "Exceptional leather quality. The memory foam footbed makes walking all day in DIFC completely effortless."
              </p>
            </div>

            <div className="bg-brand-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center justify-between text-xs text-brand-muted">
                <span className="font-bold text-brand-dark">Sarah M. (Abu Dhabi)</span>
                <span>Verified Buyer</span>
              </div>
              <div className="flex text-amber-400">
                {'★'.repeat(5)}
              </div>
              <p className="text-xs text-brand-dark font-medium">
                "Delivered to my home in less than 24 hours. The packaging feels like opening an Italian luxury atelier piece."
              </p>
            </div>

            <div className="bg-brand-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center justify-between text-xs text-brand-muted">
                <span className="font-bold text-brand-dark">Omar K. (Sharjah)</span>
                <span>Verified Buyer</span>
              </div>
              <div className="flex text-amber-400">
                {'★'.repeat(5)}
              </div>
              <p className="text-xs text-brand-dark font-medium">
                "True to size fit. The patina finish on the leather is even better in person."
              </p>
            </div>
          </div>
        </div>

        {/* You May Also Like (Related Products Grid) */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-zinc-100 pt-16">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-xs font-mono tracking-widest text-brand-accent uppercase font-bold">
                  RECOMMENDED SILHOUETTES
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight mt-1 font-sans">
                  You May Also Like
                </h2>
              </div>
              <button
                onClick={navigateToHome}
                className="text-xs font-bold text-brand-dark hover:text-brand-accent flex items-center gap-1"
              >
                <span>View Full Collection</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
