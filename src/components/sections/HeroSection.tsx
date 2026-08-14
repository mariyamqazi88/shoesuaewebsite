import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Zap, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-16 md:py-20 border-b border-zinc-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typographic Headline & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-8 z-10"
          >
            
            {/* Tag Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent-light text-brand-dark text-xs font-semibold tracking-wide border border-brand-accent/30 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-brand-accent-dark" />
                <span>NEW COLLECTION 2026</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-dark font-sans leading-[1.08]">
                Explore <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-neutral-800 to-brand-accent">
                  Premium Shoes
                </span>
              </h1>
              <p className="text-brand-muted text-sm sm:text-base max-w-lg leading-relaxed pt-2">
                Crafted with anatomical precision and warm earth-toned luxury aesthetic. Elevate your everyday wardrobe with our handcrafted footwear collection.
              </p>
            </motion.div>

            {/* Dual CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#best-sellers"
                className="px-7 py-3.5 rounded-full bg-brand-dark text-white text-sm font-semibold hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#categories"
                className="px-7 py-3.5 rounded-full bg-zinc-100 text-brand-dark border border-zinc-200 text-sm font-semibold hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-brand-muted" />
                <span>Explore Categories</span>
              </motion.a>
            </motion.div>

            {/* Key Micro-stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-100 text-xs"
            >
              <div>
                <p className="text-xl font-bold text-brand-dark font-sans">100%</p>
                <p className="text-brand-muted text-[11px]">Full-Grain Leather</p>
              </div>
              <div>
                <p className="text-xl font-bold text-brand-dark font-sans">24 hrs</p>
                <p className="text-brand-muted text-[11px]">UAE Express Dispatch</p>
              </div>
              <div>
                <p className="text-xl font-bold text-brand-dark font-sans">4.9 ★</p>
                <p className="text-brand-muted text-[11px]">Customer Rating</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Asymmetrical Double-Image Display over Warm Earth Card Block */}
          <div className="lg:col-span-6 relative">
            
            {/* Background Earth-Toned Accent Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full aspect-[4/3] rounded-3xl bg-gradient-to-tr from-[#D4A373] via-[#C29B7F] to-[#E6D5C3] p-6 shadow-2xl overflow-hidden"
            >
              
              {/* Decorative Subtle Geometry Lines */}
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full border border-white/20 -mr-20 -mt-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/20 -ml-20 -mb-20 pointer-events-none" />

              {/* Top Card Label */}
              <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider text-brand-dark shadow-sm">
                FLAGSHIP MODEL // AEROLIGHT
              </div>

              {/* Main Shoe Image Asset 1 with Continuous Floating Motion */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.02, 1],
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.2 },
                  y: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
                  scale: { repeat: Infinity, duration: 7, ease: 'easeInOut' },
                }}
                className="relative z-10 w-full h-full flex items-center justify-center pt-4"
              >
                <img
                  src="/assets/images/hero_double_shoes.jpg"
                  alt="SNIKEI Terracotta Aeroflux Sneaker"
                  className="w-full h-full object-cover rounded-2xl shadow-xl hover:scale-[1.03] transition-transform duration-500"
                />
              </motion.div>

              {/* Asymmetrical Secondary Overlapping Floating Product Card */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.4 },
                  y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 },
                }}
                className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 z-30 bg-white p-3.5 md:p-4 rounded-2xl shadow-2xl border border-zinc-100 max-w-[220px] sm:max-w-[250px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-zinc-100 overflow-hidden flex-shrink-0">
                    <img
                      src="/assets/images/sneaker_white_tan.jpg"
                      alt="Studio Low Top"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-accent tracking-wider block">
                      JUST DROPPED
                    </span>
                    <h4 className="text-xs font-bold text-brand-dark line-clamp-1 font-sans">
                      Studio White Low-Top
                    </h4>
                    <p className="text-xs font-semibold text-neutral-800 pt-0.5 font-sans">
                      $245 <span className="text-[10px] text-zinc-400 font-normal">AED 899</span>
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
