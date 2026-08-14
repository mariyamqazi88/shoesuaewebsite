import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CartItem, CheckoutFormData, OrderDetails } from '../types/ecommerce';

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, size?: number, color?: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  shippingFee: number;
  taxAmount: number;
  totalAmount: number;
  totalItemsCount: number;
  placeOrder: (formData: CheckoutFormData) => OrderDetails;
  lastCompletedOrder: OrderDetails | null;
  isOrderModalOpen: boolean;
  setIsOrderModalOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sho_esuae_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastCompletedOrder, setLastCompletedOrder] = useState<OrderDetails | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('sho_esuae_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const addToCart = (product: Product, size?: number, color?: string, quantity: number = 1) => {
    const selectedSize = size || product.sizes[0] || 42;
    const selectedColor = color || (product.colors[0] ? product.colors[0].name : 'Default');
    const itemId = `${product.id}-${selectedSize}-${selectedColor}`;

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: itemId,
            product,
            quantity,
            selectedSize,
            selectedColor,
          },
        ];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const shippingFee = subtotal === 0 ? 0 : subtotal > 200 ? 0 : 15;
  const taxAmount = Math.round(subtotal * 0.05 * 100) / 100;
  const totalAmount = Math.round((subtotal + shippingFee + taxAmount) * 100) / 100;
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const placeOrder = (formData: CheckoutFormData): OrderDetails => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const year = new Date().getFullYear();
    const newOrder: OrderDetails = {
      orderId: `UAE-${randomNum}-${year}`,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      items: [...cartItems],
      subtotal,
      shippingFee,
      taxAmount,
      totalAmount,
      customer: formData,
    };

    setLastCompletedOrder(newOrder);
    setIsCartOpen(false);
    clearCart();
    setIsOrderModalOpen(true);
    return newOrder;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        shippingFee,
        taxAmount,
        totalAmount,
        totalItemsCount,
        placeOrder,
        lastCompletedOrder,
        isOrderModalOpen,
        setIsOrderModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
