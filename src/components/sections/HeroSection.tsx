import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#be8d6f] text-white select-none min-h-[480px] sm:min-h-[540px] md:min-h-[580px] lg:h-[calc(100vh-115px)] lg:max-h-[680px] lg:min-h-[540px] flex items-center w-full max-w-full">
      
      {/* Background Cover Image matching design - Light & Enhanced, anchored to bottom to keep shoes in full view */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <img
          src="/assets/images/hero_snikei_cover.jpg"
          alt="Explore Premium Shoes Cover"
          className="w-full h-full object-cover object-bottom brightness-105 contrast-[1.02] select-none pointer-events-none"
        />

        {/* Minimalist soft overlay - keeps image bright and vibrant while ensuring text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 py-6 sm:py-8 md:py-10 w-full max-w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center w-full max-w-full">
          
          {/* Left Column: Text Content & Dual CTAs (Content & Buttons Preserved) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-3 sm:space-y-3.5 max-w-xl text-white min-w-0 w-full"
          >
            {/* Sub-badge / Top Header */}
            <motion.div variants={itemVariants} className="max-w-full hidden md:block">
              <span className="text-[11px] font-mono font-black tracking-widest uppercase text-white bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 inline-block shadow-sm max-w-full truncate">
                NEW ARRIVAL // 2026
              </span>
            </motion.div>

            {/* Responsive Headline */}
            <motion.div variants={itemVariants} className="space-y-1.5 max-w-full">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight leading-tight uppercase font-sans break-words max-w-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Explore <br />
                <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  Premium Shoes
                </span>
              </h1>
              <p className="text-neutral-100 text-xs sm:text-sm max-w-md leading-relaxed font-sans pt-0.5 break-words drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                Crafted with anatomical precision and warm earth-toned luxury aesthetic. Elevate your everyday wardrobe with our handcrafted footwear collection.
              </p>
            </motion.div>

            {/* Dual CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1.5 w-full max-w-full">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#new-arrivals"
                className="px-5 py-2.5 sm:py-3 rounded-full bg-white text-[#111111] font-extrabold text-xs sm:text-sm hover:bg-[#F3D7B5] transition-all duration-300 shadow-lg flex items-center justify-center gap-1.5 group uppercase tracking-wider text-center max-w-full"
              >
                <span className="truncate">Shop Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform flex-shrink-0 text-black" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#categories"
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-black/25 backdrop-blur-md text-white border border-white/40 text-xs sm:text-sm font-bold hover:bg-white hover:text-neutral-900 transition-all duration-300 flex items-center justify-center gap-1.5 text-center max-w-full shadow-md"
              >
                <Compass className="w-3.5 h-3.5 text-white flex-shrink-0" />
                <span className="truncate">Explore Categories</span>
              </motion.a>
            </motion.div>

            {/* Key Micro-stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-2 sm:gap-4 pt-2.5 border-t border-white/25 text-xs max-w-md w-full"
            >
              <div className="min-w-0">
                <p className="text-xs sm:text-base font-black text-white font-sans truncate drop-shadow">100%</p>
                <p className="text-neutral-200 text-[8px] sm:text-[10px] font-mono leading-tight truncate drop-shadow">Leather</p>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-base font-black text-white font-sans truncate drop-shadow">24 hrs</p>
                <p className="text-neutral-200 text-[8px] sm:text-[10px] font-mono leading-tight truncate drop-shadow">UAE Shipping</p>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-base font-black text-white font-sans truncate drop-shadow">4.9 ★</p>
                <p className="text-neutral-200 text-[8px] sm:text-[10px] font-mono leading-tight truncate drop-shadow">Rating</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Floating Side Small Card positioned in upper right */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end lg:self-start lg:pt-2 w-full max-w-full">
            
            <div className="relative">
              {/* Animated Floating Card Container */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1.2, 0, -1.2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4.2,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative z-20 bg-white text-neutral-900 rounded-xl p-2 sm:p-2.5 shadow-[0_16px_35px_rgba(0,0,0,0.25)] border border-white/90 w-[145px] xs:w-[170px] sm:w-[195px] md:w-[215px] cursor-pointer group"
              >
                {/* Small Shoe Image Container */}
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-neutral-50 relative">
                  <img
                    src="/assets/images/hero_floating_shoe.jpg"
                    alt="Explore New Arrivals"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle Badge Tag */}
                  <span className="absolute top-1 left-1 bg-black/80 text-white text-[7px] sm:text-[8px] font-mono font-bold px-1.5 py-0.5 rounded tracking-wide">
                    NEW
                  </span>
                </div>

                {/* Card CTA Link */}
                <a
                  href="#new-arrivals"
                  className="mt-2 pt-1 border-t border-neutral-100 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-neutral-900 group-hover:text-[#B58352] transition-colors"
                >
                  <span className="truncate">Explore New Arrivals</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-1 text-neutral-800 group-hover:text-[#B58352]" />
                </a>
              </motion.div>

              {/* Floating Ambient Shadow Beneath Card */}
              <motion.div
                animate={{
                  scale: [1, 0.85, 1],
                  opacity: [0.25, 0.12, 0.25],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4.2,
                  ease: 'easeInOut',
                }}
                className="w-3/4 h-2.5 bg-black/25 blur-sm rounded-full mx-auto mt-1.5 pointer-events-none"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};




