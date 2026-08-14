import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="about" className="py-28 bg-[#0D0D0E] text-white relative overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-neutral-900/90 border border-neutral-800 rounded-3xl p-8 md:p-16 text-center space-y-8 shadow-2xl backdrop-blur-xl my-4"
        >
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2, stiffness: 200 }}
            className="w-14 h-14 rounded-2xl bg-brand-accent/20 border border-brand-accent/30 text-brand-accent flex items-center justify-center mx-auto mb-2 shadow-inner"
          >
            <Mail className="w-7 h-7" />
          </motion.div>

          <div className="space-y-3">
            <span className="text-xs font-mono tracking-widest text-brand-accent uppercase font-bold">
              SHO.ESUAE PRIVATE CLUB
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans leading-tight">
              Elevate Your Footwear Rotation
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed pt-1 font-sans">
              Subscribe for private access to limited release drops, bespoke trunk show invitations in Dubai, and 10% off your first order with code <span className="text-brand-accent font-mono font-bold">SHOESUAE10</span>.
            </p>
          </div>

          {subscribed ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-emerald-950/60 border border-emerald-800 text-emerald-300 p-4.5 rounded-2xl max-w-md mx-auto flex items-center justify-center gap-3 text-xs font-medium"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Welcome to the sho.esuae Private Circle! Check your inbox.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="w-full px-5 py-3.5 rounded-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-brand-accent transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-accent text-brand-dark font-bold text-xs hover:bg-white transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2 shadow-md"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          )}

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-neutral-500 pt-6 border-t border-neutral-800 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
              <span>No Spam Guarantee</span>
            </span>
            <span>Unsubscribe Anytime</span>
            <span>Exclusive UAE Concierge Access</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
