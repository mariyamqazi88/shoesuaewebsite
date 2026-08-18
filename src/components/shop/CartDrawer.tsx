import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import type { CheckoutFormData } from '../../types/ecommerce';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Clock, MapPin, Phone, User, ShoppingCart } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    shippingFee,
    taxAmount,
    totalAmount,
    totalItemsCount,
    placeOrder,
  } = useCart();

  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    phone: '',
    address: '',
    city: 'Dubai',
    emirate: 'Dubai',
    dropoffWindow: 'Afternoon (1 PM - 6 PM)',
    paymentMethod: 'cash_on_delivery',
    orderNotes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^(\+971|0)?5[0245689]\d{7}$/.test(formData.phone.replace(/\s+/g, ''))) {
      errs.phone = 'Please enter a valid UAE phone number (e.g. +971 50 123 4567)';
    }
    if (!formData.address.trim()) errs.address = 'Delivery address is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      placeOrder(formData);
      setStep('cart');
    }
  };

  const closeDrawer = () => {
    setIsCartOpen(false);
    setStep('cart');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-md cursor-pointer"
          />

          {/* Right Slide-Out Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 w-full max-w-md h-full bg-white text-brand-dark shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Header with PROMINENT CLOSE CROSS BUTTON */}
            <div className="p-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/90 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base tracking-tight font-sans leading-none">
                    {step === 'cart' ? `Your Bag (${totalItemsCount})` : 'Delivery & Checkout'}
                  </h3>
                  <span className="text-[10px] text-zinc-400 font-mono">
                    {step === 'cart' ? 'Free UAE Shipping over $200' : 'Step 2 of 2'}
                  </span>
                </div>
              </div>

              {/* Explicit Cross (X) Close Button */}
              <button
                onClick={closeDrawer}
                className="w-9 h-9 rounded-full bg-zinc-200 hover:bg-brand-dark hover:text-white text-brand-dark transition-all duration-200 flex items-center justify-center shadow-sm"
                aria-label="Close cart drawer"
                title="Close and continue shopping"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Scrollable Body Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                  <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                    <ShoppingCart className="w-8 h-8 text-brand-accent" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-base text-brand-dark font-sans">Your shopping bag is empty</h4>
                    <p className="text-xs text-brand-muted max-w-xs">
                      Explore our Best Sellers showcase or New Arrivals section to add handcrafted luxury footwear to your bag.
                    </p>
                  </div>
                  <button
                    onClick={closeDrawer}
                    className="mt-2 px-7 py-3 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-black transition-all shadow-md"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : step === 'cart' ? (
                /* Cart Items List Step */
                <div className="space-y-4">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex gap-4 p-3.5 rounded-2xl bg-brand-card/80 border border-zinc-100 relative group shadow-sm hover:border-zinc-300 transition-all"
                      >
                        {/* Item Thumbnail */}
                        <div className="w-20 h-20 rounded-xl bg-white overflow-hidden flex-shrink-0 border border-zinc-100">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Item Meta */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <h4 className="text-xs font-bold text-brand-dark line-clamp-1 font-sans">
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-zinc-400 hover:text-red-500 transition-colors p-1"
                                aria-label="Remove item"
                                title="Remove from bag"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-brand-muted mt-1 font-mono">
                              <span>EU {item.selectedSize}</span>
                              <span>•</span>
                              <span>{item.selectedColor}</span>
                            </div>
                          </div>

                          {/* Quantity Controls & Price */}
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2 bg-white rounded-lg border border-zinc-200 px-2 py-1">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="text-zinc-600 hover:text-black p-0.5"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold w-4 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="text-zinc-600 hover:text-black p-0.5"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <div className="text-right">
                              <span className="text-xs font-extrabold text-brand-dark font-sans">
                                ${item.product.price * item.quantity}
                              </span>
                              <span className="text-[10px] text-zinc-400 font-mono block">
                                ~ AED {Math.round(item.product.price * item.quantity * 3.67)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                /* Formal Checkout Form Step */
                <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-dark flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-accent" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sultan Al-Mansoori"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:border-brand-dark transition-colors"
                    />
                    {errors.fullName && <p className="text-[10px] text-red-500">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-dark flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-brand-accent" />
                      <span>Delivery Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:border-brand-dark transition-colors"
                    />
                    <p className="text-[10px] text-zinc-400 font-mono">Format: +971 5X XXX XXXX</p>
                    {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-dark">Emirate</label>
                      <select
                        value={formData.emirate}
                        onChange={(e) => setFormData({ ...formData, emirate: e.target.value, city: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:border-brand-dark"
                      >
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                        <option value="Fujairah">Fujairah</option>
                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-dark">City / District</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Downtown / d3"
                        className="w-full px-3 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:border-brand-dark"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-dark flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                      <span>Full Shipping Address *</span>
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Building name, Villa / Apt No, Street address"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:border-brand-dark transition-colors"
                    />
                    {errors.address && <p className="text-[10px] text-red-500">{errors.address}</p>}
                  </div>

                  {/* Drop-off Timing Windows */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-dark flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-accent" />
                      <span>Preferred Drop-off Window</span>
                    </label>
                    <select
                      value={formData.dropoffWindow}
                      onChange={(e) => setFormData({ ...formData, dropoffWindow: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:border-brand-dark"
                    >
                      <option value="Morning (9 AM - 1 PM)">Morning (9 AM - 1 PM)</option>
                      <option value="Afternoon (1 PM - 6 PM)">Afternoon (1 PM - 6 PM)</option>
                      <option value="Evening (6 PM - 10 PM)">Evening (6 PM - 10 PM)</option>
                    </select>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="space-y-1 pt-1">
                    <label className="text-xs font-bold text-brand-dark">Payment Method</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: 'cash_on_delivery' })}
                        className={`p-2 rounded-xl border text-[11px] font-semibold text-center transition-all ${
                          formData.paymentMethod === 'cash_on_delivery'
                            ? 'border-brand-dark bg-brand-dark text-white'
                            : 'border-zinc-200 bg-zinc-50 text-zinc-700'
                        }`}
                      >
                        Cash on Delivery
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                        className={`p-2 rounded-xl border text-[11px] font-semibold text-center transition-all ${
                          formData.paymentMethod === 'card'
                            ? 'border-brand-dark bg-brand-dark text-white'
                            : 'border-zinc-200 bg-zinc-50 text-zinc-700'
                        }`}
                      >
                        Credit Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: 'apple_pay' })}
                        className={`p-2 rounded-xl border text-[11px] font-semibold text-center transition-all ${
                          formData.paymentMethod === 'apple_pay'
                            ? 'border-brand-dark bg-brand-dark text-white'
                            : 'border-zinc-200 bg-zinc-50 text-zinc-700'
                        }`}
                      >
                         Apple Pay
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Real-time Order Summary Footer */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-zinc-200 bg-zinc-50/90 space-y-3">
                <div className="space-y-1.5 text-xs text-brand-muted">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-brand-dark">${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>UAE Courier Shipping</span>
                    <span>{shippingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VAT (5% UAE Tax)</span>
                    <span>${taxAmount}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-zinc-200 text-sm font-extrabold text-brand-dark">
                    <span>Total Amount</span>
                    <div className="text-right">
                      <span className="text-base text-brand-dark">${totalAmount}</span>
                      <span className="text-[10px] text-brand-muted font-mono block">
                        ~ AED {Math.round(totalAmount * 3.67)}
                      </span>
                    </div>
                  </div>
                </div>

                {step === 'cart' ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => setStep('checkout')}
                      className="w-full py-3.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Add More Products / Continue Shopping Button */}
                    <button
                      onClick={closeDrawer}
                      className="w-full py-2.5 rounded-full bg-zinc-100 text-brand-dark text-xs font-bold hover:bg-zinc-200 transition-colors"
                    >
                      + Add More Shoes (Continue Browsing)
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStep('cart')}
                      className="px-4 py-3.5 rounded-full bg-zinc-200 text-brand-dark text-xs font-bold hover:bg-zinc-300 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      form="checkout-form"
                      className="flex-1 py-3.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Place Order (${totalAmount})</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
