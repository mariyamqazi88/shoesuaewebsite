import React from 'react';
import { CATEGORIES } from '../../data/products';
import { ArrowUpRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export const CategoryGridSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="categories" className="py-24 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-accent uppercase font-bold">
              CURATED STYLES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight mt-1 font-sans">
              Browse By Category
            </h2>
          </div>
          <p className="text-xs text-brand-muted max-w-sm mt-2 md:mt-0 leading-relaxed">
            From sharp black-tie dress Oxfords to modern minimalist low-top sneakers and Tuscan suede boots.
          </p>
        </motion.div>

        {/* Categories Grid with Staggered Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {CATEGORIES.filter(c => c.name !== 'All').map((cat) => (
            <motion.a
              key={cat.name}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              href="#new-arrivals"
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-card flex flex-col justify-end p-5 border border-zinc-100 hover:border-brand-accent transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              
              <div className="relative z-10 text-white space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold tracking-tight font-sans">
                    {cat.name}
                  </h3>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-brand-dark transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <span className="text-[10px] text-neutral-300 font-mono block">
                  {cat.count} Silhouettes
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
