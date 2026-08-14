import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../types/ecommerce';
import { PRODUCTS } from '../data/products';

interface NavigationContextType {
  currentPage: 'home' | 'product-detail';
  activeProduct: Product | null;
  navigateToProduct: (product: Product) => void;
  navigateToProductById: (productId: string) => void;
  navigateToHome: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<'home' | 'product-detail'>('home');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Sync hash routing on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#product/')) {
        const productId = hash.replace('#product/', '');
        const found = PRODUCTS.find((p) => p.id === productId);
        if (found) {
          setActiveProduct(found);
          setCurrentPage('product-detail');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      } else if (hash === '#home' || hash === '' || hash.startsWith('#categories') || hash.startsWith('#best-sellers') || hash.startsWith('#new-arrivals') || hash.startsWith('#about')) {
        if (currentPage === 'product-detail') {
          setCurrentPage('home');
          setActiveProduct(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToProduct = (product: Product) => {
    setActiveProduct(product);
    setCurrentPage('product-detail');
    window.location.hash = `#product/${product.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProductById = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) {
      navigateToProduct(found);
    }
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setActiveProduct(null);
    if (window.location.hash.startsWith('#product/')) {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        activeProduct,
        navigateToProduct,
        navigateToProductById,
        navigateToHome,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
