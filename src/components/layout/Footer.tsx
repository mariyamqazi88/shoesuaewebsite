import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export const Footer: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const columnVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-[#111111] text-white pt-24 pb-14 border-t border-neutral-800 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main 4-Column Grid with Framer Motion Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-neutral-800"
        >
          
          {/* Section 1: Brand Bio */}
          <motion.div variants={columnVariants} className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center p-1 shadow-md overflow-hidden flex-shrink-0">
                <img
                  src="/assets/images/logo1.png"
                  alt="sho.esuae Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight font-sans">
                sho.esuae
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-sans">
              UAE’s premier destination for handcrafted luxury footwear and minimalist performance engineering. Designed for discerning individuals who appreciate quiet luxury, anatomical precision, and timeless craftsmanship.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span>Design Studio: Design District (d3), Dubai, UAE</span>
            </div>
          </motion.div>

          {/* Section 2: Quick Links */}
          <motion.div variants={columnVariants} className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Home Collection</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-accent" />
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Footwear Categories</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-accent" />
                </a>
              </li>
              <li>
                <a href="#best-sellers" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Best Selling Shoes</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-accent" />
                </a>
              </li>
              <li>
                <a href="#new-arrivals" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>New Arrivals 2026</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-accent" />
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Our Heritage & Craft</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-accent" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Section 3: Customer Support */}
          <motion.div variants={columnVariants} className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase font-mono">
              Client Concierge
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>+971 4 800 SHOES (74637)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-accent" />
                <span>concierge@sho.esuae</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                <span>2-Year Craftsmanship Guarantee</span>
              </li>
              <li className="text-[11px] text-neutral-500 pt-1">
                Mon - Sat: 9:00 AM - 10:00 PM (GST)
              </li>
            </ul>
          </motion.div>

          {/* Section 4: Social Media Grid & Instagram Hyperlink */}
          <motion.div variants={columnVariants} className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase font-mono">
              Connect With Us
            </h4>
            <p className="text-xs text-neutral-400">
              Follow our official Instagram channel for release announcements and behind-the-scenes atelier craftsmanship.
            </p>

            {/* Crisp SVG Social Icons Grid with Hover Motion */}
            <div className="flex items-center gap-3 pt-2">
              {/* Official Instagram Link - EXPLICIT REQUIREMENT */}
              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/sho.esuae/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 group shadow-md"
                aria-label="Instagram Profile sho.esuae"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all duration-300"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-sky-500 hover:border-transparent transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
            </div>

            {/* Direct URL Tag */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/sho.esuae/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-brand-accent hover:underline font-mono"
              >
                instagram.com/sho.esuae
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4"
        >
          <div className="flex items-center gap-2">
            <span>© 2026 sho.esuae Luxury Footwear LLC. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-neutral-400">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">UAE Delivery Terms</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};
