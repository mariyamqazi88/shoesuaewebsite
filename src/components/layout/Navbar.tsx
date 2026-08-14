import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useQuickView } from '../../context/QuickViewContext';
import { useNavigation } from '../../context/NavigationContext';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { setIsSearchOpen } = useQuickView();
  const { navigateToHome } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    navigateToHome();
    if (href.startsWith('#') && href.length > 1) {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Categories', href: '#categories' },
    { name: 'Best Sellers', href: '#best-sellers' },
    { name: 'New Arrivals', href: '#new-arrivals' },
    { name: 'About Store', href: '#about' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-sm border-b border-brand-border/60 py-3.5' : 'bg-white py-5 border-b border-zinc-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Infinite Circular Rotation Badge */}
        <div
          onClick={() => navigateToHome()}
          className="flex items-center gap-3.5 group cursor-pointer"
        >
          {/* Logo Container with Dot Border and Spacing */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Outer Spinning Dot Border */}
            <svg
              className="absolute inset-0 w-full h-full text-brand-accent animate-spin-slow"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 8"
                className="opacity-80"
              />
            </svg>

            {/* Inner Logo Icon Container sticky to dot border with bg-brand-accent */}
            <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center p-0.5 shadow-md z-10 overflow-hidden">
              <img
                src="/assets/images/logo1.png"
                alt="sho.esuae Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-brand-dark font-sans leading-none">
              sho.esuae
            </span>
            <span className="text-[9px] font-mono tracking-widest text-brand-muted uppercase">
              Luxury Footwear
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links with Underline Animation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-brand-dark/90 hover:text-brand-dark hover-underline-animation transition-colors py-1 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-brand-dark hover:text-brand-accent transition-colors rounded-full hover:bg-zinc-100"
            aria-label="Search"
          >
            <Search className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Wishlist Icon */}
          <a
            href="#new-arrivals"
            className="relative p-2 text-brand-dark hover:text-brand-accent transition-colors rounded-full hover:bg-zinc-100 hidden sm:block"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5 stroke-[1.75]" />
            {wishlistCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
              >
                {wishlistCount}
              </motion.span>
            )}
          </a>

          {/* Cart Icon with Dynamic Counter */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-brand-dark text-white rounded-full hover:bg-black transition-all duration-200 flex items-center justify-center gap-2 group shadow-sm"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2]" />
            <span className="text-xs font-semibold px-1">
              {totalItemsCount}
            </span>
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-dark lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-zinc-100 bg-white px-6 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-brand-dark hover:text-brand-accent py-2 border-b border-zinc-50"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};
