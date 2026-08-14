import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Truck, Award, Compass, Star } from 'lucide-react';

export const ContinuousMarquee: React.FC<{ variant?: 'dark' | 'light' | 'accent' }> = ({ variant = 'dark' }) => {
  const marqueeItems = [
    { icon: Zap, text: 'DUBAI DESIGN DISTRICT (d3) ATELIER' },
    { icon: ShieldCheck, text: '100% ITALIAN FULL-GRAIN LEATHER' },
    { icon: Truck, text: '24H EXPRESS DISPATCH IN UAE' },
    { icon: Award, text: '2-YEAR CRAFTSMANSHIP GUARANTEE' },
    { icon: Star, text: 'ANATOMICAL MEMORY FOAM FOOTBED' },
    { icon: Compass, text: 'GOODYEAR WELTED DURABILITY' },
  ];

  // Repeat twice for seamless infinite looping slide
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  const getBgStyle = () => {
    switch (variant) {
      case 'dark':
        return 'bg-[#111111] text-white border-y border-neutral-800';
      case 'accent':
        return 'bg-[#D4A373] text-[#111111] border-y border-[#B58352]';
      case 'light':
      default:
        return 'bg-zinc-100 text-brand-dark border-y border-zinc-200';
    }
  };

  return (
    <div className={`py-3 overflow-hidden select-none relative z-20 ${getBgStyle()}`}>
      <motion.div
        className="flex whitespace-nowrap gap-8 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
      >
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 px-4 font-mono text-xs tracking-wider uppercase font-semibold">
              <Icon className="w-3.5 h-3.5 text-brand-accent flex-shrink-0 animate-pulse" />
              <span>{item.text}</span>
              <span className="ml-6 opacity-30">•</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
