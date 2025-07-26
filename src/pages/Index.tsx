import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySidebar from '@/components/CategorySidebar';
import ProductGrid from '@/components/ProductGrid';
import Cart from '@/components/Cart';
import Partners from '@/components/Partners';
import { StoreProvider } from '@/contexts/StoreContext';

const Index = () => {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <HeroSection />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <CategorySidebar />
            </div>
            
            {/* Products */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
                <p className="text-muted-foreground">
                  Discover our wide range of electronics and components
                </p>
              </div>
              <ProductGrid />
            </div>
          </div>
        </main>
        
        <Partners />
        
        {/* Footer */}
        <footer className="bg-muted/30 border-t mt-16 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                  SatyaElectronics Hub
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your trusted partner for electronics components and development boards.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-3">Categories</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Arduino</li>
                  <li>Raspberry Pi</li>
                  <li>Sensors</li>
                  <li>Motors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Help Center</li>
                  <li>Documentation</li>
                  <li>Tutorials</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Connect</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Newsletter</li>
                  <li>Social Media</li>
                  <li>Community</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              © 2024 SatyaElectronics Hub. All rights reserved.
            </div>
          </div>
        </footer>
        
        <Cart />
      </div>
    </StoreProvider>
  );
};

export default Index;
