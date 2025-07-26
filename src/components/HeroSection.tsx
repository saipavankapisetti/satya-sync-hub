import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Power Your
              <br />
              <span className="text-primary-glow animate-glow">Electronics</span>
              <br />
              Dreams
            </h1>
            
            <p className="text-xl mb-8 opacity-90">
              Discover cutting-edge electronics, microcontrollers, sensors, and components 
              for your next innovative project. From Arduino to Raspberry Pi, we have everything 
              you need to bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Explore Categories
              </Button>
            </div>
          </div>

          {/* Feature cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-glow/20 rounded-lg">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Latest Technology</h3>
                  <p className="text-sm opacity-90">Cutting-edge components and modules</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-glow/20 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quality Guaranteed</h3>
                  <p className="text-sm opacity-90">Authentic products with warranty</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-glow/20 rounded-lg">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Fast Delivery</h3>
                  <p className="text-sm opacity-90">Free shipping on orders above ₹999</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;