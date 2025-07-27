import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySidebar from '@/components/CategorySidebar';
import ProductGrid from '@/components/ProductGrid';
import Cart from '@/components/Cart';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import { StoreProvider } from '@/contexts/StoreContext';

const Index = () => {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <HeroSection />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <CategorySidebar />
            </div>
            
            {/* Products */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Featured Products</h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Discover our wide range of electronics and components
                </p>
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
