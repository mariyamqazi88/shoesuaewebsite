import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

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
    <section className="relative overflow-hidden bg-[#121118] text-white select-none border-b border-neutral-800 min-h-[340px] sm:min-h-[480px] flex items-center w-full max-w-full">
      
      {/* Background Split Layout matching reference image (Left Dark, Right Theme Accent) */}
      <div className="absolute inset-0 z-0 flex w-full max-w-full">
        {/* Left Dark Section */}
        <div className="w-full lg:w-[62%] bg-[#121118] relative flex items-center justify-center overflow-hidden">
          {/* Subtle Watermark Text Behind */}
          <span className="hidden sm:block absolute text-[16vw] lg:text-[12vw] font-black text-white/[0.04] tracking-tighter select-none pointer-events-none uppercase font-sans break-all max-w-full">
            SHOESUAE
          </span>
        </div>

        {/* Right Split Theme Accent Panel (Warm Camel Tan #D4A373) */}
        <div className="hidden lg:block lg:w-[38%] bg-gradient-to-b from-[#D4A373] via-[#C29B7F] to-[#B58352] relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
          {/* Subtle Ambient Curved Overlay Lines */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border border-white/20 pointer-events-none" />
          <div className="absolute -right-40 -top-20 w-[500px] h-[500px] rounded-full border border-white/10 pointer-events-none" />
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-8 relative z-10 py-3 sm:py-8 md:py-12 w-full max-w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-8 lg:gap-6 items-center w-full max-w-full">
          
          {/* Left Column: Text Content & Dual CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-2.5 sm:space-y-3 max-w-xl text-white min-w-0 w-full"
          >
            {/* Sub-badge / Top Header (Hidden on screens 400px and below) */}
            <motion.div variants={itemVariants} className="max-w-full hidden md:block">
              <span className="text-xs font-mono font-black tracking-widest uppercase text-[#D4A373] bg-[#D4A373]/15 px-3 py-1 rounded-full border border-[#D4A373]/30 inline-block shadow-sm max-w-full truncate">
                NEW ARRIVAL // 2026
              </span>
            </motion.div>

            {/* Responsive Headline for mobile screens */}
            <motion.div variants={itemVariants} className="space-y-1 max-w-full">
              <h1 className="text-base xs:text-xl sm:text-3xl lg:text-[2.65rem] font-black tracking-tight leading-tight uppercase font-sans break-words max-w-full">
                Explore <br />
                <span className="text-[#D4A373] bg-clip-text text-transparent bg-gradient-to-r from-[#E6BC92] via-[#D4A373] to-[#B58352] drop-shadow-md">
                  Premium Shoes
                </span>
              </h1>
              <p className="text-neutral-300 text-[9px] xs:text-[11px] sm:text-xs md:text-sm max-w-md leading-relaxed font-sans pt-0.5 break-words">
                Crafted with anatomical precision and warm earth-toned luxury aesthetic. Elevate your everyday wardrobe with our handcrafted footwear collection.
              </p>
            </motion.div>

            {/* Dual CTAs (Compact Button Layout for mobile screens) */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1 w-full max-w-full">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#new-arrivals"
                className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#D4A373] text-[#111111] font-extrabold text-[9px] sm:text-xs hover:bg-white hover:text-[#111111] transition-all duration-300 shadow-xl flex items-center justify-center gap-1.5 group uppercase tracking-wider text-center max-w-full"
              >
                <span className="truncate">Shop Now</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#categories"
                className="px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-[9px] sm:text-xs font-bold hover:bg-white hover:text-brand-dark transition-all duration-300 flex items-center justify-center gap-1.5 text-center max-w-full"
              >
                <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4A373] flex-shrink-0" />
                <span className="truncate">Explore Categories</span>
              </motion.a>
            </motion.div>

            {/* Key Micro-stats (Responsive Grid for mobile screens) */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-1 sm:gap-4 pt-2 border-t border-white/15 text-xs max-w-md w-full"
            >
              <div className="min-w-0">
                <p className="text-[9px] sm:text-base md:text-lg font-black text-white font-sans truncate">100%</p>
                <p className="text-neutral-400 text-[7px] sm:text-[10px] font-mono leading-tight truncate">Leather</p>
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-base md:text-lg font-black text-white font-sans truncate">24 hrs</p>
                <p className="text-neutral-400 text-[7px] sm:text-[10px] font-mono leading-tight truncate">UAE Shipping</p>
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-base md:text-lg font-black text-white font-sans truncate">4.9 ★</p>
                <p className="text-neutral-400 text-[7px] sm:text-[10px] font-mono leading-tight truncate">Rating</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Floating Brand Theme Sneakers */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-1 lg:pt-0 w-full max-w-full">
            
            {/* Animated Floating Sneakers Container */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="relative z-10 w-full max-w-[150px] xs:max-w-[220px] sm:max-w-[380px] aspect-square flex items-center justify-center group"
            >
              <img
                src="public/assets/images/shoes2.jpg"
                alt="sho.esuae Luxury Footwear"
                className="w-full h-auto object-contain opacity-100 filter-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating "New" Tag Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute top-0.5 left-0.5 sm:top-2 sm:left-2 bg-[#D4A373] text-[#111111] px-1.5 sm:px-3 py-0.5 rounded-full text-[7px] sm:text-[10px] font-mono font-extrabold shadow-xl border border-white/40"
              >
                NEW // 2026
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

