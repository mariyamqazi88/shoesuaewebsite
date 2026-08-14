import React, { createContext, useContext, useState } from 'react';
import type { Product } from '../types/ecommerce';

interface QuickViewContextType {
  selectedProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const QuickViewContext = createContext<QuickViewContextType | undefined>(undefined);

export const QuickViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  return (
    <QuickViewContext.Provider
      value={{
        selectedProduct,
        openQuickView,
        closeQuickView,
        isSearchOpen,
        setIsSearchOpen,
      }}
    >
      {children}
    </QuickViewContext.Provider>
  );
};

export const useQuickView = () => {
  const context = useContext(QuickViewContext);
  if (!context) {
    throw new Error('useQuickView must be used within a QuickViewProvider');
  }
  return context;
};
