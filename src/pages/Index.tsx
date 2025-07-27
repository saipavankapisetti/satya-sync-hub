import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySidebar from '@/components/CategorySidebar';
import ProductGrid from '@/components/ProductGrid';
import ProductFilters from '@/components/ProductFilters';
import Cart from '@/components/Cart';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import { StoreProvider } from '@/contexts/StoreContext';
import { useState } from 'react';

const Index = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    brands: [],
    categories: []
  });

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
    // You can implement filter logic here
    console.log('Filters changed:', newFilters);
  };

  return (
    <StoreProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <HeroSection />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <CategorySidebar />
                <div className="mt-8">
                  <ProductFilters onFiltersChange={handleFiltersChange} />
                </div>
              </div>
            </div>
            
            {/* Products */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Featured Products</h2>
                <p className="text-base md:text-lg text-gray-600">
                  Discover our wide range of electronics and components
                </p>
              </div>
              
              {/* Mobile Filters */}
              <div className="lg:hidden mb-6">
                <ProductFilters onFiltersChange={handleFiltersChange} />
              </div>
              
              <ProductGrid />
            </div>
          </div>
        </main>
        
        <Partners />
        
        <Footer />
        
        <Cart />
      </div>
    </StoreProvider>
  );
};

export default Index;
