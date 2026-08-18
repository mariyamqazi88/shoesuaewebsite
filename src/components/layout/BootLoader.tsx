import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, MapPin } from 'lucide-react';

export const BootLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const triggerFinish = () => {
    setIsFinished(true);
    setTimeout(() => {
      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
    }, 700);
  };

  const statusMessages = [
    'INITIALIZING LUXURY CANVAS',
    'RASTERIZING ITALIAN LEATHER MATRICES',
    'CALIBRATING ANATOMICAL FOOTBED SHADERS',
    'SYNCING DUBAI DESIGN DISTRICT (d3) HUB',
    'SHO.ESUAE ATELIER READY'
  ];

  useEffect(() => {
    // Smooth 5.5-second luxury duration (1% per 50ms = 5.0s count + 0.5s finish hold)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(triggerFinish, 500);
          return 100;
        }

        const next = Math.min(100, prev + 1);

        const stepIdx = Math.min(
          Math.floor((next / 100) * statusMessages.length),
          statusMessages.length - 1
        );
        setCurrentStep(stepIdx);

        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#0C0C0D] text-white p-6 sm:p-12 font-sans select-none overflow-hidden"
        >
          {/* Background Luxury Ambient Glow Matching sho.esuae Palette */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#D4A373]/14 rounded-full blur-[170px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C29B7F]/12 rounded-full blur-[150px] pointer-events-none" />

          {/* Center Brand Emblem & Typography */}
          <div className="relative z-10 my-auto max-w-xl w-full mx-auto text-center space-y-8">
            
            {/* Luxury Emblem (Stationary) */}
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              {/* Outer Ring */}
              <svg className="absolute inset-0 w-full h-full text-brand-accent" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 12" className="opacity-75" />
              </svg>

              {/* Inner Ring */}
              <svg className="absolute inset-2 w-[88%] h-[88%] text-amber-300" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" className="opacity-60" />
              </svg>

              {/* Center Crest Icon with original SE text */}
              <div className="w-14 h-14 rounded-2xl bg-neutral-900/90 border border-brand-accent/40 flex items-center justify-center shadow-2xl backdrop-blur-md">
                <span className="font-extrabold text-lg text-brand-accent font-sans">
                  SE
                </span>
              </div>
            </div>

            {/* Brand Title & Sub-headline */}
            <div className="space-y-3">
              <motion.h1
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans leading-none"
              >
                sho.esuae
              </motion.h1>
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xs sm:text-sm text-neutral-400 font-sans tracking-[0.25em] uppercase"
              >
                MINIMALIST LUXURY FOOTWEAR ARCHITECTURE
              </motion.p>
            </div>

            {/* Premium Meter Bar & Percentage Counter */}
            <div className="space-y-3 max-w-md mx-auto">
              <div className="w-full bg-neutral-900/90 h-2.5 rounded-full overflow-hidden border border-neutral-800 shadow-inner">
                <motion.div
                  className="bg-gradient-to-r from-brand-accent via-amber-400 to-yellow-200 h-full rounded-full transition-all duration-100 ease-out shadow-[0_0_16px_rgba(212,163,115,0.7)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-brand-accent text-[11px] font-bold tracking-wider uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
                  {statusMessages[currentStep]}
                </span>
                <span className="text-white font-bold text-sm font-mono">{progress}%</span>
              </div>
            </div>

          </div>

          {/* Bottom Footer Details */}
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-500 border-t border-neutral-800/80 pt-4 gap-2 font-mono">
            <div className="flex items-center gap-2 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span>DESIGN DISTRICT (d3), DUBAI, UAE</span>
            </div>

            <div className="flex items-center gap-4 text-neutral-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                <span>HANDCRAFTED GUARANTEE</span>
              </span>
              <span className="flex items-center gap-1 text-brand-accent">
                <span>2026 COLLECTION</span>
              </span>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
