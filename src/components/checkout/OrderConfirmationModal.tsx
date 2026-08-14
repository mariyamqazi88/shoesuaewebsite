import React from 'react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MapPin, Clock, ArrowRight, Printer, X } from 'lucide-react';

export const OrderConfirmationModal: React.FC = () => {
  const { lastCompletedOrder, isOrderModalOpen, setIsOrderModalOpen } = useCart();

  if (!lastCompletedOrder) return null;

  return (
    <AnimatePresence>
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOrderModalOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
          />

          {/* Centered Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-xl bg-white text-brand-dark rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-auto border border-zinc-100"
          >
            {/* Top Right Cross (X) Close Button */}
            <button
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-100 hover:bg-brand-dark hover:text-white text-zinc-600 transition-all duration-200 flex items-center justify-center shadow-sm"
              aria-label="Close order confirmation modal"
              title="Close modal"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Top Success Banner */}
            <div className="text-center space-y-3 mb-6 pb-6 border-b border-zinc-100 pr-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.1, stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner"
              >
                <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
              </motion.div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold tracking-wider uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>ORDER CONFIRMED</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight font-sans">
                Thank You For Your Order!
              </h2>

              <p className="text-xs text-brand-muted max-w-md mx-auto">
                Your order has been logged into our UAE logistics queue. A confirmation SMS and courier tracking link has been dispatched to your mobile.
              </p>
            </div>

            {/* Transactional Summary Box */}
            <div className="space-y-4 text-xs bg-zinc-50 rounded-2xl p-4 md:p-5 border border-zinc-200">
              
              {/* Order Meta */}
              <div className="flex justify-between items-center pb-3 border-b border-zinc-200 text-xs font-mono">
                <div>
                  <span className="text-zinc-400 block text-[10px]">ORDER IDENTIFICATION</span>
                  <span className="font-bold text-brand-dark text-sm">{lastCompletedOrder.orderId}</span>
                </div>
                <div className="text-right">
                  <span className="text-zinc-400 block text-[10px]">TRANSACTION DATE</span>
                  <span className="font-semibold text-zinc-700">{lastCompletedOrder.createdAt}</span>
                </div>
              </div>

              {/* Items Summary */}
              <div className="space-y-2.5 max-h-36 overflow-y-auto pr-1">
                <span className="text-[10px] uppercase font-mono font-bold text-brand-muted block">
                  Purchased Items ({lastCompletedOrder.items.length})
                </span>
                {lastCompletedOrder.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-xs py-1 border-b border-zinc-100 last:border-0">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-8 h-8 rounded-lg object-cover bg-white"
                      />
                      <div>
                        <p className="font-bold text-brand-dark line-clamp-1">{item.product.name}</p>
                        <p className="text-[10px] text-zinc-400 font-mono">Size {item.selectedSize} • Qty {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-brand-dark">${item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Delivery Address & Dropoff Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-zinc-200 text-[11px]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-brand-dark block">Shipping Destination</span>
                    <span className="text-zinc-600 leading-snug block">
                      {lastCompletedOrder.customer.fullName}<br />
                      {lastCompletedOrder.customer.address}, {lastCompletedOrder.customer.city}, {lastCompletedOrder.customer.emirate}
                    </span>
                    <span className="text-[10px] font-mono text-brand-muted">{lastCompletedOrder.customer.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-brand-dark block">Drop-off Window</span>
                    <span className="text-zinc-600 block">{lastCompletedOrder.customer.dropoffWindow}</span>
                    <span className="text-[10px] font-mono text-emerald-600 font-bold block pt-1">
                      ⚡ Guaranteed 24-hr Express
                    </span>
                  </div>
                </div>
              </div>

              {/* Final Totals Breakdown */}
              <div className="pt-3 border-t border-zinc-200 flex justify-between items-center text-sm font-extrabold text-brand-dark">
                <span>Total Amount Paid</span>
                <div className="text-right">
                  <span className="text-lg text-emerald-600">${lastCompletedOrder.totalAmount}</span>
                  <span className="text-[10px] text-zinc-400 font-mono block">
                    ~ AED {Math.round(lastCompletedOrder.totalAmount * 3.67)} (VAT Included)
                  </span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.print()}
                className="px-4 py-3 rounded-full bg-zinc-100 text-brand-dark text-xs font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Receipt</span>
              </button>

              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="flex-1 py-3.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Continue Exploring sho.esuae</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
