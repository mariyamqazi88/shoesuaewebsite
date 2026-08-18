import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { QuickViewProvider } from './context/QuickViewContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';

import { BootLoader } from './components/layout/BootLoader';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { ContinuousMarquee } from './components/sections/ContinuousMarquee';
import { ValuePropSection } from './components/sections/ValuePropSection';
import { PromoBannersSection } from './components/sections/PromoBannersSection';
import { SlidingProductShowcase } from './components/sections/SlidingProductShowcase';
import { NewArrivalsSection } from './components/sections/NewArrivalsSection';
import { CategoryGridSection } from './components/sections/CategoryGridSection';
import { NewsletterSection } from './components/sections/NewsletterSection';

import { ProductDetailPage } from './components/shop/ProductDetailPage';
import { CartDrawer } from './components/shop/CartDrawer';
import { OrderConfirmationModal } from './components/checkout/OrderConfirmationModal';
import { ProductQuickViewModal } from './components/shop/ProductQuickViewModal';
import { SearchModal } from './components/shop/SearchModal';

const AppContent: React.FC = () => {
  const [bootCompleted, setBootCompleted] = useState(false);
  const { currentPage } = useNavigation();

  return (
    <>
      {/* Engineering Boot Loader on First Mount */}
      <BootLoader onComplete={() => setBootCompleted(true)} />

      {/* Main Application Content */}
      <div
        className={`min-h-screen flex flex-col transition-opacity duration-700 ${
          bootCompleted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <AnnouncementBar />
        <Navbar />

        <main className="flex-1">
          {currentPage === 'product-detail' ? (
            <ProductDetailPage />
          ) : (
            <>
              {/* Core Home Sections */}
              <HeroSection />
              <ContinuousMarquee variant="dark" />
              <ValuePropSection />
              <NewArrivalsSection />
              <PromoBannersSection />
              <ContinuousMarquee variant="accent" />
              <SlidingProductShowcase />
              <CategoryGridSection />
              <NewsletterSection />
            </>
          )}
        </main>

        <Footer />

        {/* Interactive Drawers & Overlays */}
        <CartDrawer />
        <OrderConfirmationModal />
        <ProductQuickViewModal />
        <SearchModal />
      </div>
    </>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <QuickViewProvider>
          <NavigationProvider>
            <AppContent />
          </NavigationProvider>
        </QuickViewProvider>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
